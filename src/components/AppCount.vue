<template>
  <div class="count">
    <h1 class="count__title">
        {{ t("count.count__title") }}
    </h1>
    <div class="count__row">
        <div class="count__block">
            <p class="count__countup">
                <CountUp
                  startVal="0"
                  endVal="128"
                  duration="2.5"
                  :options="options"
                />&nbsp;
                <span class="countup__high--icon">+</span>
            </p>
            <p class="count__comment">
                {{ t("count.count__comment--1") }}
            </p>
        </div>
        <div class="count__block">
            <p class="count__countup">
                <CountUp
                  startVal="0"
                  endVal="43"
                  duration="2.5"
                  :options="options"
                />&nbsp;
                <span class="countup__high--icon">+</span>
            </p>
            <p class="count__comment">
                {{ t("count.count__comment--2") }}
            </p>
        </div>
        <div class="count__block">
            <p class="count__countup">
                <CountUp
                  startVal="0"
                  endVal="250"
                  duration="2.5"
                  :options="options"
                />&nbsp;
                <span class="countup__high--icon">+</span>
            </p>
            <p class="count__comment">
                {{ t("count.count__comment--3") }}
            </p>
        </div>
        <div class="count__block">
            <p class="count__countup">
                <CountUp
                  startVal="0"
                  endVal="14"
                  duration="2.5"
                  :options="options"
                />
                &nbsp;
                <span class="countup__high--icon">+</span>
            </p>
            <p class="count__comment">
                {{ t("count.count__comment--4") }}
            </p>
        </div>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue';
import CountUp from 'vue-countup-v3';

export default {
  components: {
    CountUp
  },
  setup() {
    const i18n = inject('i18n');
    const t = (key) => i18n.global.t(key);

    const options = {
      separator: ',',
      decimal: '.',
      decimalPlaces: 0
    };

    return {
      t,
      options
    };
  }
}
</script>

<style>

</style>
