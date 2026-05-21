<script setup lang="ts">
import { ChevronDown, CircleUserRound, LogOut, Menu, User, X } from "@lucide/vue";
import { computed, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { getStoredUser, logout } from "@/services/authService";

const isOpen = ref(false);
const isUserMenuOpen = ref(false);
const router = useRouter();
const user = computed(() => getStoredUser());

function closeMenu() {
  isOpen.value = false;
  isUserMenuOpen.value = false;
}

async function handleLogout() {
  logout();
  closeMenu();
  await router.push("/login");
}
</script>

<template>
  <header class="w-full bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <RouterLink
        to="/"
        class="text-2xl font-bold text-slate-900"
        @click="closeMenu"
      >
        Reserva<span class="text-blue-600">AI</span>
      </RouterLink>

      <!-- Desktop -->
      <nav class="hidden md:block">
        <ul class="flex items-center gap-6 text-sm font-medium text-slate-700">
          <li>
            <RouterLink to="/" class="hover:text-blue-600" href="#home"
              >Início</RouterLink
            >
          </li>
          <li>
            <a href="#howDoesItWork" class="hover:text-blue-600"
              >Como funciona</a
            >
          </li>
          <li>
            <a href="#advantages" class="hover:text-blue-600">Benefícios</a>
          </li>
          <li><a href="#contact" class="hover:text-blue-600">Contato</a></li>

          <li v-if="!user">
            <RouterLink
              to="/login"
              class="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Entrar
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/reservar"
              class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Fazer reserva
            </RouterLink>
          </li>

          <li v-if="user" class="relative">
            <button
              type="button"
              class="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              aria-label="Abrir menu do usuário"
              :aria-expanded="isUserMenuOpen"
              @click="isUserMenuOpen = !isUserMenuOpen"
            >
              <CircleUserRound :size="22" />
              <span class="max-w-32 truncate">{{ user.name }}</span>
              <ChevronDown :size="16" />
            </button>

            <div
              v-if="isUserMenuOpen"
              class="absolute right-0 z-20 mt-2 w-56 overflow-hidden rounded-lg border border-slate-200 bg-white py-2 shadow-lg"
            >
              <div class="border-b border-slate-100 px-4 py-3">
                <p class="truncate text-sm font-semibold text-slate-900">
                  {{ user.name }}
                </p>
                <p class="truncate text-xs text-slate-500">
                  {{ user.email }}
                </p>
              </div>

              <RouterLink
                to="/perfil"
                class="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                @click="closeMenu"
              >
                <User :size="18" />
                Perfil
              </RouterLink>

              <button
                type="button"
                class="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-50 hover:text-red-600"
                @click="handleLogout"
              >
                <LogOut :size="18" />
                Sair
              </button>
            </div>
          </li>
        </ul>
      </nav>

      <!-- Botão mobile -->
      <button
        type="button"
        class="md:hidden text-slate-900"
        @click="isOpen = !isOpen"
        aria-label="Abrir menu"
      >
        <X v-if="isOpen" :size="28" />
        <Menu v-else :size="28" />
      </button>
    </div>

    <!-- Mobile -->
    <nav
      v-if="isOpen"
      class="md:hidden border-t border-slate-200 bg-white px-6 py-4"
    >
      <ul class="flex flex-col gap-4 text-sm font-medium text-slate-700">
        <li>
          <RouterLink
            to="/"
            class="block hover:text-blue-600"
            @click="closeMenu"
          >
            Início
          </RouterLink>
        </li>

        <li>
          <a
            href="#como-funciona"
            class="block hover:text-blue-600"
            @click="closeMenu"
          >
            Como funciona
          </a>
        </li>

        <li>
          <a
            href="#beneficios"
            class="block hover:text-blue-600"
            @click="closeMenu"
          >
            Benefícios
          </a>
        </li>

        <li>
          <a
            href="#contato"
            class="block hover:text-blue-600"
            @click="closeMenu"
          >
            Contato
          </a>
        </li>

        <li v-if="!user">
          <RouterLink
            to="/login"
            class="block w-full text-center px-4 py-2 rounded-lg border border-blue-600 text-blue-600"
            @click="closeMenu"
          >
            Entrar
          </RouterLink>
        </li>

        <li>
          <RouterLink
            to="/reservar"
            class="block w-full text-center px-4 py-2 rounded-lg bg-blue-600 text-white"
            @click="closeMenu"
          >
            Fazer reserva
          </RouterLink>
        </li>

        <li v-if="user" class="border-t border-slate-200 pt-4">
          <div class="mb-3 flex items-center gap-3">
            <CircleUserRound :size="32" class="text-blue-600" />
            <div class="min-w-0">
              <p class="truncate font-semibold text-slate-900">
                {{ user.name }}
              </p>
              <p class="truncate text-xs text-slate-500">
                {{ user.email }}
              </p>
            </div>
          </div>
        </li>

        <li v-if="user">
          <RouterLink
            to="/perfil"
            class="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-slate-50 hover:text-blue-600"
            @click="closeMenu"
          >
            <User :size="18" />
            Perfil
          </RouterLink>
        </li>

        <li v-if="user">
          <button
            type="button"
            class="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left hover:bg-slate-50 hover:text-red-600"
            @click="handleLogout"
          >
            <LogOut :size="18" />
            Sair
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>
