<script setup lang="ts">
import AdvantageComponent from "@/components/AdvantageComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
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
    <section id="advantages">
      <AdvantageComponent />
    </section>
    <section id="contact">
      <ContactComponent />
    </section>
  </main>
  <footer>
    <FooterComponent />
  </footer>
</template>
