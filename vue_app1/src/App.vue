<template>
  <!-- <HelloWorld message="안녕하세요 반갑습니다. Vue 세상"/> -->
  <MyCheckbox3 />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyCheckbox3 from './components/MyCheckbox3.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    MyCheckbox3,
  }
}
</script>

<style>
#app {
  border: 1px solid;
  text-align: center;
  padding: 30px;
}
</style>
