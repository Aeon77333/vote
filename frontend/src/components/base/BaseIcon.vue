<template>
  <fa-icon
    class="icon"
    :style="{ width: size, height: size, color }"
    :icon="[assignType(iconName), iconName]"
    @click="onClick"
  />
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from '@nuxtjs/composition-api';

export enum IconType {
  Bars = 'bars',
  CartPlus = 'cart-plus',
  ChevronLeft = 'chevron-left',
  ChevronRight = 'chevron-right',
  FacebookF = 'facebook-f',
  Google = 'google',
  Heart = 'heart',
  Instagram = 'instagram',
  Line = 'line',
  Minus = 'minus',
  PaperPlane = 'paper-plane',
  Plus = 'plus',
  Search = 'search',
  ShoppingCart = 'shopping-cart',
  ThumbsUp = 'thumbs-up',
  Times = 'times',
  Twitter = 'twitter',
}

export enum IconSize {
  Default = '16px',
  Mini = '12px',
  Big = '24px',
  Bigger = '28px',
  Biggest = '46px',
}
export enum IconColor {
  Default = '#fff',
  White = '#fff',
  Black = '#555',
  Grey = '#ccc',
  Red = '#ff0000',
  Line = '#08c857',
  Main = '#af0000',
}

/**
 * fontawesomeアイコンのタイプを指定する
 * fas, fabのいずれかを返却する
 * @param iconName アイコン名称
 * @ratusn fontawesomeアイコンのタイプ
 */
const assignType = (iconName: IconType): string => {
  switch (iconName) {
    case IconType.FacebookF:
    case IconType.Google:
    case IconType.Instagram:
    case IconType.Line:
    case IconType.Twitter:
      return 'fab';
    default:
      return 'fas';
  }
};

export default defineComponent({
  props: {
    icon: {
      type: String as PropType<IconType>,
      default: '',
    },
    size: {
      type: String,
      default: IconSize.Default,
    },
    color: {
      type: String as PropType<IconColor>,
      default: IconColor.Default,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const iconName = computed<IconType>(() => props.icon);

    const onClick = () => context.emit('click');

    return {
      iconName,
      assignType,
      onClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.icon {
  cursor: inherit;
  color: $tc-font-base;
}
</style>
