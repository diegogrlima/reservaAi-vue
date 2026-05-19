<script setup lang="ts">
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import {
  Users,
  ChevronLeft,
  ChevronRight,
  Check,
  ArrowLeft,
} from "@lucide/vue";
import { computed, ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getRoomById } from "@/services/roomService";
import type { Room } from "@/services/roomService";

const route = useRoute();
const router = useRouter();

const room = ref<Room | undefined>(undefined);
const loading = ref(true);
const currentImage = ref(0);

const roomId = computed(() => Number(route.params.id));

onMounted(async () => {
  try {
    room.value = await getRoomById(roomId.value);
  } catch {
    room.value = undefined;
  } finally {
    loading.value = false;
  }
});

function prevImage() {
  if (!room.value) return;
  currentImage.value =
    (currentImage.value - 1 + room.value.gallery.length) %
    room.value.gallery.length;
}

function nextImage() {
  if (!room.value) return;
  currentImage.value = (currentImage.value + 1) % room.value.gallery.length;
}

function goBack() {
  router.push("/reservar");
}
</script>

<template>
  <HeaderComponent />

  <main
    v-if="loading"
    class="min-h-screen bg-gray-50 flex items-center justify-center"
  >
    <p class="text-slate-500 text-lg">Carregando detalhes do quarto...</p>
  </main>

  <main v-else-if="room" class="min-h-screen bg-gray-50 py-12 px-6">
    <div class="max-w-5xl mx-auto">
      <button
        @click="goBack"
        class="flex items-center gap-2 text-slate-600 hover:text-blue-600 mb-6 font-medium"
      >
        <ArrowLeft :size="20" />
        Voltar para quartos
      </button>

      <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <!-- Gallery -->
        <div class="relative">
          <img
            :src="room.gallery[currentImage]"
            :alt="room.name"
            class="w-full h-96 object-cover"
          />

          <button
            @click="prevImage"
            class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 hover:bg-white shadow-md"
          >
            <ChevronLeft :size="24" />
          </button>

          <button
            @click="nextImage"
            class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 hover:bg-white shadow-md"
          >
            <ChevronRight :size="24" />
          </button>

          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <span
              v-for="(_, index) in room.gallery"
              :key="index"
              :class="[
                'w-2 h-2 rounded-full transition-colors',
                currentImage === index ? 'bg-white' : 'bg-white/50',
              ]"
            />
          </div>

          <span
            class="absolute top-4 right-4 bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full"
          >
            Quarto {{ room.roomNumber }}
          </span>
        </div>

        <!-- Thumbnails -->
        <div class="flex gap-2 p-4 overflow-x-auto">
          <button
            v-for="(img, index) in room.gallery"
            :key="index"
            @click="currentImage = index"
            :class="[
              'w-24 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-colors',
              currentImage === index
                ? 'border-blue-600'
                : 'border-transparent hover:border-slate-300',
            ]"
          >
            <img
              :src="img"
              :alt="`${room.name} - Foto ${index + 1}`"
              class="w-full h-full object-cover"
            />
          </button>
        </div>

        <!-- Content -->
        <div class="p-8">
          <div
            class="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8"
          >
            <div>
              <h1 class="text-3xl font-bold text-slate-900 mb-2">
                {{ room.name }}
              </h1>
              <div class="flex items-center gap-2 text-slate-500">
                <Users :size="18" />
                <span>Até {{ room.capacity }} pessoas</span>
              </div>
            </div>

            <div class="text-right">
              <span class="text-3xl font-bold text-blue-600">
                R$ {{ room.dailyRate.toFixed(2).replace(".", ",") }}
              </span>
              <span class="text-slate-500 block text-sm">/noite</span>
            </div>
          </div>

          <div class="mb-8">
            <h2 class="text-xl font-bold text-slate-900 mb-4">
              Sobre o quarto
            </h2>
            <p class="text-slate-600 leading-relaxed">
              {{ room.fullDescription }}
            </p>
          </div>

          <div class="mb-8">
            <h2 class="text-xl font-bold text-slate-900 mb-4">Comodidades</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                v-for="amenity in room.amenities"
                :key="amenity"
                class="flex items-center gap-3 text-slate-700"
              >
                <Check :size="18" class="text-blue-600 shrink-0" />
                <span>{{ amenity }}</span>
              </div>
            </div>
          </div>

          <div
            class="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-200"
          >
            <button
              class="flex-1 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold text-lg"
            >
              Reservar agora
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>

  <div v-else class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="text-center">
      <h2 class="text-2xl font-bold text-slate-900 mb-2">
        Quarto não encontrado
      </h2>
      <p class="text-slate-600 mb-6">
        O quarto que você procura não existe ou foi removido.
      </p>
      <button
        @click="goBack"
        class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
      >
        Ver todos os quartos
      </button>
    </div>
  </div>

  <footer>
    <FooterComponent />
  </footer>
</template>
