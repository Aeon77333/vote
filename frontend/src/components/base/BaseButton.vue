<template>
  <button
    class="button"
    type="button"
    :class="{ 'button--cancel': isCancel }"
    :style="{ width, height, minWidth: width }"
    :disabled="disabled"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    width: {
      type: String,
      default: '120px',
    },
    height: {
      type: String,
      default: '36px',
    },
    isCancel: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, context) {
    /**
     * ボタンクリックをエミットする
     */
    const onClick = () => {
      context.emit('click');
    };

    return {
      onClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: $tc-main;
  max-width: 100%;
  border-radius: 3px;
  border: none;
  color: $tc-font-sub;
  font-size: $font-size-base;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  padding: 0;
  transition: all 0.2s;
  user-select: none;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover:not(:disabled) {
    background-color: $tc-main-hover;
  }

  &:active:not(.button--cancel) {
    background-color: $tc-main-active;
  }

  &--cancel {
    max-width: 100%;
    color: $tc-main;
    border: 1px solid $tc-main;
    background-color: $tc-base;

    &:hover:not(:disabled) {
      background-color: $tc-main-hover;
      color: $tc-font-sub;
    }

    &:active:not(:disabled) {
      background-color: $tc-main-active;
      color: $tc-font-sub;
    }
  }
}

// 横幅480px以下のスマートフォン
@media screen and (max-width: 480px) {
  .button {
    padding: 6px 15px;
  }
}
</style>
