<template>

    <div class="flex-1 body-bg-color px-12 py-6 body-bg-color min-h-screen">
        <router-view></router-view>
        <Notify ref="notify" />
    </div>

</template>

<script>
    import axios from 'axios'

    export default {

        
    }

</script>
