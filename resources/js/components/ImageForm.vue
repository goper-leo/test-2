<template>
    <div class="mt-4">
        
        <div class="w-1/2">
            
            <input class="cursor-pointer opacity-0 absolute block top-0 right-0"
                   type="file"
                   multiple="multiple"
                   ref="fileinput" accept="image/*"
                   @change="previewImage">
        </div>
        <div class="image-preview mb-4">
            <img :src="imageData" />
        </div>
        <t-button size="sm" variant="default" @click="$refs.fileinput.click()">
            Change Avatar
        </t-button>
        <t-button v-if="hasChange" size="sm" @click="upload">
            Upload
        </t-button>
    </div>
</template>
<script>
import axios from 'axios'

export default {

    computed: {
        avatarUrl() {
            let user = this.$store.getters['auth/user']
            this.imageData = !user || user.avatar_url
            return !user || user.avatar_url
        }
    },

    watch: {

        avatarUrl(newVal) {
            this.imageData = newVal
        }
    },

    data: () => ({
        imageData: null,
        hasChange: false,
        avatar: null
    }),

    methods: {

        previewImage(event) {
            var input = event.target
            if (input.files && input.files[0]) {
                var reader = new FileReader()
                reader.onload = e => {
                    this.imageData = e.target.result
                    this.avatar = input.files[0]
                    
                }
                
                reader.readAsDataURL(input.files[0])
            }

            this.hasChange = true
        },

        async upload() {
            try {
                const config = {
                        headers: {
                            'content-type': 'multipart/form-data',
                        }
                    }
                
                let formData = new FormData()
                formData.append('avatar', this.avatar)
                
                const { data: { data } } = await axios.post(`/api/me/update/avatar`, formData, config)
                this.$notify.success('Avatar image has been updated.')
                this.$store.dispatch("auth/fetchUserProfile")
                this.hasChange = false
            } catch (err) {
                this.hasChange = false
            }
        }
    },
}
</script>