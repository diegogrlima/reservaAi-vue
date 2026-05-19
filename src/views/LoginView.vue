<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import axios from "axios";
import { useForm } from "vee-validate";
import { computed, ref } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import * as z from "zod";
import { login } from "@/services/authService";

const schema = toTypedSchema(
  z.object({
    email: z.string().email("E-mail inválido"),
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
  })
);

const { defineField, handleSubmit, errors } = useForm({
  validationSchema: schema,
});

const router = useRouter();
const route = useRoute();
const isLoading = ref(false);
const submitError = ref("");

const successMessage = computed(() => (
  route.query.registered === "1" ? "Conta criada com sucesso. Faça login para continuar." : ""
));

const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");

const onSubmit = handleSubmit(async (values) => {
  submitError.value = "";
  isLoading.value = true;

  try {
    await login(values);
    await router.push("/reservar");
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      submitError.value = "E-mail ou senha inválidos.";
      return;
    }

    submitError.value = "Não foi possível entrar. Tente novamente.";
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <section class="flex min-h-screen items-center justify-center bg-stone-100 px-6 py-24">
    <div class="w-full max-w-md rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
      <div class="mb-8 text-center">
        <RouterLink to="/" class="text-3xl font-bold text-slate-900">
          Reserva<span class="text-blue-600">AI</span>
        </RouterLink>
        <p class="mt-3 text-slate-600">
          Entre na sua conta para continuar
        </p>
      </div>

      <form class="space-y-6" @submit="onSubmit">
        <p
          v-if="successMessage"
          class="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
        >
          {{ successMessage }}
        </p>

        <p
          v-if="submitError"
          class="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
        >
          {{ submitError }}
        </p>

        <div>
          <label class="mb-2 block text-sm font-medium text-slate-600">
            E-mail
          </label>
          <input
            v-model="email"
            v-bind="emailAttrs"
            type="email"
            placeholder="seuemail@email.com"
            class="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none transition focus:border-blue-300"
          />
          <p v-if="errors.email" class="mt-2 text-sm text-red-500">
            {{ errors.email }}
          </p>
        </div>

        <div>
          <label class="mb-2 block text-sm font-medium text-slate-600">
            Senha
          </label>
          <input
            v-model="password"
            v-bind="passwordAttrs"
            type="password"
            placeholder="Sua senha"
            class="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none transition focus:border-blue-300"
          />
          <p v-if="errors.password" class="mt-2 text-sm text-red-500">
            {{ errors.password }}
          </p>
        </div>

        <button
          type="submit"
          :disabled="isLoading"
          class="w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
        >
          {{ isLoading ? "Entrando..." : "Entrar" }}
        </button>
      </form>

      <p class="mt-8 text-center text-sm text-slate-600">
        Não tem uma conta?
        <RouterLink
          to="/register"
          class="font-semibold text-blue-600 transition hover:text-blue-700"
        >
          Criar conta
        </RouterLink>
      </p>
    </div>
  </section>
</template>
