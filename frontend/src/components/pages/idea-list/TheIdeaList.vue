<template>
  <div class="idea-list">
    <div class="idea-list__post">
      <textarea-autosize
        v-model="idea"
        class="idea-list__textarea"
        placeholder="Type something here..."
      />
      <BaseButton class="idea-list__post-button" width="100%" :disabled="!idea" @click="postIdea"
        >POST<BaseIcon :icon="IconType.PaperPlane"
      /></BaseButton>
    </div>
    <div class="idea-list__contents">
      <template v-for="(idea, index) of ideaList">
        <div :key="index" class="idea-list__content">
          {{ idea.idea }}
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from '@nuxtjs/composition-api';
import axios from 'axios';
import BaseButton from '@/components/base/BaseButton.vue';
import BaseIcon, { IconColor, IconSize, IconType } from '@/components/base/BaseIcon.vue';
import TheHeaderToggleButton from '@/components/common/TheHeaderToggleButton.vue';
import { Idea } from '@/interfaces';

export default defineComponent({
  components: {
    BaseButton,
    BaseIcon,
    TheHeaderToggleButton,
  },
  setup(props, context) {
    const $store = context.root.$store;
    const idea = ref<string>('');
    const ideaList = computed<Idea[]>(() => $store.getters['idea/ideaList']);

    const postIdea = () => {
      const ideaData = { idea: idea.value };
      axios.post('idea', ideaData).then(() => {
        idea.value = '';
        $store.dispatch('idea/fetch');
      });
    };

    return {
      idea,
      ideaList,
      postIdea,
      IconColor,
      IconSize,
      IconType,
    };
  },
});
</script>

<style lang="scss" scoped>
.idea-list {
  width: 1024px;
  margin: 20px auto;

  &__post {
    margin: 20px 0;
  }

  &__textarea {
    width: 100%;
    min-height: 100px;
    padding: 5px 10px;
    border: 1px solid $tc-border-base;
    border-radius: 3px;
  }

  &__post-button {
    margin-top: 10px;
  }

  &__content {
    padding: 0 10px 10px 10px;
    min-height: 100px;
    border-bottom: 2px dashed $tc-border-main;
    white-space: pre-line;
    word-break: break-all;
    margin-bottom: 30px;
  }
}
</style>
