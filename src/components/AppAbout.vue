<template>
  <div class="about">
    <div class="about__container">
        <h3 class="about__subtitle">
            {{ t('about.about__subtitle') }}
        </h3>
        <h1 class="about__title">
            {{ t('about.about__title') }}
        </h1>
        <p class="about__text">
            {{ t('about.about__text') }}    
        </p>
        <button class="about__btn">
            {{ t('about.about__btn') }}
        </button>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
    setup() {
        const i18n = inject('i18n');
        const t = (key) => i18n.global.t(key);
        return {
            t
        }
    }
}
</script>

<style>

</style>