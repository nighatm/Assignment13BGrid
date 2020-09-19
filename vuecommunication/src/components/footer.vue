<template>
    <div>
<h1 @click="footerClicked">This is the Footer!</h1>
    </div>
</template>
<script>
export default {
    name: 'page-footer',
    methods:{
        footerClicked: function(){
            this.$root.$emit('footer', "Hello from the footer")
        }
    }
}
</script>

<style scoped>

</style>