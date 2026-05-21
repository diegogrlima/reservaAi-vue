<script setup lang="ts">
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import { ArrowLeft, CalendarDays, CheckCircle2, Users } from "@lucide/vue";
import axios from "axios";
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { createBooking } from "@/services/bookingService";
import { getStoredUser } from "@/services/authService";
import { getRoomById } from "@/services/roomService";
import type { Room } from "@/services/roomService";

const route = useRoute();
const router = useRouter();

const room = ref<Room | undefined>(undefined);
const loading = ref(true);
const isSubmitting = ref(false);
const submitError = ref("");
const successMessage = ref("");
const checkIn = ref("");
const checkOut = ref("");

const roomId = computed(() => Number(route.params.id));
const user = computed(() => getStoredUser());
const totalNights = computed(() => {
  if (!checkIn.value || !checkOut.value) {
    return 0;
  }

  const start = new Date(`${checkIn.value}T00:00:00`);
  const end = new Date(`${checkOut.value}T00:00:00`);
  const diffInMs = end.getTime() - start.getTime();

  return Math.max(0, Math.ceil(diffInMs / 86400000));
});
const estimatedTotal = computed(() => {
  if (!room.value || totalNights.value === 0) {
    return 0;
  }

  return room.value.dailyRate * totalNights.value;
});

onMounted(async () => {
  if (!user.value) {
    await router.replace({
      path: "/login",
      query: { redirect: route.fullPath },
    });
    return;
  }

  try {
    room.value = await getRoomById(roomId.value);
  } finally {
    loading.value = false;
  }
});

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function validateForm() {
  if (!checkIn.value || !checkOut.value) {
    return "Informe as datas de check-in e check-out.";
  }

  if (checkOut.value <= checkIn.value) {
    return "A data de check-out deve ser posterior ao check-in.";
  }

  return "";
}

async function submitBooking() {
  submitError.value = "";
  successMessage.value = "";

  const validationError = validateForm();
  if (validationError) {
    submitError.value = validationError;
    return;
  }

  if (!user.value) {
    await router.push({
      path: "/login",
      query: { redirect: route.fullPath },
    });
    return;
  }

  if (!room.value) {
    submitError.value = "Quarto não encontrado para reserva.";
    return;
  }

  isSubmitting.value = true;

  try {
    await createBooking({
      userId: user.value.id,
      roomId: room.value.id,
      checkIn: checkIn.value,
      checkOut: checkOut.value,
    });

    successMessage.value = "Reserva realizada com sucesso.";
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 409) {
      submitError.value = "Este quarto ou usuário já possui uma reserva confirmada.";
      return;
    }

    submitError.value = "Não foi possível realizar a reserva. Tente novamente.";
  } finally {
    isSubmitting.value = false;
  }
}

function goBack() {
  router.push("/reservar");
}
</script>

<template>
  <HeaderComponent />

  <main
    v-if="loading"
    class="flex min-h-screen items-center justify-center bg-gray-50"
  >
    <p class="text-lg text-slate-500">Carregando reserva...</p>
  </main>

  <main v-else-if="room" class="min-h-screen bg-gray-50 px-6 py-12">
    <div class="mx-auto max-w-7xl">
      <button
        type="button"
        class="mb-6 flex items-center gap-2 font-medium text-slate-600 hover:text-blue-600"
        @click="goBack"
      >
        <ArrowLeft :size="20" />
        Voltar para quartos
      </button>

      <div class="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <section class="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <img
            :src="room.image"
            :alt="room.name"
            class="h-80 w-full object-cover"
          />

          <div class="p-6">
            <div class="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span class="text-sm font-semibold text-blue-600">
                  Quarto {{ room.roomNumber }}
                </span>
                <h1 class="mt-1 text-3xl font-bold text-slate-900">
                  {{ room.name }}
                </h1>
              </div>

              <div class="sm:text-right">
                <p class="text-2xl font-bold text-blue-600">
                  {{ formatCurrency(room.dailyRate) }}
                </p>
                <p class="text-sm text-slate-500">por noite</p>
              </div>
            </div>

            <p class="mb-6 leading-relaxed text-slate-600">
              {{ room.fullDescription || room.description }}
            </p>

            <div class="grid gap-4 sm:grid-cols-2">
              <div class="flex items-center gap-3 rounded-lg border border-slate-200 p-4">
                <Users :size="20" class="text-blue-600" />
                <span class="font-medium text-slate-700">
                  Até {{ room.capacity }} pessoas
                </span>
              </div>

              <div class="flex items-center gap-3 rounded-lg border border-slate-200 p-4">
                <CalendarDays :size="20" class="text-blue-600" />
                <span class="font-medium text-slate-700">
                  Tipo {{ room.roomType }}
                </span>
              </div>
            </div>

            <div v-if="room.amenities.length" class="mt-6">
              <h2 class="mb-3 text-lg font-bold text-slate-900">Comodidades</h2>
              <ul class="grid gap-2 sm:grid-cols-2">
                <li
                  v-for="amenity in room.amenities"
                  :key="amenity"
                  class="flex items-center gap-2 text-sm text-slate-600"
                >
                  <CheckCircle2 :size="17" class="text-blue-600" />
                  {{ amenity }}
                </li>
              </ul>
            </div>
          </div>
        </section>

        <aside class="h-fit rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 class="text-2xl font-bold text-slate-900">Dados da reserva</h2>
          <p class="mt-2 text-sm text-slate-500">
            Preencha as datas para confirmar sua estadia.
          </p>

          <form class="mt-6 space-y-5" @submit.prevent="submitBooking">
            <p
              v-if="successMessage"
              class="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
            >
              {{ successMessage }}
            </p>

            <p
              v-if="submitError"
              class="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
            >
              {{ submitError }}
            </p>

            <div>
              <label class="mb-2 block text-sm font-medium text-slate-600">
                Check-in
              </label>
              <input
                v-model="checkIn"
                type="date"
                required
                class="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-400"
              />
            </div>

            <div>
              <label class="mb-2 block text-sm font-medium text-slate-600">
                Check-out
              </label>
              <input
                v-model="checkOut"
                type="date"
                required
                class="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-400"
              />
            </div>

            <div class="rounded-lg bg-slate-50 p-4">
              <div class="flex items-center justify-between text-sm text-slate-600">
                <span>Noites</span>
                <span class="font-semibold text-slate-900">{{ totalNights }}</span>
              </div>
              <div class="mt-2 flex items-center justify-between text-sm text-slate-600">
                <span>Total estimado</span>
                <span class="text-lg font-bold text-blue-600">
                  {{ formatCurrency(estimatedTotal) }}
                </span>
              </div>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
            >
              {{ isSubmitting ? "Enviando..." : "Fazer Reserva" }}
            </button>
          </form>
        </aside>
      </div>
    </div>
  </main>

  <main v-else class="flex min-h-screen items-center justify-center bg-gray-50 px-6">
    <div class="text-center">
      <h1 class="text-2xl font-bold text-slate-900">Quarto não encontrado</h1>
      <p class="mt-2 text-slate-600">Não foi possível carregar o quarto selecionado.</p>
      <button
        type="button"
        class="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        @click="goBack"
      >
        Ver quartos
      </button>
    </div>
  </main>

  <footer>
    <FooterComponent />
  </footer>
</template>
