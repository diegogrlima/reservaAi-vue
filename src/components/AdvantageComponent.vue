<script setup lang="ts">
import { ShieldCheck, Clock3, CreditCard } from "@lucide/vue";
</script>

<template>
  <section class="bg-slate-900 py-24 text-white">
    <div class="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
      <!-- Texto -->
      <div>
        <span
          class="text-sm font-semibold uppercase tracking-widest text-blue-400"
        >
          Benefícios
        </span>

        <h2 class="mt-4 text-4xl font-bold leading-tight md:text-5xl">
          Uma experiência moderna para suas reservas
        </h2>

        <p class="mt-6 text-lg leading-relaxed text-slate-300">
          O ReservaAI oferece uma plataforma intuitiva, rápida e segura para
          você encontrar hospedagens incríveis sem complicação.
        </p>

        <!-- Lista -->
        <div class="mt-10 space-y-6">
          <div class="flex gap-4">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400"
            >
              <ShieldCheck :size="24" />
            </div>

            <div>
              <h3 class="text-lg font-semibold">Segurança em cada reserva</h3>

              <p class="mt-1 text-slate-400">
                Proteção de dados e processos confiáveis durante toda sua
                experiência.
              </p>
            </div>
          </div>

          <div class="flex gap-4">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400"
            >
              <Clock3 :size="24" />
            </div>

            <div>
              <h3 class="text-lg font-semibold">Rapidez e praticidade</h3>

              <p class="mt-1 text-slate-400">
                Reserve hospedagens em poucos minutos de maneira simples e
                intuitiva.
              </p>
            </div>
          </div>

          <div class="flex gap-4">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400"
            >
              <CreditCard :size="24" />
            </div>

            <div>
              <h3 class="text-lg font-semibold">Pagamentos facilitados</h3>

              <p class="mt-1 text-slate-400">
                Diferentes opções para concluir sua reserva com tranquilidade.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Card destaque -->
      <div class="relative">
        <div
          class="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
        >
          <div class="space-y-6">
            <div class="rounded-2xl bg-white/5 p-5">
              <p class="text-sm text-slate-400">Hospedagens disponíveis</p>

              <h3 class="mt-2 text-3xl font-bold">+2.500</h3>
            </div>

            <div class="rounded-2xl bg-blue-500 p-6">
              <p class="text-sm text-blue-100">Reservas concluídas</p>

              <h3 class="mt-2 text-4xl font-bold">+15 mil</h3>
            </div>

            <div class="rounded-2xl bg-white/5 p-5">
              <p class="text-sm text-slate-400">Avaliação média</p>

              <h3 class="mt-2 text-3xl font-bold">4.9 ★</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
