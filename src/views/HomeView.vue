<script setup lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue";
import HeroBanner from "@/components/HeroBanner.vue";
import HowDoesItWorkComponent from "@/components/HowDoesItWorkComponent.vue";
</script>

<template>
  <HeaderComponent />

  <main>
    <section id="home">
      <HeroBanner />
    </section>
    <section id="howDoesItWork">
      <HowDoesItWorkComponent />
    </section>
  </main>
</template>
