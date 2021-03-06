import Vue from 'vue';
import Vuex from 'vuex';
import VueCompositionApi from '@vue/composition-api';
import VueI18n from 'vue-i18n';
import '@/plugins/vee-validate/vee-validate.ts';
import { i18n } from '@/test/i18n';
import { Modal } from 'ant-design-vue';

Vue.use(Vuex);
Vue.use(VueCompositionApi);
Vue.use(VueI18n);
Vue.use(Modal);

const $style: any = require('identity-obj-proxy');

Vue.config.productionTip = false;

Vue.mixin({
  created() {
    this.localePath = (path: string) => {
      return path;
    };
    this.$style = $style;
  },
});

Vue.prototype.$nuxt = {
  context: {
    app: {
      i18n,
    },
  },
};

Element.prototype.scrollTo = (): any => {
  return null;
};
