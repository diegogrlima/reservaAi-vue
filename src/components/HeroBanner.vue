<script setup lang="ts">
import { RouterLink } from "vue-router";
import bannerImage from "@/assets/images/banner-home.avif";
</script>

<template>
  <section class="relative h-[90vh] w-full overflow-hidden">
    <!-- Background -->
    <img
      :src="bannerImage"
      alt="Resort de luxo"
      class="absolute inset-0 h-full w-full object-cover"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/45"></div>

    <!-- Conteúdo -->
    <div class="relative z-10 flex h-full items-center">
      <div class="mx-auto w-full max-w-7xl px-6">
        <div class="max-w-2xl text-white">
          <span
            class="mb-5 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm"
          >
            Experiências exclusivas em um só lugar
          </span>

          <h1 class="text-5xl font-bold leading-tight md:text-7xl">
            Reserve momentos inesquecíveis
          </h1>

          <p class="mt-6 max-w-xl text-lg leading-relaxed text-slate-200">
            Descubra hotéis, resorts e destinos incríveis para sua próxima
            viagem com praticidade e conforto.
          </p>

          <div class="mt-10 flex flex-col gap-4 sm:flex-row">
            <RouterLink
              to="/reservar"
              class="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold transition hover:bg-blue-700"
            >
              Fazer reserva
            </RouterLink>

            <a
              href="#destinos"
              class="rounded-xl border border-white/30 px-6 py-3 text-center transition hover:bg-white/10"
            >
              Explorar destinos
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
