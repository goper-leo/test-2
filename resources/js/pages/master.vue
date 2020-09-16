<template>

    <div class="flex-1 body-bg-color px-32 py-6 body-bg-color xs:px-2 xs:py-2 min-h-screen">
        <router-view></router-view>
        <Notify ref="notify" />
    </div>

</template>

<script>
    import axios from 'axios'

    export default {

        mounted() {
            
        },
    }

</script>
