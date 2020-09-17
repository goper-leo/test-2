<template>
    <t-modal :value="isShow" header="Add New User" :hideCloseButton="true">
        <div class="flex flex-col">
            <div class="flex flex-col">
                <t-input v-model="form.email" type="email" 
                    name="email" 
                    placeholder="Enter email address" 
                    variant="default" />
            </div>
        </div>
        <template v-slot:footer>
            <div class="flex justify-between">
                <t-button type="button" @click="$emit('close')">Cancel</t-button>
                <t-button type="button" @click="save">Save</t-button>
            </div>
        </template>
    </t-modal>
</template>
<script>
import axios from 'axios'

export default {
    
    props: {

        isShow: {
            required: true,
            type: Boolean,
            default: false
        }
    },

    data: () => ({
        form: {
            email: ''
        },
        isBusy: false,
    }),

    methods: {

        async save() {
            try {

                const { data: { data } } = await axios.post(`/api/admin/user`, this.form)
                this.$notify.success('New user has been added and send an email for sign up.')
                this.$emit('close')
            } catch (error) {

            }
        },
    }

}
</script>