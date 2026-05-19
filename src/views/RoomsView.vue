<script setup lang="ts">
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import { Users, ChevronLeft, ChevronRight } from "@lucide/vue";
import { ref, onMounted, computed } from "vue";
import { getAllRooms } from "@/services/roomService";
import type { Room } from "@/services/roomService";

const rooms = ref<Room[]>([]);
const loading = ref(true);
const currentPage = ref(0);
const totalPages = ref(0);
const totalElements = ref(0);
const pageSize = 6;

const pages = computed(() => {
  return Array.from({ length: totalPages.value }, (_, i) => i);
});

async function fetchRooms(page: number) {
  loading.value = true;
  try {
    const response = await getAllRooms(page, pageSize);
    rooms.value = response.content;
    currentPage.value = response.number;
    totalPages.value = response.totalPages;
    totalElements.value = response.totalElements;
  } catch (error) {
    console.error("Erro ao carregar quartos:", error);
    rooms.value = [];
  } finally {
    loading.value = false;
  }
}

function goToPage(page: number) {
  if (page >= 0 && page < totalPages.value) {
    fetchRooms(page);
  }
}

onMounted(() => {
  fetchRooms(0);
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

      <div v-else-if="rooms.length === 0" class="text-center py-12">
        <p class="text-slate-500 text-lg">
          Nenhum quarto disponível no momento.
        </p>
      </div>

      <div v-else>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        <div class="flex items-center justify-center gap-2 mt-12">
          <button
            @click="goToPage(currentPage - 1)"
            :disabled="currentPage === 0"
            class="p-2 rounded-lg border border-slate-300 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft :size="20" />
          </button>

          <button
            v-for="page in pages"
            :key="page"
            @click="goToPage(page)"
            :class="[
              'px-4 py-2 rounded-lg font-medium transition-colors',
              currentPage === page
                ? 'bg-blue-600 text-white'
                : 'border border-slate-300 hover:bg-slate-100',
            ]"
          >
            {{ page + 1 }}
          </button>

          <button
            @click="goToPage(currentPage + 1)"
            :disabled="currentPage >= totalPages - 1"
            class="p-2 rounded-lg border border-slate-300 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight :size="20" />
          </button>
        </div>

        <p class="text-center text-slate-500 text-sm mt-4">
          Mostrando {{ rooms.length }} de {{ totalElements }} quartos
        </p>
      </div>
    </div>
  </main>

  <footer>
    <FooterComponent />
  </footer>
</template>
