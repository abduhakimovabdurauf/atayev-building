<template>
  <nav ref="navbar" class="navbar">
    <div class="navbar__row">
      <div class="navbar__logo animated-link">
        <img src="../assets/images/logo.png" alt="">
      </div>
      <div class="menu__logo">
        <img src="../assets/images/menu.png" alt="" @click="show">
        <img src="../assets/images/phone.png" alt="" @click="console.log('Saytdan qongiroq qilib bo`lmaydi')">
      </div>
      <div ref="menu" class="navbar__menu">
        <img class="navbar__close" src="../assets/images/close.png" alt="" @click="hide">
        <ul class="navbar__left">
          <li class="navbar__link animated-link" @click="scrollTo('information')">{{ t('navbar.navbarLink__1') }}</li>
          <li class="navbar__link animated-link" @click="scrollTo('about')">{{ t('navbar.navbarLink__2') }}</li>
          <li class="navbar__link animated-link" @click="scrollTo('korxona')">{{ t('navbar.navbarLink__3') }}</li>
        </ul>
        <ul class="navbar__right">
          <li class="navbar__link animated-link" @click="scrollTo('advantage')">{{ t('navbar.navbarLink__4') }}</li>
          <li class="navbar__link animated-link" @click="scrollTo('news')">{{ t('navbar.navbarLink__5') }}</li>
          <li class="navbar__link animated-link" @click="scrollTo('network')">{{ t('navbar.navbarLink__6') }}</li>
          <li class="navbar__link navbar__lang">
            {{ language }}
            <ul class="navbar__language--bar">
              <li class="navbar__link" @click="changeLanguage('uz')">UZ</li>
              <li class="navbar__link" @click="changeLanguage('ru')">RU</li>
              <li class="navbar__link" @click="changeLanguage('en')">EN</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, inject, defineComponent, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  setup() {
    const i18n = inject('i18n')
    const t = (key) => i18n.global.t(key)
    const language = ref("UZ")
    const menu = ref(null)
    const navbar = ref(null)

    const changeLanguage = (lang) => {
      i18n.global.locale = lang
      language.value = lang === "uz" ? "UZ" : lang === "ru" ? "RU" : "EN"
    }

    const show = () => {
      if (menu.value) {
        menu.value.style.left = "0px"
      }
    }

    const hide = () => {
      if (menu.value) {
        menu.value.style.left = "-280px"
      }
    }

    const handleScroll = () => {
      if (navbar.value) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > 50) {
          navbar.value.style.position = "fixed"
          navbar.value.style.backgroundColor = "#2c3442";
        } 
        else {
          navbar.value.style.position = "static"
          navbar.value.style.backgroundColor = "transparent";
        }
      }
    }

    const scrollTo = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    })

    return {
      language,
      t,
      changeLanguage,
      show,
      hide,
      menu,
      navbar,
      scrollTo
    }
  }
})
</script>
