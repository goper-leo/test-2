<template>

    <div class="flex p-4 flex-col">
        Comments:
        <div class="bg-white p-4 flex flex-col">
            <comment v-for="comment in comments" :key="comment.id" :comment="comment" />
        </div>

        <comment-form />
        <notify ref="notify" />
    </div>

</template>

<script>
    import axios from 'axios'

    export default {

        data: () => ({
            comments: []
        }),

        methods: {

            async fetchComments() {
                const { data: { data } } = await axios.get(`/api/comment`)
                this.comments = data
            }
            
        },

        mounted() {
            this.fetchComments()
        },

        created() {
            Echo.channel(`commented`)
                .listen('Commented', (e) => {
                    this.fetchComments()
                });

        }
    }

</script>
