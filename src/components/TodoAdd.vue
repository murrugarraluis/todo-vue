<template>
  <div id="add-container">
    <form @submit="addTodo">
      <div class="bg-gray-700 w-full rounded-full shadow-sm">
        <input
          type="text"
          v-model="title"
          class="
            bg-transparent
            px-5
            py-3
            w-full
            border-0
            outline-none
            text-white
          "
          placeholder="Nueva Tarea"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { uuid } from "vue-uuid";
export default {
  name: "TodoAdd",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        id: uuid.v4(),
        title: this.title,
        completed: false,
      };
      this.title = "";
      this.$emit("add-todo", newTodo);
    },
  },
};
</script>

<style scoped>
#add-container {
  padding: 10px;
}
input {
}
</style>
