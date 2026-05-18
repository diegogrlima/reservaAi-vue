<script setup lang="ts">
import { BadgeCheck, CalendarCheck, Search } from "@lucide/vue";

const steps = [
  {
    icon: Search,
    title: "Escolha seu destino",
    description:
      "Encontre hotéis, resorts e experiências que combinam com sua próxima viagem.",
  },
  {
    icon: CalendarCheck,
    title: "Selecione a melhor data",
    description:
      "Veja disponibilidade, escolha o período ideal e organize sua estadia com facilidade.",
  },
  {
    icon: BadgeCheck,
    title: "Confirme sua reserva",
    description:
      "Finalize sua reserva de forma simples, rápida e segura em poucos cliques.",
  },
];
</script>

<template>
  <section class="bg-slate-50 py-24">
    <div class="mx-auto max-w-7xl px-6">
      <div class="mx-auto max-w-2xl text-center">
        <span
          class="text-sm font-semibold uppercase tracking-wide text-blue-600"
        >
          Como funciona
        </span>

        <h2 class="mt-3 text-3xl font-bold text-slate-900 md:text-5xl">
          Reserve sua próxima experiência sem complicação
        </h2>

        <p class="mt-5 text-lg leading-relaxed text-slate-600">
          Do destino à confirmação, o ReservaAI ajuda você a planejar sua
          estadia de forma prática e moderna.
        </p>
      </div>

      <div class="mt-16 grid gap-8 md:grid-cols-3">
        <article
          v-for="(step, index) in steps"
          :key="step.title"
          class="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md"
        >
          <div
            class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"
          >
            <component :is="step.icon" :size="28" />
          </div>

          <span class="text-sm font-semibold text-blue-600">
            Passo {{ index + 1 }}
          </span>

          <h3 class="mt-3 text-xl font-bold text-slate-900">
            {{ step.title }}
          </h3>

          <p class="mt-4 leading-relaxed text-slate-600">
            {{ step.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
