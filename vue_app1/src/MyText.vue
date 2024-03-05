<template>
    <div>
        <input type="text" v-model="inp_text">
        <button type="button" @click="$emit('go', inp_text)">전달</button>
    </div>
</template>

<script>
    export default {
        name: "MyText",
        data() {
            return { inp_text: "" };
        }
    }
</script>
<style scoped>

</style>