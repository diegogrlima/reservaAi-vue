<script setup lang="ts">
import { Menu, X } from "@lucide/vue";
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isOpen = ref(false);

function closeMenu() {
  isOpen.value = false;
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
            <RouterLink to="/" class="hover:text-blue-600">Início</RouterLink>
          </li>
          <li>
            <a href="#como-funciona" class="hover:text-blue-600"
              >Como funciona</a
            >
          </li>
          <li>
            <a href="#beneficios" class="hover:text-blue-600">Benefícios</a>
          </li>
          <li><a href="#contato" class="hover:text-blue-600">Contato</a></li>

          <li>
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

        <li>
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
      </ul>
    </nav>
  </header>
</template>
