import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'

import { domain, clientId, audience } from '../auth-config.json';
import { Auth0Plugin } from '../src/auth/auth0-plugin';

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl ? appState.targetUrl : window.location.pathname
    );
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
