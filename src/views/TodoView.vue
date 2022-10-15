<template>
    <div class="home">
        <h1>Application Todo</h1>
        <AddTodo />
        <TodoList />
    </div>
</template>

<script>
    import AddTodo from '@/components/todo/AddTodo.vue'
    import TodoList from '@/components/todo/TodoList.vue'

    export default {
        name: 'TodoView',
        data() {
            return {
                todos: [
                    // {id: 1, title: 'Drink coffee', completed: false},
                    // {id: 2, title: 'Go for a walk', completed: false},
                    // {id: 3, title: 'Check homework', completed: false},
                    // {id: 4, title: 'Drink beer', completed: false},
                    // {id: 5, title: 'Go to Norway', completed: false},
                ],
                loading: true
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
        comments: [
            AddTodo, TodoList
        ]
    }
</script>