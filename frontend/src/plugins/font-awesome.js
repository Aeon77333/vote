import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
  faBars,
  faCartPlus,
  faChevronLeft,
  faChevronRight,
  faHeart,
  faMinus,
  faPaperPlane,
  faPlus,
  faSearch,
  faShoppingCart,
  faThumbsUp,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import {
  faFacebookF,
  faGoogle,
  faInstagram,
  faLine,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

// solidタイプのアイコン追加
library.add(
  faBars,
  faCartPlus,
  faChevronLeft,
  faChevronRight,
  faHeart,
  faMinus,
  faPaperPlane,
  faPlus,
  faSearch,
  faShoppingCart,
  faThumbsUp,
  faTimes,
);

// brandsタイプのアイコン追加
library.add(faFacebookF, faGoogle, faInstagram, faLine, faTwitter);

Vue.component('fa-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
