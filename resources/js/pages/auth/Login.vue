<template>
    <div class="p-8 bg-white w-full flex flex-wrap">
        <div class="w-full flex flex-col">
            <div class="flex self-center flex-col bg-white justify-center my-auto">
                <p class="text-left text-3xl text-black font-light mb-6">Login</p>
                <div class="flex flex-col">
                    <div class="flex flex-col">
                        <t-input v-model="form.email" type="email" name="email" placeholder="Email" variant="default" />
                        <t-input v-model="form.password" type="password" name="password" variant="default" placeholder="Password" />
                        <div class="text-right">
                            <t-button @click="login">Login</t-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
</template>
<script>
import axios from 'axios'

export default {
    
    data: () => ({
        form: {
            email: '',
            password: '',
        }        
    }),

    methods: {

        async login() {
            try {
                let result = await this.$store.dispatch('auth/login', this.form)
                const isLogged = this.$store.getters['auth/isLogged']
                const isAdmin = this.$store.getters['auth/isAdmin']
                
                if (isLogged) {
                    if (isAdmin)
                        this.$router.push({ name: 'admin.dashboard' })
                    else
                        this.$router.push({ name: 'user' })
                }
                
            } catch ({ errors }) {
                // if (err.status == 422)
                    // this.errors = err.errors
            }
        }
    }
}
</script>