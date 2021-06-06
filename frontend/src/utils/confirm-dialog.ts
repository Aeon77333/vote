import Vue from 'vue';
import { ConfirmDialog } from '@/interfaces';

/**
 * 確認ダイアログを表示する
 * @param dialog 確認ダイアログの各種の値
 */
function showConfirmDialog(dialog: ConfirmDialog) {
  Vue.prototype.$copyStore.dispatch('confirm-dialog/show', dialog);
}

/**
 * 確認ダイアログを非表示にする
 */
function hideConfirmDialog() {
  Vue.prototype.$copyStore.dispatch('confirm-dialog/hide');
}

/**
 * 確認ダイアログが表示されているかどうかを判別する
 * @returns true: 確認ダイアログが表示されている, false: 確認ダイアログが表示されていない
 */
export function existsConfirmDialog(): boolean {
  return Vue.prototype.$copyStore.state['confirm-dialog'].counter > 0;
}

export const confirmDialog = {
  show: showConfirmDialog,
  hide: hideConfirmDialog,
};
