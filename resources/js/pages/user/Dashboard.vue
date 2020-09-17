<template>
    <div class="p-6 bg-white w-full">
        <div class="flex mb-6">
            <div class="text-xl">User Dashboard</div>
            <div class="flex-1 text-right">
                <t-button @click="$store.dispatch('auth/logout')" variant="default">Logout</t-button>
            </div>
        </div>

        <div class="flex w-full flex-col text-base">
            <div class="">Name: <span v-text="user.name"></span></div>
            <div class="">Email: <span v-text="user.email"></span></div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {

    computed: {
        user() {
            return this.$store.getters['auth/user']
        }
    },

    mounted() {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const auth = JSON.parse(loggedInUser);
            axios.defaults.headers.common.Authorization = `Bearer ${auth.token}`;
            this.$store.dispatch("auth/fetchUserProfile");
        }
    }

}
</script>