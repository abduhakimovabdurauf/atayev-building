<template>
  <div class="form-wrapper">
    <div class="feedback-form" data-aos="fade-top">
      <h2>{{t('form.form__title')}}</h2>
      <form @submit.prevent="submitForm">
        <input type="text" v-model="name" :placeholder="t('form.name__place')" required />
        <input type="tel" v-model="phone" :placeholder="t('form.phone__place')" required />
        <textarea v-model="message" :placeholder="t('form.text__place')"></textarea>
        <button type="submit">{{t('form.submit')}}</button>
      </form>
    </div>
  </div>
</template>

<script>
import { onMounted,ref,  inject } from 'vue';
import AOS from 'aos';

export default {
  setup() {
    const name = ref("");
    const phone = ref("");
    const message = ref("");
    const i18n = inject('i18n');
    const t = (key) => i18n.global.t(key);

    const submitForm = () => {
      if (name.value && phone.value && message.value) {
        alert(`Ism: ${name.value}\nTelefon: ${phone.value}\nXabar: ${message.value}`);
        // formani reset qilish
        name.value = "";
        phone.value = "";
        message.value = "";
      } else {
        alert("Barcha maydonlarni to'ldiring.");
      }
    };


    onMounted(() => {
      AOS.init({
        duration: 1000, // Animatsiya davomiyligi
      });
    });
    return {
      name,
      phone,
      message,
      submitForm,
      t
    };
  },
};
</script>

<style scoped>

</style>
