<template>
  <div class="gallery">
    <h1 class="gallery__title">
        {{ t('gallery.gallery__title') }}
    </h1>
    <div class="gallery__container">
        <img src="../assets/images/house1.png" alt="">
        <img src="../assets/images/house2.png" alt="">
        <img src="../assets/images/house3.png" alt="">
        <img src="../assets/images/house4.png" alt="">
        <img src="../assets/images/house5.png" alt="">
        <img src="../assets/images/house6.png" alt="">
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