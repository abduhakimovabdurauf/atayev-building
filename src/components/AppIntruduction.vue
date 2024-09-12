<template>
  <div class="intruduction">
    <div class="intruduction__row">
        <h1 class="intruduction__title">
            {{ t("intruduction.Intruduction__title") }}
        </h1>
        <p class="intruduction__subtitle">
            {{ t("intruduction.Intruduction__subtitle") }}
        </p>
        <div class="intruduction__buttons">
            <button class="intruduction__btn btn" @click="scrollTo('korxona')">
                {{ t("intruduction.Intruduction__btn--1") }}
            </button>
            <button class="intruduction__btn btn" @click="scrollTo('network')">
                {{ t("intruduction.Intruduction__btn--2") }}
            </button>
        </div> 
    </div>
    
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    const i18n = inject('i18n');
    const t = (key) => i18n.global.t(key);


    const scrollTo = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }
    }
    return {
      t,
      scrollTo
    }
  }
}
</script>

<style>

</style>