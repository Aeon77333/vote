import axios from 'axios';
import { Idea } from '@/interfaces';

interface State {
  ideaList: Idea[];
}

const initIdeaList = (): Idea[] => [];

export const state = (): State => ({
  ideaList: initIdeaList(),
});

export const getters = {
  ideaList: (state: State): Idea[] => state.ideaList,
};

export const mutations = {
  fetch: (state: State, ideaList: Idea[]) => {
    state.ideaList = ideaList;
  },
  initialize: (state: State) => {
    state.ideaList = initIdeaList();
  },
};

export const actions = {
  fetch: ({ commit }: { commit: Function }) => {
    axios.get('idea').then((res) => {
      const ideaList = res.data.map((idea: Idea) => ({ ...idea, count: 0 }));
      commit('fetch', ideaList);
    });
  },
  fetchVoteResult: ({ commit }: { commit: Function }) => {
    axios.get('vote-result').then((res) => {
      commit('fetch', res.data);
    });
  },
  initialize({ commit }: { commit: Function }) {
    commit('initialize');
  },
};
