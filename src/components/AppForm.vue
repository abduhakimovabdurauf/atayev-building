<template>
  <div class="form-wrapper">
    <div class="feedback-form" data-aos="fade-top">
      <h2>{{ t('form.form__title') }}</h2>
      <form @submit.prevent="submitForm">
        <input
          type="text"
          v-model="name"
          :placeholder="t('form.name__place')"
          required
        />
        <input
          type="tel"
          v-model="phone"
          :placeholder="t('form.phone__place')"
          required
        />
        <textarea v-model="message" :placeholder="t('form.text__place')"></textarea>
        <button type="submit">{{ t('form.submit') }}</button>
      </form>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, inject } from "vue";
import AOS from "aos";
import Swal from "sweetalert2";

export default {
  setup() {
    const name = ref("");
    const phone = ref("");
    const message = ref("");
    const i18n = inject('i18n');
    const t = (key) => i18n.global.t(key);

    const submitForm = () => {
      if (name.value && phone.value && message.value) {
        Swal.fire({
          title: "Muvaffaqiyatli bajarildi!",
          html: `
            <strong>Ism:</strong> ${name.value} <br>
            <strong>Telefon:</strong> ${phone.value} <br>
            <strong>Xabar:</strong> ${message.value}
          `,
          icon: "success",
          confirmButtonText: "OK",
        });
        name.value = "";
        phone.value = "";
        message.value = "";
      } else {
        Swal.fire({
          title: "Xatolik!",
          text: "Barcha maydonlarni to'ldiring.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    };

    onMounted(() => {
      AOS.init({
        duration: 1000,
      });
    });

    return {
      name,
      phone,
      message,
      submitForm,
      t,
    };
  },
};
</script>

<style scoped>
textarea {
  resize: none;
}

</style>
