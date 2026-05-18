<script setup lang="ts">
import { Mail, Phone, MapPin, Users, Camera, MessageCircle } from "@lucide/vue";
</script>

<template>
  <footer class="bg-slate-900 text-slate-300">
    <div class="mx-auto max-w-7xl px-6 py-16">
      <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <!-- Logo e descrição -->
        <div>
          <h3 class="text-2xl font-bold text-white">
            Reserva<span class="text-blue-500">AI</span>
          </h3>
          <p class="mt-4 text-sm leading-relaxed text-slate-400">
            Simplificando reservas com inteligência artificial. Encontre a
            hospedagem perfeita para sua próxima viagem.
          </p>
        </div>

        <!-- Links rápidos -->
        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider text-white">
            Links rápidos
          </h4>
          <ul class="mt-4 space-y-3 text-sm">
            <li>
              <a href="#home" class="transition hover:text-blue-400">Início</a>
            </li>
            <li>
              <a href="#howDoesItWork" class="transition hover:text-blue-400">
                Como funciona
              </a>
            </li>
            <li>
              <a href="#advantages" class="transition hover:text-blue-400">
                Benefícios
              </a>
            </li>
            <li>
              <a href="#contact" class="transition hover:text-blue-400">
                Contato
              </a>
            </li>
          </ul>
        </div>

        <!-- Contato -->
        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider text-white">
            Contato
          </h4>
          <ul class="mt-4 space-y-4 text-sm">
            <li class="flex items-start gap-3">
              <Mail :size="18" class="mt-0.5 text-blue-500" />
              <span>contato@reservai.com</span>
            </li>
            <li class="flex items-start gap-3">
              <Phone :size="18" class="mt-0.5 text-blue-500" />
              <span>+55 (21) 99999-9999</span>
            </li>
            <li class="flex items-start gap-3">
              <MapPin :size="18" class="mt-0.5 text-blue-500" />
              <span>Teresópolis, Rio de Janeiro</span>
            </li>
          </ul>
        </div>

        <!-- Redes sociais -->
        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider text-white">
            Redes sociais
          </h4>
          <div class="mt-4 flex gap-4">
            <a
              href="#"
              class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition hover:bg-blue-600"
              aria-label="Facebook"
            >
              <Users :size="20" />
            </a>
            <a
              href="#"
              class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition hover:bg-blue-600"
              aria-label="Instagram"
            >
              <Camera :size="20" />
            </a>
            <a
              href="#"
              class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition hover:bg-blue-600"
              aria-label="Twitter"
            >
              <MessageCircle :size="20" />
            </a>
          </div>
        </div>
      </div>

      <!-- Linha inferior -->
      <div class="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
        <p>&copy; {{ new Date().getFullYear() }} ReservaAI. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>
