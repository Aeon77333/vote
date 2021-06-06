<template>
  <ThePage class="top">
    <TheIdeaList />
  </ThePage>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import TheIdeaList from '@/components/pages/idea-list/TheIdeaList.vue';
import ThePage from '@/components/common/ThePage.vue';

export default defineComponent({
  head: {
    // TODO: 定数化する
    title: 'IDEA LIST',
  },
  components: {
    ThePage,
    TheIdeaList,
  },
  setup() {
    const isDialog = ref<boolean>(false);

    /**
     * 商品詳細ダイアログを表示する
     * @param itemId 商品ID
     */
    const openDialog = (itemId: string) => {
      console.log(itemId);
      // 本来であれば、引数の商品IDの商品詳細情報を取得してからisDialogをtrueにする
      isDialog.value = true;
    };

    /**
     * 商品詳細ダイアログを閉じる
     * @param itemId 商品ID
     */
    const closeDialog = () => (isDialog.value = false);

    return {
      isDialog,
      openDialog,
      closeDialog,
    };
  },
});
</script>

<style lang="scss" scoped>
.top {
}
</style>
