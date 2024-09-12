<template>
  <div class="partners">
    <h1 class="partners__title">
        {{ t('partners.partners__title') }}
    </h1>
    <div class="partners__image--container">
        <img src="../assets/images/partner1.png" alt="">
        <img src="../assets/images/partner2.png" alt="">
        <img src="../assets/images/partner3.png" alt="">
        <img src="../assets/images/partner4.png" alt="">
        <img src="../assets/images/partner5.png" alt="">
        <img src="../assets/images/partner6.png" alt="">
        <img src="../assets/images/partner7.png" alt="">
        <img src="../assets/images/partner8.png" alt="">
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