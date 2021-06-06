import { deepCopy } from '@/utils';
import { ConfirmDialog } from '@/interfaces';

interface State {
  counter: number;
  dialog: ConfirmDialog;
}

const initCount = (): number => 0;
const initDialog = (): ConfirmDialog => ({
  messages: [],
  submit: () => {},
});

export const state = (): State => ({
  counter: initCount(),
  dialog: initDialog(),
});

export const getters = {
  counter: (state: State): number => state.counter,
  dialog: (state: State): ConfirmDialog => state.dialog,
};

export const mutations = {
  show: (state: State, dialog: ConfirmDialog) => {
    state.counter++;
    state.dialog = deepCopy(dialog);
  },
  hide: (state: State) => {
    if (state.counter > 0) {
      state.counter--;
      state.dialog = initDialog();
    }
  },
};

export const actions = {
  show: ({ commit }: { commit: Function }, dialog: ConfirmDialog) => {
    commit('show', dialog);
  },
  hide: ({ commit }: { commit: Function }) => {
    commit('hide');
  },
};
