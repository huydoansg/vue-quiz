import Vue from 'vue';
import { SnackBarTimeOut } from '@constants';
import { AppDialog, AppSnackBar } from '@components';

import App from './App.vue';
import router from './router';
import './registerServiceWorker';

import { modalPlugin, snackBarPlugin } from './plugins';

Vue.config.productionTip = false;

Vue.use(modalPlugin, {
  name: 'AppDialog',
  component: AppDialog
});

Vue.use(snackBarPlugin, {
  name: 'AppSnackBar',
  component: AppSnackBar,
  timeout: SnackBarTimeOut
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
