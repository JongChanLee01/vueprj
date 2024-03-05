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
    <MyCounter1 title="카운터" value="3" v-bind:enabled="true" />
    <!-- <MyCounter1 title="카운터" value="3" :enabled="true" /> -->
    <hr/>

    <h1>MyCounter2</h1>
    <MyCounter2 title="카운터2" description="첫째 컴포넌트" color="#ffb"  v-on:send="showValue" />
    <MyCounter2 title="카운터2" color="#afa"  v-on:send="showValue" />
    <hr/>

    <div id="app">
      <h1>MyText</h1>
      <MyText v-on:go="showText"/>
      <p>{{text}}</p>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyCheckbox3 from './components/MyCheckbox3.vue'
import MyButton1 from './MyButton1.vue'
import MySelect3 from './MySelect3.vue'
import MyCounter1 from './MyCounter1.vue'
import MyCounter2 from './MyCounter2.vue'
import MyText from './MyText.vue'

export default {
  name: 'App',
  data(){
    return{
      text:""
    }
  },
  methods: {
    showValue(value) {
      alert(value);
    },
    // t가 MyText 파일에있는 inp_text에 담겨오는 값임
    showText(t){
      this.text=t;
    }
  },
  components: {
    // HelloWorld,
    MyCheckbox3,
    MyButton1,
    MySelect3,
    MyCounter1,
    MyCounter2,
    MyText
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
