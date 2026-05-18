<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { RouterLink } from "vue-router";
import * as z from "zod";

const schema = toTypedSchema(
  z
    .object({
      name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres"),
      email: z.string().email("E-mail inválido"),
      password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "As senhas não coincidem",
      path: ["confirmPassword"],
    })
);

const { defineField, handleSubmit, errors } = useForm({
  validationSchema: schema,
});

const [name, nameAttrs] = defineField("name");
const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");
const [confirmPassword, confirmPasswordAttrs] = defineField("confirmPassword");

const onSubmit = handleSubmit((values) => {
  console.log(values);
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
          Crie sua conta para começar
        </p>
      </div>

      <form class="space-y-6" @submit="onSubmit">
        <div>
          <label class="mb-2 block text-sm font-medium text-slate-600">
            Nome
          </label>
          <input
            v-model="name"
            v-bind="nameAttrs"
            type="text"
            placeholder="Seu nome"
            class="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none transition focus:border-blue-300"
          />
          <p v-if="errors.name" class="mt-2 text-sm text-red-500">
            {{ errors.name }}
          </p>
        </div>

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

        <div>
          <label class="mb-2 block text-sm font-medium text-slate-600">
            Confirmar senha
          </label>
          <input
            v-model="confirmPassword"
            v-bind="confirmPasswordAttrs"
            type="password"
            placeholder="Confirme sua senha"
            class="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none transition focus:border-blue-300"
          />
          <p v-if="errors.confirmPassword" class="mt-2 text-sm text-red-500">
            {{ errors.confirmPassword }}
          </p>
        </div>

        <button
          type="submit"
          class="w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          Criar conta
        </button>
      </form>

      <p class="mt-8 text-center text-sm text-slate-600">
        Já tem uma conta?
        <RouterLink
          to="/login"
          class="font-semibold text-blue-600 transition hover:text-blue-700"
        >
          Fazer login
        </RouterLink>
      </p>
    </div>
  </section>
</template>
