<template>
  <h1>테스트 결과는 console에 출력됨</h1>
</template>

<script>
// import { test1, test2, test3 } from './test_axios1'
// import { test1, test2, test3 } from './test_axios2'
import { test1, test2 } from './test_axios3'

export default {
  name: 'App',
  mounted() {
    test1();
    test2();
    // test3(1);
    // test3(400); // 일부러 에러를 발생시켜봄
  },
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
