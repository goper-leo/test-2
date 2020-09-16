import Vue from 'vue'
import App from "@pages/master"

import "@core/Request"
import "@core/Broadcaster"
import "@js/plugins"
import "@js/components"

window.app = new Vue({
    el: '#app',
    ...App
});
