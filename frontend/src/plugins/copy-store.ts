import Vue from 'vue';

export default ({ store }: any) => {
  Vue.prototype.$copyStore = store;
};
