import Vue from 'vue'
import TodoList from '../../src/TodoList'

Vue.config.productionTip = false

new Vue({

    el:'#app',
    components:{TodoList},
   template:'<TodoList/>'
  }
)