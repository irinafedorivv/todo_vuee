<template>
    <div>
        <ul>
            <TodoItem
            v-for="(todo, i) of todos" :key="todo.id"
            v-bind:todo="todo"
            v-bind:index="i"
            v-on:remove-todo="removeTodo" />
        </ul>
    </div>
</template>
<script>
    import TodoItem from '@/components/todo/TodoItem.vue'
    export default {
        name: 'TodoList',
        props: ['todos'],
        components: {
            TodoItem
        },
        methods: {
            removeTodo(id) {
                this.$emit('remove-todo', id);
            }
        }
    }
</script>
<style scoped>
ul {
    max-width: 580px;
    margin: 50px auto;
    list-style-type: none;
    padding-left: 0;
}
</style>
