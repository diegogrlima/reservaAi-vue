<script setup lang="ts">
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import { Mail, Shield, UserRound } from "@lucide/vue";
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { getStoredUser } from "@/services/authService";

const user = computed(() => getStoredUser());
</script>

<template>
  <HeaderComponent />

  <main class="min-h-screen bg-gray-50 px-6 py-12">
    <section class="mx-auto max-w-3xl">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-slate-900">Meu perfil</h1>
        <p class="mt-2 text-slate-600">
          Dados da conta autenticada no ReservaAI.
        </p>
      </div>

      <div v-if="user" class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div class="mb-6 flex items-center gap-4 border-b border-slate-100 pb-6">
          <div class="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <UserRound :size="30" />
          </div>

          <div class="min-w-0">
            <h2 class="truncate text-xl font-bold text-slate-900">
              {{ user.name }}
            </h2>
            <p class="truncate text-sm text-slate-500">{{ user.email }}</p>
          </div>
        </div>

        <dl class="grid gap-4 sm:grid-cols-2">
          <div class="rounded-lg border border-slate-200 p-4">
            <dt class="mb-2 flex items-center gap-2 text-sm font-medium text-slate-500">
              <Mail :size="18" />
              E-mail
            </dt>
            <dd class="break-words font-semibold text-slate-900">
              {{ user.email }}
            </dd>
          </div>

          <div class="rounded-lg border border-slate-200 p-4">
            <dt class="mb-2 flex items-center gap-2 text-sm font-medium text-slate-500">
              <Shield :size="18" />
              Perfil de acesso
            </dt>
            <dd class="font-semibold text-slate-900">{{ user.role }}</dd>
          </div>
        </dl>
      </div>

      <div v-else class="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h2 class="text-xl font-bold text-slate-900">Você não está autenticado</h2>
        <p class="mt-2 text-slate-600">
          Entre na sua conta para visualizar os dados do perfil.
        </p>
        <RouterLink
          to="/login"
          class="mt-6 inline-flex rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Entrar
        </RouterLink>
      </div>
    </section>
  </main>

  <footer>
    <FooterComponent />
  </footer>
</template>
