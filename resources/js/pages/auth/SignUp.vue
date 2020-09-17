<template>
    <div class="p-8 bg-white w-full flex flex-wrap">
        <div class="w-full flex flex-col">
            <div class="flex self-center flex-col bg-white justify-center my-auto">
                <p class="text-left text-3xl text-black font-light mb-6">Sign up</p>
                <div class="flex flex-col">
                    <div class="flex flex-col">
                        <t-input v-model="form.name" type="text" 
                            name="email" 
                            placeholder="Name" variant="default" />
                        <t-input v-model="form.password" type="password" name="password" variant="default" placeholder="Password" />
                        <t-input v-model="form.password_confirmation" type="password" name="password_confirmation" variant="default" placeholder="Password Confirmation" />
                        <div class="text-right">
                            <t-button @click="signUp">Sign up</t-button>
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
            password: '',
            password_confirmation: '',
            name: '',
        }
    }),

    methods: {

        async signUp() {
            try {
                this.form.code = this.$route.query.code
                const { data: { data } } = await axios.post(`/api/auth/signup`, this.form)
                this.$router.push({ name: 'login'})
                this.$notify.success('Sign up success, please wait for 5 minutes to login.')
            } catch (error) {

            }

        }
    }
}
</script>