<template>
  <div class="idea-vote">
    <div class="idea-vote__attention">※ Vote is limited to 5 votes per person. ※</div>
    <!-- TODO: Check vote resultsのボタンは投票結果開示期間以外は非活性にする -->
    <!-- 活性/非活性の方法は投票結果開示期間の日時を指定 -->
    <!-- 投票結果開示期間内： 活性    投票結果開示期間外: 非活性 -->
    <BaseButton class="idea-vote__result" width="100%" @click="checkResult"
      >Check vote results</BaseButton
    >
    <div class="idea-vote__contents">
      <template v-for="(idea, index) of ideas">
        <div :key="index" class="idea-vote__content">
          <div class="idea-vote__idea">
            {{ idea.idea }}
          </div>
          <template v-if="isResult"
            ><div class="idea-vote__count">{{ idea.count }} Vote</div></template
          >
          <template v-else>
            <BaseButton
              class="idea-vote__vote"
              width="100%"
              height="100%"
              :disabled="idea.count === 1 || isDisabled"
              @click="checkVote(idea)"
            >
              <template v-if="idea.count === 1">
                <BaseIcon
                  :color="IconColor.White"
                  :icon="IconType.Heart"
                  :size="IconSize.Biggest"
                />
              </template>
              <template v-else>
                <BaseIcon
                  :color="IconColor.White"
                  :icon="IconType.ThumbsUp"
                  :size="IconSize.Biggest"
                />
              </template>
            </BaseButton>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from '@nuxtjs/composition-api';
import axios from 'axios';
import BaseButton from '@/components/base/BaseButton.vue';
import BaseIcon, { IconColor, IconSize, IconType } from '@/components/base/BaseIcon.vue';
import { ConfirmDialog, Idea } from '@/interfaces';
import { confirmDialog, deepCopy } from '@/utils';

export default defineComponent({
  components: {
    BaseButton,
    BaseIcon,
  },
  setup(props, context) {
    const $store = context.root.$store;
    const ideaList = computed<Idea[]>(() => $store.getters['idea/ideaList']);
    const ideas = ref<Idea[]>([]);
    const isDisabled = ref<boolean>(false);
    const isResult = ref<boolean>(false);

    watch(ideaList, (ideaList) => {
      ideas.value = deepCopy(ideaList);
    });

    /**
     * 投票確認ダイアログを表示する
     * @param newIdea 更新するアイデア情報
     */
    const checkVote = (newIdea: Idea) => {
      const dialog: ConfirmDialog = {
        messages: ['投票してもよろしいですか？'],
        submit: () => {
          vote(newIdea);
          confirmDialog.hide();
        },
      };
      confirmDialog.show(dialog);
    };

    /**
     * 投票する
     * @param newIdea 更新するアイデア情報
     */
    const vote = (newIdea: Idea) => {
      ideas.value = ideas.value.map((idea) => {
        if (idea.id === newIdea.id) {
          if ((idea.count as number) >= 1) {
            return idea;
          }
          (idea.count as number)++;
          axios.put('idea', { id: idea.id });
        }
        return idea;
      });
      const total = ideas.value.reduce((total, current) => total + (current.count as number), 0);
      const maxCount = 5;
      isDisabled.value = total >= maxCount;
    };

    /**
     * 投票結果を確認する
     */
    const checkResult = () => {
      $store.dispatch('idea/fetchVoteResult').then(() => (isResult.value = true));
    };

    return {
      ideas,
      isDisabled,
      isResult,
      checkVote,
      checkResult,
      IconColor,
      IconSize,
      IconType,
    };
  },
});
</script>

<style lang="scss" scoped>
.idea-vote {
  width: 1024px;
  margin: 20px auto;

  &__attention,
  &__count {
    display: flex;
    justify-content: center;
    font-size: $font-size-header;
  }

  &__attention,
  &__result {
    margin-bottom: 20px;
  }

  &__content {
    border-bottom: 2px dashed $tc-border-main;
    display: grid;
    grid-template-columns: 80% 1fr;
  }

  &__idea {
    min-height: 100px;
    white-space: pre-line;
    word-break: break-all;
    padding: 10px;
    transition: all 0.2s;
    line-height: 16px;
  }

  &__count {
    align-items: center;
  }

  &__vote {
    margin: auto 0;
  }
}
</style>
