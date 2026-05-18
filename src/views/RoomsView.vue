<script setup lang="ts">
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import { Users } from "@lucide/vue";
import { ref, onMounted } from "vue";
import { getAllRooms } from "@/services/roomService";
import type { Room } from "@/data/rooms";

const rooms = ref<Room[]>([]);
const loading = ref(true);

onMounted(async () => {
  try {
    rooms.value = await getAllRooms();
  } catch {
    rooms.value = [];
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <HeaderComponent />

  <main class="min-h-screen bg-gray-50 py-12 px-6">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-bold text-slate-900 mb-8">
        Quartos Disponíveis
      </h1>

      <div v-if="loading" class="text-center py-12">
        <p class="text-slate-500 text-lg">Carregando quartos...</p>
      </div>

      <div
        v-else-if="rooms.length === 0"
        class="text-center py-12"
      >
        <p class="text-slate-500 text-lg">Nenhum quarto disponível no momento.</p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <RouterLink
          v-for="room in rooms"
          :key="room.id"
          :to="`/reservar/${room.id}`"
          class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow block cursor-pointer"
        >
          <div class="relative">
            <img
              :src="room.image"
              :alt="room.name"
              class="w-full h-56 object-cover"
            />
            <span
              class="absolute top-3 right-3 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full"
            >
              Quarto {{ room.roomNumber }}
            </span>
          </div>

          <div class="p-6">
            <h2 class="text-xl font-bold text-slate-900 mb-2">
              {{ room.name }}
            </h2>

            <p class="text-slate-600 text-sm mb-4">
              {{ room.description }}
            </p>

            <div class="flex items-center gap-2 text-slate-500 text-sm mb-4">
              <Users :size="16" />
              <span>Até {{ room.capacity }} pessoas</span>
            </div>

            <div class="flex items-center justify-between">
              <div>
                <span class="text-2xl font-bold text-blue-600">
                  R$ {{ room.dailyRate.toFixed(2).replace(".", ",") }}
                </span>
                <span class="text-slate-500 text-sm">/noite</span>
              </div>

              <button
                class="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
              >
                Reservar
              </button>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </main>

  <footer>
    <FooterComponent />
  </footer>
</template>
