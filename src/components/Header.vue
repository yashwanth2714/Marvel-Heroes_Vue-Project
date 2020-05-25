<template>
    <div>
        <h2 >{{title}}</h2>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>
    h2 {
        color: white;
        font-weight: 700
    }
</style>
