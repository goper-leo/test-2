<template>

    <div v-show="visible"
        :class="['fixed z-30 top-0 right-0 pr-12 border-t-4 px-4 py-3 shadow-md', typeClass]"
        role="alert">
        <div class="flex">
            <div class="py-1">
            </div>
            <div>
                <p class="font-bold uppercase">{{ type + '!'}}</p>
                <p class="text-sm" v-html="message"></p>
            </div>
        </div>
    </div>
</template>

<script>

    export default {

        data: () => ({
            visible: false,
            type: null,
            message: null,
            timeout: 0,
            title: '',
            icon: 'info-circle'
        }),

        computed: {
            typeClass() {
                let alertClass = ''

                if (this.type == 'error')
                    alertClass = 'bg-red-500 border-white text-white'
                else if (this.type == 'success')
                    alertClass = 'bg-green-600 border-white text-white'
                else
                    alertClass = 'bg-white border-blue-500 text-blue-800'
                return alertClass
            }
        },

        methods: {

            close() {
                this.visible = false
            },

            show(type = 'success', { message, timeout }) {
                if (this.visible) this.visible = false

                this.type = type
                this.timeout = timeout
                this.message = message
                this.visible = true

                // Get icon based on `type`
                if (type == 'error')
                    this.icon = 'exclamation-circle'
                else if (type == 'success')
                    this.icon = 'check-circle'
                else
                    this.icon = 'info-circle'

                const timer = setTimeout(() => {
                    this.visible = false;
                }, timeout)
            },
        },

        mounted() {
            this.$notify.$on('notify.success', args => {
                this.show('success', args)
            })

            this.$notify.$on('notify.error', args => {
                this.show('error', args)
            })

            this.$notify.$on('notify.info', args => {
                this.show('info', args)
            })
        }
    }

</script>

<style lang="scss" scoped>


</style>
