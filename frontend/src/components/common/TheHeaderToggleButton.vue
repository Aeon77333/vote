<template>
  <div class="header-toggle">
    <BaseButton
      class="header-toggle__screen-name header-toggle__screen-name--idea-list"
      width="200px"
      height="50px"
      @click="transition('/')"
      >Idea List</BaseButton
    >
    <!-- TODO: Idea Voteのボタンは投票期間以外は非活性にする -->
    <!-- 活性/非活性の方法は投票期間の日時を指定 -->
    <!-- 投票期間内： 活性    投票期間外: 非活性 -->
    <BaseButton
      class="header-toggle__screen-name header-toggle__screen-name--idea-vote"
      width="200px"
      height="50px"
      @click="transition('/idea-vote')"
      >Idea Vote</BaseButton
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import BaseButton from '@/components/base/BaseButton.vue';

export default defineComponent({
  components: {
    BaseButton,
  },
  setup(props, context) {
    const $store = context.root.$store;
    const $router = context.root.$router;

    /**
     * 画面を遷移する
     * @param destination 遷移先のパス
     */
    const transition = (destination: string) => {
      $store.dispatch('idea/fetch');
      $router.push(destination);
    };

    return {
      transition,
    };
  },
});
</script>

<style lang="scss" scoped>
.header-toggle {
  width: 100%;
  display: flex;
  justify-content: center;

  &__screen-name {
    font-size: $font-size-header;

    &--idea-vote {
      margin-left: 100px;
    }
  }
}
</style>
