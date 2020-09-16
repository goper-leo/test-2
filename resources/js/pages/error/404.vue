<template>

    <div class="body-bg-color h-screen">
        404
    </div>

</template>
<script>

    export default {

        created() {
            this.$router.push({ name: 'login' })
        }
    }
</script>
