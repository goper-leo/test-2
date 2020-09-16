<template>
    <!-- comment form -->
    <div class="flex mx-auto items-center justify-center shadow-lg mt-2 mx-8 mb-4 max-w-lg">
        <div class="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
            <div class="flex flex-wrap -mx-3 mb-6">
                <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new {{ isReply ? 'reply' : 'comment' }}</h2>
                <div class="w-full md:w-full px-3 mb-2 mt-2">
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Name"
                        type="text"
                        v-model="form.name"
                    />
                </div>
                <div class="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea
                        class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                        name="body"
                        placeholder="Type Your Comment"
                        v-model="form.message"
                    ></textarea>
                </div>
                <div class="w-full md:w-full flex items-end text-right md:w-full px-3">
                    <div class="self-start text-right w-full">
                        <t-button @click="$emit('close')" >
                            Cancel
                        </t-button>
                        <t-button @click="save" 
                            :disabled="isBusy">
                            Post Comment
                        </t-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {

    props: {
        parent: {
            required: false,
        }
    },

    data: () => ({
        form: {
            name: '',
            message: '',
            parent_id: null
        },

        errors: [],
        isBusy: false,
    }),

    computed: {
        isReply() {
            return this.parent
        }
    },

    methods: {

        async save() {
            try {
                this.isBusy = true
                if (this.isReply)
                    this.form.parent_id = this.parent.id 
                
                const { data } = await axios.post(`/api/comment/store`, this.form)
                this.isBusy = false
                this.$notify.success('Comment posted')

                this.form.message = ''
                
            } catch ({errors}) {
                this.errors = errors
                this.isBusy = false
            }
        },

    }
}
</script>