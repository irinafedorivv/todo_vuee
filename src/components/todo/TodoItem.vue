<template>
    <li>
        <span v-bind:class="{done: todo.completed}">
            <input type="checkbox" v-on:change="todo.completed=!todo.completed">
            <strong>{{index + 1}}</strong>
            <span>{{todo.title}}</span>
        </span>
        <button v-on:click="$emit('remove-todo', todo.id)">X</button>
    </li>
</template>
<script>
    export default {
        name: 'TodoItem',
        props:{
            todo: {
                type: Object,
                required: true
            },
            index: Number
        }
    }
</script>
<style scoped>
li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    border: 1px solid #ffddff;
    border-radius: 10px;
    margin-bottom: 10px;
    background: linear-gradient(45deg, #424c4d, #5d8a87);
    cursor: pointer;
    transition: all 0.2s linear;
}
li:hover {
    background: linear-gradient(45deg, #384243, #406562);
}
button {
    border: none;
    border-radius: 50%;
    background-color: #0d3b39;
    color: #fff;
    width: 28px;
    height: 28px;
    padding: 2px;
}
span {
    margin-left: 10px;
}
input[type="checkbox"] {
    margin-right: 15px;
}
.done {
    text-decoration: line-through;
}
</style>
