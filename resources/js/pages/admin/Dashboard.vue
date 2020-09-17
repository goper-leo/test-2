<template>
    <div class="p-6 bg-white w-full">
        <div class="flex mb-6">
            <div class="text-xl">Admin Dashboard Page</div>
            <div class="flex-1 text-right">
                <t-button @click="$store.dispatch('auth/logout')" variant="default">Logout</t-button>
            </div>
        </div>

        <div class="flex w-full flex-col">
            <div class="mb-4 text-right">
                <t-button @click="isShowCreateUserModal = true">Add New</t-button>
            </div>
            <t-table :headers="['Name', 'Email', 'Has Signup', 'Is Enable']" :data="users">
                <template v-slot:row="props">
                    <tr :class="[props.trClass]">
                        <td :class="props.tdClass">{{ props.row.name }}</td>
                        <td :class="props.tdClass">{{ props.row.email }}</td>
                        <td :class="[props.tdClass, { 'text-red-500': !props.row.is_signed_up}]">{{ props.row.is_signed_up ? 'Done' : 'Not yet' }}</td>
                        <td :class="[props.tdClass, { 'text-red-500': props.row.is_disable}]">{{ props.row.is_disable ? 'False' : 'True' }}</td>
                    </tr>
                </template>
            </t-table>
        </div>

        <userForm :isShow="isShowCreateUserModal" @close="closeForm" />
    </div>
</template>
<script>
import axios from "axios";
import userForm from "@components/Admin/User/Form";

export default {
    components: { userForm },

    data: () => ({
        users: [],
        isShowCreateUserModal: false,
    }),

    methods: {
        async fetchUsers() {
            const {
                data: { data },
            } = await axios.get(`/api/admin/users`);
            this.users = data;
        },

        closeForm() {
            this.isShowCreateUserModal = false;
            this.fetchUsers();
        },
    },

    mounted() {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const auth = JSON.parse(loggedInUser);
            axios.defaults.headers.common.Authorization = `Bearer ${auth.token}`;
            this.$store.dispatch("auth/fetchUserProfile");
        }

        this.fetchUsers();
    },
};
</script>