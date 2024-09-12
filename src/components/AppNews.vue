<template>
    <div class="news">
        <div class="news__row">
            <h1 class="news__title">
                {{ t('news.news__title') }}
            </h1>

            <div class="card__container">
                <div class="news__card" data-aos="fade-right">
                    <div class="news--card__left">
                        <img src="../assets/images/newsCard1.png">
                    </div>
                    <div class="news--card__right">
                        <button class="news--card__btn"></button>
                        <h2 class="news--card__title">
                            {{ t('news.news__card--1.card__title') }}
                        </h2>
                        <p class="news--card__text">
                            {{ t('news.news__card--1.card__text') }}
                        </p>
                    </div>
                </div>
                <div class="news__card" data-aos="fade-left">
                    <div class="news--card__left">
                        <img src="../assets/images/newsCard2.png">
                    </div>
                    <div class="news--card__right">
                        <button class="news--card__btn"></button>
                        <h2 class="news--card__title">
                            {{ t('news.news__card--2.card__title') }}
                        </h2>
                        <p class="news--card__text">
                            {{ t('news.news__card--2.card__text') }}
                        </p>
                    </div>
                </div>
                <div class="news__card" data-aos="fade-bottom">
                    <div class="news--card__left">
                        <img src="../assets/images/newsCard3.png">
                    </div>
                    <div class="news--card__right">
                        <button class="news--card__btn"></button>
                        <h2 class="news--card__title">
                            {{ t('news.news__card--3.card__title') }}
                        </h2>
                        <p class="news--card__text">
                            {{ t('news.news__card--3.card__text') }}
                        </p>
                    </div>
                </div>
                <div class="news__card" data-aos="fade-bottom">
                    <div class="news--card__left">
                        <img src="../assets/images/newsCard4.png">
                    </div>
                    <div class="news--card__right">
                        <button class="news--card__btn"></button>
                        <h2 class="news--card__title">
                            {{ t('news.news__card--4.card__title') }}
                        </h2>
                        <p class="news--card__text">
                            {{ t('news.news__card--4.card__text') }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { inject, onMounted } from 'vue';
import AOS from 'aos';

export default {
    setup() {
        const i18n = inject('i18n');
        const t = (key) => i18n.global.t(key);

        onMounted(() => {
            AOS.init({
                duration: 800,
            });
        });
        return {
            t
        }
    }
}
</script>

<style>

</style>