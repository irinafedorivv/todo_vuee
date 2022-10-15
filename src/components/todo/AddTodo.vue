<template>
    <form v-on:submit.prevent="onSubmit">
        <input type="text" v-model="title">
        <button type="submit">Add To Do</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            title: ''
        }
    },
    methods: {
        onSubmit() {
            if(this.title.trim()) {
                let newTodo = {
                    id: Date.now(),
                    title: this.title,
                    completed:false
                }

                this.$emit('add-todo', newTodo)
                this.title = ''
            }
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
        justify-content: center;
        margin-top: 50px;
    }

    input {
        margin-right: 20px;
        padding: 7px;
        min-width: 250px;
        border-radius: 10px;
        border: 1px solid #ffddff;
    }

    button {
        background: #1d5059;
        border-radius: 10px;
        border: 1px solid #fff;
        color: #ffddff;
        padding: 0 20px;
        cursor: pointer;
    }
</style>