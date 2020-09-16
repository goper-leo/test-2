import Notify from './notify'

const Plugin = {
    install(Vue, options) {
        if (this.installed) return

        Vue.component('Notify', Notify)

        const DEFAULT_TIMEOUT = 5000

        Vue.prototype.$notify = new Vue({
            methods: {
                success(message, timeout = DEFAULT_TIMEOUT) {
                    this.$emit('notify.success', { message, timeout })
                },

                error(message, timeout = DEFAULT_TIMEOUT) {
                    this.$emit('notify.error', { message, timeout })
                },

                info(message, timeout = DEFAULT_TIMEOUT) {
                    this.$emit('notify.info', { message, timeout })
                },
            }
        })
    }
}

export default Plugin
