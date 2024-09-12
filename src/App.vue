<template>
    <section id="top__section" class="top__section">
        <AppNavbar></AppNavbar>
        <AppIntruduction></AppIntruduction>
    </section>
    <section id="middle__section" class="middle__section">
        <AppServises id="advantage"></AppServises>
        <AppCount id="information"></AppCount>
        <AppGallery></AppGallery>
        <AppProject id="korxona"></AppProject>
        <AppNews id="news"></AppNews>
        <AppPartners></AppPartners>
        <AppAbout id="about"></AppAbout>
        <AppForm id="network"></AppForm>
    </section>
    <section id="bottom__section" class="bottom__section">
       <AppFooter></AppFooter> 
    </section>
</template>

<script setup>
import AppNavbar from "./components/AppNavbar.vue";
import AppIntruduction from "./components/AppIntruduction.vue";
import AppServises from "./components/AppServises.vue";
import AppCount from "./components/AppCount.vue";
import AppGallery from "./components/AppGallery.vue";
import AppProject from "./components/AppProject.vue";
import AppNews from "./components/AppNews.vue";
import AppPartners from "./components/AppPartners.vue";
import AppAbout from "./components/AppAbout.vue";
import AppForm from "./components/AppForm.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<style>
/* Stil qo‘shish mumkin */
</style>
