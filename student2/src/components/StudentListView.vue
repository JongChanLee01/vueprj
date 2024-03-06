<template>
  <div id="StudentListView">
    <h1>학생 목록</h1>
    <table>
      <tr><td>id</td><td>학번</td><td>이름</td><td>전화</td><td>성별</td>
          <td>이메일</td><td>학과</td></tr>
      <tr v-for="student in students" v-bind:key="student.id">
        <td>{{ student.id }}</td>
        <td>{{ student.studentNo }}</td>
        <td>{{ student.name }}</td>
        <td>{{ student.phone }}</td>
        <td>{{ student.sex }}</td>
        <td>{{ student.email }}</td>
        <td>{{ student.departmentId }}</td>
      </tr>
    </table>
 
  </div>
</template>
 
<script>
import axios from 'axios';
 
axios.defaults.baseURL = "http://localhost:3000";
    // 백엔드 API URL 앞 부분을 미리 설정한다
 
export default {
  name: "StudentListView",
  data() {
    return {
      students: [ ]
    }
  },
  mounted() { // 컴포넌트가 처음 화면에 보이게 될 때, 자동으로 호출되는 메소드
    this.reloadStudents(); // 데이터를 로드한다
  },
  methods: {
    async reloadStudents() { // 백엔드 API를 호출하여 데이터를 로드한다
      try {
        const response = await axios.get("/students");
        this.students = response.data;
      } catch (error) {
        alert('조회 에러: ' + (error instanceof Error ? error.message : error));
      }
    }
  }
}
</script>
 
<style scoped>
h1 { border-bottom: 1px solid gray; }
table { border-collapse: collapse; margin: 20px 0; width: 100%; }
tr:nth-child(1) { background-color: #eee; text-align: center; }
td { border: 1px solid gray; padding: 6px; }
td:nth-child(1) { text-align: center; width: 30px; }
</style>