<template>
    <div>
        <h1>User Details</h1>
        <p>User ID: {{ id }}</p>
    </div>
</template>

<script>
export default {
    // 라우터에서 전달된 props를 정의한다.
    props: ['id']
}
</script>
<style scoped>

</style>