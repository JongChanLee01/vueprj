<template>
    <div id="MyTodo">
    <h1>할 일</h1>
    <table>
      <tr><td>ID</td><td>기한</td><td>할일</td></tr>
      <tr v-for="todo in todos" v-bind:key="todo.id" v-bind:class="{done: todo.done}">
        <td>{{ todo.id }}</td>
        <td>{{ formatDate(todo.dueDate) }}</td>
        <td class="align">
            <input type="checkbox" v-model="todo.done" v-on:click="toggleTodo(todo)" />
            {{ todo.title }}
            <span v-on:click="deleteTodo(todo.id)">x</span>
        </td>
      </tr>
    </table>
    <div class="inp_wrap">
        <input type="text" v-model="title" />
        <input type="date" v-model="date">
        <button type="button" v-on:click="addTodo">추가</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

// 백엔드 API URL 앞부분을 미리 설정
axios.defaults.baseURL = "http://localhost:3000";

export default {
    name: "MyTodo",
    data(){
        return {
            id: 3,
            dueDate:"",
            todos: [],
            title: "",
            done:false
        }
    },
    mounted() { // 컴포넌트가 처음 화면에 보이게 될 때, 자동으로 호출되는 메소드
        this.reloadTodos(); // 데이터 로드
    },
    methods: {
        async reloadTodos(){ // 백엔드 API를 호출하여 데이터를 로드
            try {
                const response = await axios.get("/todos");
                this.todos = response.data;
            } catch(error){
                alert('조회 에러: ' + (error instanceof Error ? error.message : error));
            }
        },
        async addTodo(){
            try {
                // ++this.id+"" 뒤에 +"" 붙여준 이유는 안붙이면 id값이 int형식, 붙이면 id값이 str형식으로됨
                const todo = { id: ++this.id+"", dueDate: this.date, title: this.title, done:this.done };
                await axios.post("/todos", todo); // 새 todo를 백엔드에 등록
                this.reloadTodos(); // todo 목록 다시 로드
                this.title = "";
            } catch(error) {
                alert('저장 에러: ' + (error instanceof Error ? error.message : error));
            }
        },
        async deleteTodo(id) {
            try {
                if(confirm("삭제하시겠습니까?") == false) return;
                await axios.delete("/todos/" + id);
                this.reloadTodos();
            } catch(error) {
                alert('삭제 에러: ' + (error instanceof Error ? error.message : error));
            }
        },
        async toggleTodo(todo) {
            try {
                todo.done = !todo.done;
                await axios.put("/todos/" + todo.id, todo);
                this.reloadTodos();
            } catch(error) {
                alert('저장 에러: ' + (error instanceof Error ? error.message : error));
            }
        },
        formatDate(date) {
            let date1 = new Date(date);
            return date1.toLocaleDateString("ko-kr", {
                weekday: "short",
                year:"numeric",
                month:"short",
                day:"numeric"
            })
        }
    },
}
</script>

<style scoped>
div#MyTodo { padding: 30px; margin: 30px auto; width: 400px;
  border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
h1 { border-bottom: 1px solid gray; }
table { border-collapse: collapse; margin: 20px 0; width: 100%; }
tr:nth-child(1) { background-color: #eee; text-align: center; }
td { border: 1px solid gray; padding: 6px; }
td:nth-child(1) { text-align: center; width: 30px; }
span { font-weight: bold; margin-left: 10px; cursor: pointer; float: right; }
tr.done { background-color: #f8f8f8; color: #bbb; text-decoration: line-through; }
input[type=checkbox] { accent-color: #bbb; }
.align {width: 47%; text-align: left; }
.inp_wrap { width: 100%; }
.inp_wrap input[type=text] {width: 50%; height: 23px; margin-right: 3px;}
.inp_wrap input[type=date] {width: 30%; height: 25px; margin-right: 3px;}
.inp_wrap button {width: 15%; height: 29px; vertical-align:middle;}
</style>