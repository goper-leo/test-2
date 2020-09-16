import Vue from 'vue'
import App from "@pages/master"

import "@core/Request"
import store from '@core/Store'
import "@js/plugins"
import "@js/components"
import router from '@core/Router'

window.app = new Vue({
    el: '#app',
    router,
    store,
    ...App
});