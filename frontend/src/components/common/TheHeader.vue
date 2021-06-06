<template>
  <header class="header">
    <div class="header__contents">
      <img class="header__logo" :src="logo" @click="goToTop" />
      <TheHeaderToggleButton />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, useAsync } from '@nuxtjs/composition-api';
import TheHeaderToggleButton from '@/components/common/TheHeaderToggleButton.vue';

export default defineComponent({
  components: {
    TheHeaderToggleButton,
  },
  setup(props, context) {
    const $store = context.root.$store;
    const logo = require('@/assets/img/logo/tecrazy.png');

    /**
     * アクセス時にIdeaを取得する
     */
    useAsync(() => {
      $store.dispatch('idea/fetch');
    });

    const goToTop = () => context.root.$router.push('/');

    return {
      logo,
      goToTop,
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &__contents {
    display: flex;
    align-items: center;
    width: 1024px;
    height: 100px;
    position: relative;
  }

  &__logo {
    width: 200;
    height: 57.4px;
    margin-left: 20px;
    cursor: pointer;
  }
}
</style>
