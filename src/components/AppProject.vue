<template>
    <div class="projects">
        <h1 class="projects__title">
            {{ t('projects.project__title') }}
        </h1>
        <div class="projects__container">
            <div class="project__card">
                <div class="card__content">
                    <p class="project__title">
                        {{ t('projects.project__card--1.card__title') }}
                    </p>
                    <p class="project__text">
                        {{ t('projects.project__card--1.card__text') }}
                    </p>
                </div>
            </div>
            <div class="project__card">
                <div class="card__content">
                    <p class="project__title">
                        {{ t('projects.project__card--2.card__title') }}
                    </p>
                    <p class="project__text">
                        {{ t('projects.project__card--2.card__text') }}
                    </p>
                </div>
            </div>
            <div class="project__card">
                <div class="card__content">
                    <p class="project__title">
                        {{ t('projects.project__card--3.card__title') }}
                    </p>
                    <p class="project__text">
                        {{ t('projects.project__card--3.card__text') }}
                    </p>
                </div>
            </div>
            <div class="project__card">
                <div class="card__content">
                    <p class="project__title">
                        {{ t('projects.project__card--4.card__title') }}
                    </p>
                    <p class="project__text">
                        {{ t('projects.project__card--4.card__text') }}
                    </p>
                </div>
            </div>
            <div class="project__card">
                <div class="card__content">
                    <p class="project__title">
                        {{ t('projects.project__card--5.card__title') }}
                    </p>
                    <p class="project__text">
                        {{ t('projects.project__card--5.card__text') }}
                    </p>
                </div>
            </div>
            <div class="project__card">
                <div class="card__content">
                    <p class="project__title">
                        {{ t('projects.project__card--6.card__title') }}
                    </p>
                    <p class="project__text">
                        {{ t('projects.project__card--6.card__text') }}
                    </p>
                </div>
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

        return {
            t
        }
    }
}
</script>

<style>

</style>