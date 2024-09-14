<template>
  <div class="form-wrapper">
    <div class="feedback-form" data-aos="fade-top">
      <h2>{{ t('form.form__title') }}</h2>
      <form @submit.prevent="submitForm">
        <input
          type="text"
          v-model="name"
          @input="validateName"
          :placeholder="t('form.name__place')"
          required
        />
        <span v-if="nameError" class="error">{{ nameError }}</span>

        <input
          type="tel"
          v-model="phone"
          @input="validatePhone"
          :placeholder="t('form.phone__place')"
          required
        />
        <span v-if="phoneError" class="error">{{ phoneError }}</span>

        <textarea
          v-model="message"
          @input="validateMessage"
          :placeholder="t('form.text__place')"
        ></textarea>
        <span v-if="messageError" class="error">{{ messageError }}</span>

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
    const nameError = ref(null);
    const phoneError = ref(null);
    const messageError = ref(null);
    const i18n = inject('i18n');
    const t = (key) => i18n.global.t(key);

    // Real-time validation functions
    const validateName = () => {
      if (name.value.length < 3) {
        nameError.value = "Ism kamida 3 belgidan iborat bo'lishi kerak.";
      } else {
        nameError.value = null;
      }
    };

    const validatePhone = () => {
      const phoneRegex = /^[0-9]{9,12}$/;
      if (!phoneRegex.test(phone.value)) {
        phoneError.value = "Telefon raqami 9-12 ta raqamdan iborat bolishi kerak kerak.";
      } else {
        phoneError.value = null;
      }
    };

    const validateMessage = () => {
      if (message.value.length < 10) {
        messageError.value = "Xabar kamida 10 belgidan iborat bo'lishi kerak.";
      } else {
        messageError.value = null;
      }
    };

    const submitForm = () => {
      validateName();
      validatePhone();
      validateMessage();

      if (!nameError.value && !phoneError.value && !messageError.value) {
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
          text: "Barcha maydonlarni to'g'ri to'ldiring.",
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
      nameError,
      phoneError,
      messageError,
      t,
      validateName,
      validatePhone,
      validateMessage,
    };
  },
};
</script>

<style scoped>
textarea {
  resize: none;
}
.error {
  color: red;
  font-size: 17px;
  margin-bottom: 10px;
}
</style>
