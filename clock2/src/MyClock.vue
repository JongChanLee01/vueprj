<template>
    <div>
        {{time}}
    </div>
</template>

<script>
import moment from "moment";
    export default {
        name: "MyClock",
        data() {
            return { time: null };
        },
        mounted() {
            // 콜백 함수를 만들고
            let callback=()=> {
                this.time = moment().format("HH:mm:ss");
                console.log(this.time);
            }
            
            // 콜백 호출
            callback();

            // 1초 간격으로 콜백함수 반복 호출
            setInterval(callback, 1000);
        }
    }
</script>

<style scoped>
    div {
        display: inline-block;
        font-size: 15pt;
        padding: 3px 12px;
        border: 1px solid gray;
    }
</style>