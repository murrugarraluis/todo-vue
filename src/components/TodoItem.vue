<template>
  <div class="todo" :class="{ completed: todo.completed }">
    <div class="flex items-center border-b-2 border-gray-500 py-3">
      <div class="round">
        <input
          type="checkbox"
          :id="todo.id"
          :checked="todo.completed"
          @change="deleteTodo(todo)"
        />
        <label :for="todo.id"></label>
      </div>
      <div class="text-white font-semibold text-lg">{{ todo.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    checkTodo() {
      this.todo.completed = !this.todo.completed;
    },
    deleteTodo(todo) {
      this.$swal({
        title: "Completada",
        position: "bottom",
        showConfirmButton: false,
        timer: 2000,
        width: 900,
        showClass: {
          popup: "animate__animated animate__fadeInUp",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutDown",
        },
      });
      this.$emit("delete-todo", todo.id);
    },
  },
};
</script>

<style scoped>
.round {
  position: relative;
  margin-right: 2.5em;
}

.round label {
  background-color: transparent;
  border: 1px solid rgb(107, 114, 128);
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  left: 0;
  position: absolute;
  top: 0;
  width: 28px;
}

.round label:after {
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  content: "";
  height: 6px;
  left: 7px;
  opacity: 0;
  position: absolute;
  top: 8px;
  transform: rotate(-45deg);
  width: 12px;
}

.round input[type="checkbox"] {
  visibility: hidden;
}

.round input[type="checkbox"]:checked + label {
  background-color: rgb(107, 114, 128);
}

.round input[type="checkbox"]:checked + label:after {
  opacity: 1;
}
</style>
