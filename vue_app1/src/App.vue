<template>
  <div class="box">
    <!-- <HelloWorld message="안녕하세요 반갑습니다. Vue 세상"/> -->
    <MyCheckbox3 />
    <MyButton1 />
    <MySelect3 />
    <hr/>
    <h1>MyCounter1</h1>
    <MyCounter1 title="카운터" description="첫째 컴포넌트" />
    <MyCounter1 title="카운터" description="둘째 컴포넌트" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyCheckbox3 from './components/MyCheckbox3.vue'
import MyButton1 from './MyButton1.vue'
import MySelect3 from './MySelect3.vue'
import MyCounter1 from './MyCounter1.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    MyCheckbox3, MyButton1, MySelect3, MyCounter1
  }
}
</script>

<style>
#app {
  border: 1px solid;
  text-align: center;
  padding: 30px;
}
div { vertical-align: top; margin: 10px; }
img { margin: 10px; }
</style>
