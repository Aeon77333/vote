<template>
  <transition name="modal-dialog" appear>
    <div class="modal-dialog">
      <div class="modal-dialog__window">
        <div class="modal-dialog__header">{{ title }}</div>
        <div class="modal-dialog__content">
          <slot></slot>
        </div>
        <div class="modal-dialog__button">
          <BaseButton width="100%" :is-cancel="true" @click="close">とじる</BaseButton>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import BaseButton from '@/components/base/BaseButton.vue';

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
    /**
     * ダイアログのcloseをエミットする
     */
    const close = () => context.emit('close');

    return { close };
  },
});
</script>

<style lang="scss" scoped>
.modal-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: $z-index-modal-dialog;
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
  }

  &__window {
    flex-direction: column;
    overflow: hidden;
    padding: 5px;
  }

  &__header {
    position: relative;
    bottom: 5px;
    color: $tc-font-sub;
    width: 190px;
    height: 40px;
    border-radius: 0 0 10px 10px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  &__content {
    height: 100%;
    border-radius: 2px;
  }

  &__button {
    padding: 10px;
    border-radius: 0 0 2px 2px;
  }
}

.modal-dialog-leave-active,
.modal-dialog-enter-active {
  transition: all 0.4s;
}

/* 表示アニメーション */
.modal-dialog-enter {
  opacity: 0;
}
.modal-dialog-enter-to {
  opacity: 1;
}

/* 非表示アニメーション */
.modal-dialog-leave {
  opacity: 1;
}
.modal-dialog-leave-to {
  opacity: 0;
}
</style>
