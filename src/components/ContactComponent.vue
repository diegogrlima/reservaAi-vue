<script setup lang="ts">
import { Mail, Phone, MapPin } from "@lucide/vue";
</script>

<template>
  <section class="bg-stone-100 py-24 text-slate-900">
    <div class="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
      <!-- Texto -->
      <div>
        <span
          class="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500"
        >
          Contato
        </span>

        <h2 class="mt-4 text-4xl font-bold leading-tight md:text-5xl">
          Planeje sua próxima experiência conosco
        </h2>

        <p class="mt-6 text-lg leading-relaxed text-slate-600">
          Entre em contato para tirar dúvidas, receber suporte ou encontrar a
          hospedagem ideal para sua viagem.
        </p>

        <!-- Informações -->
        <div class="mt-10 space-y-6">
          <div class="flex items-center gap-4">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-500"
            >
              <Mail :size="22" />
            </div>

            <div>
              <p class="text-sm text-slate-500">E-mail</p>

              <p class="font-medium">contato@reservai.com</p>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-500"
            >
              <Phone :size="22" />
            </div>

            <div>
              <p class="text-sm text-slate-500">Telefone</p>

              <p class="font-medium">+55 (21) 99999-9999</p>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-500"
            >
              <MapPin :size="22" />
            </div>

            <div>
              <p class="text-sm text-slate-500">Localização</p>

              <p class="font-medium">Teresópolis, Rio de Janeiro</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Formulário -->
      <div class="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
        <form class="space-y-6">
          <div>
            <label class="mb-2 block text-sm font-medium text-slate-600">
              Nome
            </label>

            <input
              type="text"
              placeholder="Seu nome"
              class="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none transition focus:border-blue-300"
            />
          </div>

          <div>
            <label class="mb-2 block text-sm font-medium text-slate-600">
              E-mail
            </label>

            <input
              type="email"
              placeholder="seuemail@email.com"
              class="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none transition focus:border-blue-300"
            />
          </div>

          <div>
            <label class="mb-2 block text-sm font-medium text-slate-600">
              Mensagem
            </label>

            <textarea
              rows="5"
              placeholder="Digite sua mensagem..."
              class="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none transition focus:border-blue-300"
            />
          </div>

          <button
            type="submit"
            class="w-full rounded-xl bg-blue-500 px-6 py-4 font-semibold text-white transition focus:border-blue-300"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
