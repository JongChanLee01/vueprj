<template>
    <div class="box">
        <h1>할 일</h1>
        <table>
            <tr>
                <td>ID</td>
                <td>기한</td>
                <td>할일</td>
            </tr>
            <tr v-for="(todo, i) in todos" v-bind:key="todo.id" v-bind:class="{done: todo.done}">
                <td>{{todo.id}}</td>
                <td>{{formatDate(todo.date)}}</td>
                <td class="align">
                    <input type="checkbox" v-model="todo.done">
                    {{todo.title}}
                    <span v-on:click="deleteTodo(i)">x</span>
                </td>
            </tr>
        </table>
        <div class="inp_wrap">
            <input type="text" v-model="title" placeholder="할일을 입력하세요" />
            <input type="date" v-model="date">
            <button type="button" v-on:click="addTodo">추가</button>
        </div>
    </div>
</template>
<script>
    export default {
        name:"TodoView",
        data(){
            return {
                todos: [
                    {id: 1, title: "과제", date: "2024-03-02", done: true},
                    {id: 2, title: "시험공부", date: "2024-03-03", done: false},
                    {id: 3, title: "코딩훈련", date: "2024-03-04", done: false}
                ],
                title:"",
                lastId: 3
            }
        },
        methods: {
            addTodo: function(){
                this.todos.push({id: ++this.lastId, title: this.title, date: this.date, done: false});
                this.title="";
            },
            deleteTodo(index){
                if(confirm("삭제하시겠습니까?"))
                    this.todos.splice(index, 1);
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
        }
    }
</script>
<style scoped>
    h1 { text-align: left; border-bottom: 1px solid gray;}
    .box {
        padding: 30px;
        margin: 30px auto;
        width: 400px;
        border: 1px solid #ccc;
        box-shadow: 3px 3px 3px #aaa;
    }
    table { border-collapse: collapse; margin: 20px 0; width: 100%; }
    tr:nth-child(1) { background-color: #eee; text-align: center; }
    td { border: 1px solid gray; padding: 6px; }
    td:nth-child(1) { text-align: center; width: 30px; }
    span { font-weight: bold; margin-left: 10px; cursor: pointer; float: right;}
    tr.done { background-color: #f8f8f8; color: #bbb; text-decoration: line-through; }
    input[type=checkbox] { accent-color: #bbb; }
    .align {
        width: 50%;
        text-align: left;
    }
    .inp_wrap {
        width: 100%;
    }
    .inp_wrap input[type=text] {width: 50%; height: 23px; margin-right: 3px;}
    .inp_wrap input[type=date] {width: 30%; height: 25px; margin-right: 3px;}
    .inp_wrap button {width: 15%; height: 29px; vertical-align:middle;}
</style>