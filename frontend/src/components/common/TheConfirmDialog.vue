<template>
  <transition name="confirm-dialog" appear>
    <div v-if="existsConfirmDialog()" class="confirm-dialog">
      <div class="confirm-dialog__window">
        <div class="confirm-dialog__content">
          <div v-for="(message, index) of messages" :key="index">{{ message }}</div>
        </div>
        <div class="confirm-dialog__button">
          <BaseButton class="confirm-dialog__not" :is-cancel="true" @click="cancel"
            >いいえ</BaseButton
          >
          <BaseButton class="confirm-dialog__yes" @click="submit">はい</BaseButton>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from '@nuxtjs/composition-api';
import BaseButton from '@/components/base/BaseButton.vue';
import { existsConfirmDialog } from '@/utils';

export default defineComponent({
  components: {
    BaseButton,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    isShow: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
  setup(props, context) {
    const $store = context.root.$store;
    const messages = ref<string[]>([]);
    const submitLabel = ref<string>('');
    const submitFunc = ref<Function>(() => {});
    const dialog = computed<any>(() => $store.getters['confirm-dialog/dialog']);

    /**
     * 確認ダイアログの各種の値を設定する
     */
    watch(dialog, (dialog) => {
      messages.value = dialog.messages;
      submitLabel.value = dialog.submitLabel || 'OK';
      submitFunc.value = dialog.submit;
    });

    /**
     * submit時の処理を実行する
     */
    const submit = () => submitFunc.value();

    /**
     * 確認ダイアログを閉じる
     */
    const cancel = () => $store.dispatch('confirm-dialog/hide');

    return {
      messages,
      submitLabel,
      submit,
      cancel,
      existsConfirmDialog,
    };
  },
});
</script>

<style lang="scss" scoped>
.confirm-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: $z-index-confirm-dialog;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);

  &__window,
  &__content,
  &__header,
  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__content,
  &__button {
    min-width: 1024px;
    background-color: $tc-base;
    padding: 20px;
  }

  &__window {
    flex-direction: column;
    overflow: hidden;
    padding: 5px;
  }

  &__content {
    height: 100%;
    border-radius: 2px;
  }

  &__button {
    border-radius: 0 0 2px 2px;
  }

  &__not {
    margin-right: 20px;
  }
}

.confirm-dialog-leave-active,
.confirm-dialog-enter-active {
  transition: all 0.2s;
}

/* 表示アニメーション */
.confirm-dialog-enter {
  opacity: 0;
}
.confirm-dialog-enter-to {
  opacity: 1;
}

/* 非表示アニメーション */
.confirm-dialog-leave {
  opacity: 1;
}
.confirm-dialog-leave-to {
  opacity: 0;
}
</style>
