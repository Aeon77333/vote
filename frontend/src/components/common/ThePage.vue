<template>
  <div class="page">
    <TheHeader />
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import TheHeader from '@/components/common/TheHeader.vue';

export default defineComponent({
  components: {
    TheHeader,
  },
});
</script>

<style lang="scss" scoped>
.page {
  overflow: hidden;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
