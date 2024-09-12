<template>
  <div class="servises">
    <div class="servises__row">
      <h1 class="servises__title">
        {{ t("servises.servises__title") }}
      </h1>
      <div class="servises__card--row">
        <div class="servises__card long--card" data-aos="fade-right">
          <p class="card__text">
            {{ t("servises.servises__card--text--1") }}
          </p>
          <img src="../assets/images/card1.png" alt="Card 1">
        </div>
        <div class="servises__card short--card" data-aos="fade-left">
          <p class="card__text">
            {{ t("servises.servises__card--text--2") }}
          </p>
          <img src="../assets/images/card2.png" alt="Card 2">
        </div>
        <div class="servises__card short--card" data-aos="fade-right">
          <p class="card__text">
            {{ t("servises.servises__card--text--3") }}
          </p>
          <img src="../assets/images/card3.png" alt="Card 3">
        </div>
        <div class="servises__card long--card" data-aos="fade-left">
          <p class="card__text">
            {{ t("servises.servises__card--text--4") }}
          </p>
          <img src="../assets/images/card4.png" alt="Card 4">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, inject } from 'vue';
import AOS from 'aos';

export default {
  setup() {
    const i18n = inject('i18n');
    const t = (key) => i18n.global.t(key);

    onMounted(() => {
      AOS.init({
        duration: 500, // Animatsiya davomiyligi
      });
    });

    return {
      t
    }
  }
}
</script>

<style>
/* CSS stil kiritish */
</style>
