<template>
  <ThePage class="idea-vote">
    <TheIdeaVote @click="openDialog($event)" />
  </ThePage>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import TheIdeaVote from '@/components/pages/idea-vote/TheIdeaVote.vue';
import ThePage from '@/components/common/ThePage.vue';

export default defineComponent({
  head: {
    // TODO: 定数化する
    title: 'IDEA VOTE',
  },
  components: {
    ThePage,
    TheIdeaVote,
  },
});
</script>

<style lang="scss" scoped>
.idea-vote {
}
</style>
