<script setup>
import { ref } from 'vue';

const todo = ref('');

const todos = ref([
  {
    id: 1,
    text: 'Learn Vue.js 3',
    completed: false,
  },
]);

const addTodo = () => {
  todos.value.push({
    id: todos.value.length + 1,
    text: todo,
    completed: false,
  });
};
</script>
<template>
  <div
    v-for="todo in todos"
    :key="todo.id"
    data-test="todo"
    :class="{ completed: todo.completed }"
  >
    <input type="checkbox" data-test="todo-checkbox" v-model="todo.completed" />
    {{ todo.text }}
  </div>

  <div class="form">
    <input type="text" data-test="new-todo-input" v-model="todo" />
    <button data-test="new-todo-btn" @click="addTodo">Test</button>
  </div>
</template>
