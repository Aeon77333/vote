<template>
  <div class="layout-default">
    <TheConfirmDialog />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import TheConfirmDialog from '@/components/common/TheConfirmDialog.vue';

export default defineComponent({
  components: {
    TheConfirmDialog,
  },
});
</script>

<style lang="scss">
@import '@/assets/scss/_reset';
@import '@/assets/scss/_init';

.layout-default {
  width: 100vw;
  min-width: 1024px;
  height: 100vh;
}
</style>
