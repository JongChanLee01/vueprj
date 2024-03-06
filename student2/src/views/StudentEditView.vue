<template>
  <div id="StudentEdit">
    <!-- {{ $route.params.id }} -->
    <h1>학생 수정</h1>
    <div>
      <input type="text" v-model="student.studentNo" />
    </div>
    <div>
      <input type="text" v-model="student.name" />
    </div>
    <div>
      <input type="phone" v-model="student.phone" />
    </div>
    <div>
      <label><input type="radio" value="남" v-model="student.sex" /> 남자</label>
      <label><input type="radio" value="여" v-model="student.sex" /> 여자</label>
    </div>
    <div>
      <input type="email" v-model="student.email" />
    </div>
    <div>
      <select v-model="student.departmentId">
        <option value=1>소프</option>
        <option value=2>컴공</option>
        <option value=3>정통</option>
        <option value=4>글티</option>
      </select>
    </div>
    <div>
      <button type="button" v-on:click="save">저장</button>
      <button type="button" v-on:click="goList">취소</button>
    </div>
  </div>
</template>
 
<script>
import axios from 'axios';
 
axios.defaults.baseURL = "http://localhost:3000";
 
export default {
  name: "StudentEditView",
  data() {
    return {
      student: { }
    }
  },  
  mounted() {
    const id = this.$route.params.id;
    this.loadStudent(id);
  },
  methods: {
    async loadStudent(id) {
      try {
        const response = await axios.get("/students/" + id);
        this.student = response.data;
      } catch (error) {
        alert('조회 에러: ' + (error instanceof Error ? error.message : error));
      }
    },
    async updateStudent(student) {
      try {
        await axios.put("/students/" + student.id, student);
      } catch (error) {
        alert('저장 에러: ' + (error instanceof Error ? error.message : error));
      }
    },
    async save() {
      await this.updateStudent(this.student);
      this.goList();
    },
    goList() {
      this.$router.push("/");
    }
  }
}
</script>
 
<style>
input[type=text], input[type=phone], input[type=email] { padding: 6px; width: 200px; }
select { padding: 6px; width: 150px }
div { margin-bottom: 15px; }
label { margin-right: 15px; }
button { padding: 5px 20px; margin-right: 10px; }
</style>