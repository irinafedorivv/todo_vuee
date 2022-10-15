<template>
  <div id="app">
   <nav>
    <router-link to="/">Todo</router-link>
    <router-link to="/movie">Movie</router-link>
    <router-link to="/currency">Currency</router-link>
   </nav>
   <router-view/>
  </div>
</template>
 
<!-- <script >
import TodoList from '@/components/todo/TodoList.vue'
import AddTodo from '@/components/todo/AddTodo.vue'
 
  export default {
    name: 'app',
    data() {
      return {
        todos: [
          // {id: 1, title: 'Drink coffee', completed: false},
          // {id: 2, title: 'Go for a walk', completed: false},
          // {id: 3, title: 'Check homework', completed: false},
          // {id: 4, title: 'Drink beer', completed: false},
          // {id: 5, title: 'Go to Norway', completed: false},
        ]
      }
    },
    mounted() {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=8')
        .then(response => response.json())
        .then(json => {
          this.todos = json
        })
    },
    methods: {
      removeTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
      },
      addTodo(todo) {
        this.todos.push(todo)
      }
    },

    components: {
      TodoList,
      AddTodo
    }
  }
</script> -->
 
 
<style>
body {
  min-height: 100vh;
  background: linear-gradient(#414d59, #b1bfc1);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #99c7c7;
  margin-top: 10px;
}
nav {
  padding: 30px;
}
 
nav a {
  font-weight: bold;
  color: #5b6772;
  margin: 0 20px;
  text-decoration: none;
}
 
nav a.router-link-exact-active {
  color: #d6e5e3;
}
</style>
