<template>
  <div class="py-2">
    <div v-for="todo in todos" :key="todo.id" class="px-4">
      <TodoItem :todo="todo" @delete-todo="deleteTodo"></TodoItem>
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
  name: "Todos",
  components: {
    TodoItem,
  },
  props: ["todos"],
  methods: {
    addTodo(todo) {
      const todos = this.todos.push(todo);
      this.copyTodos = [...todos];
    },
    deleteTodo(id) {
      this.$emit("delete-todo", id);
    },
  },
};
</script>

<style scoped></style>
