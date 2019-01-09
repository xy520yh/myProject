<template>
    <div class="home">
        <!-- 公用的header组件 -->
        <v-header></v-header>

        <h1>{{msg}}</h1>
       
        <div>
            <button @click="sayHello">点我说hello</button>
            <button @click="sayBad">点我说bad</button>
        </div>

        <!-- todolist组件 -->
        <todo-list></todo-list>

    </div>
</template>
<script>
import vheader from './header';
import TodoList from './TodoList';

export default {
    name: 'vhome',
    components: {
        'v-header' : vheader,
        'todo-list' : TodoList
    },
    data() {
        return {
            msg: "说点啥呢",
        }
    },
    creatd() {

    },
    mounted() {

    },
    methods: {
        sayHello() {
            this.msg = "hello";
        },
        sayBad() {
            this.msg = "bad";
        }
    }
}
</script>

