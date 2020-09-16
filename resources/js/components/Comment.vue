<template>
    <div class="flex items-start mb-2 bg-gray-100 p-2">
        <img src="data:image/jpeg;base64,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" 
            class="w-12 h-12 rounded mr-3" />
        <div class="flex flex-col bg-gray-100">
            <div class="flex items-end">
                <span class="font-bold text-md mr-2 font-sans" v-text="comment.name"></span>
                <span class="text-grey text-xs font-light" v-text="time"></span>
            </div>
            <p class="font-light text-md text-grey-darkest" v-text="comment.message"></p>
            <p class="font-light text-sm text-blue-500 cursor-pointer" @click="showReplyForm">Reply</p>
            <div class="bg-white p-4 flex flex-col" v-if="replies.length > 0">
                <comment v-for="reply in replies" :key="reply.id" :comment="reply" />
            </div>
            <comment-form v-if="isShowReplyForm" :parent="comment" @close="isShowReplyForm = false" />
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import moment from 'moment'

export default {
    
    props: {
        comment: {
            required: true,
            type: Object
        }
    },
    watch: {
        comment(newVal) {
            this.fetch()
        }
    },

    computed: {

        time() {
            return moment(this.comment.created_at).fromNow()
        }
    },

    data: () => ({
        replies: [],
        isShowReplyForm: false,
    }),

    methods: {

        async fetch() {
            const { data: { data } } = await axios.get(`/api/comment`, { params: { id: this.comment.id }})
            this.replies = data
        },

        showReplyForm() {
            this.isShowReplyForm = true
        }
    },

    mounted() {
        this.fetch()
    }
}
</script>