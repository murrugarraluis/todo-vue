<template>
  <div class="min-h-screen bg-gray-800">
    <div id="header">
      <div class="flex bg-gray-700 px-2 py-3">
        <!--        <div id="menu" class="flex justify-center items-center">-->
        <!--          <svg-->
        <!--            xmlns="http://www.w3.org/2000/svg"-->
        <!--            class="h-7 w-7 text-gray-200 font-semibold"-->
        <!--            fill="none"-->
        <!--            viewBox="0 0 24 24"-->
        <!--            stroke="currentColor"-->
        <!--          >-->
        <!--            <path-->
        <!--              stroke-linecap="round"-->
        <!--              stroke-linejoin="round"-->
        <!--              stroke-width="2"-->
        <!--              d="M4 6h16M4 12h16M4 18h16"-->
        <!--            />-->
        <!--          </svg>-->
        <!--        </div>-->
        <div id="title" class="w-full px-4">
          <h2 v-if="!showSearch" class="text-gray-200 font-semibold text-xl">
            Bandeja de Entrada
          </h2>
          <Search v-else @search-change="searchChange"></Search>
        </div>
        <div id="search" class="flex justify-center items-center">
          <button @click="toggleSearch">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-200 font-bold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div id="main-container">
      <TodoAdd v-show="showAdd" @add-todo="addTodo"></TodoAdd>
      <Todos :todos="copyTodos" @delete-todo="deleteTodo"></Todos>
    </div>
    <div id="footer" class="w-full fixed left-0 bottom-0 px-2 py-3">
      <div>
        <button
          @click="toggleAdd"
          class="bg-red-500 p-3 rounded-full text-white font-bold float-right"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search";
import TodoAdd from "@/components/TodoAdd";
import Todos from "@/components/Todos";
export default {
  name: "App",
  components: {
    Search,
    Todos,
    TodoAdd,
  },
  data() {
    return {
      showAdd: false,
      showSearch: false,
      todos: [
        {
          id: 0,
          title: "Comprar la Cena lorem ipsus balalalala",
          completed: false,
        },
        {
          id: 1,
          title: "Pasear al Perro",
          completed: false,
        },
        {
          id: 2,
          title: "Jugar Xbox",
          completed: false,
        },
      ],
      copyTodos: [],
    };
  },
  created() {
    this.copyTodos = [...this.todos];
  },
  methods: {
    toggleAdd() {
      this.showAdd = !this.showAdd;
    },
    toggleSearch() {
      this.showSearch = !this.showSearch;
    },
    addTodo(todo) {
      this.todos.push(todo);
      this.copyTodos = [...this.todos];
      this.toggleAdd();
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
      this.copyTodos = [...this.todos];
    },
    searchChange(search) {
      // console.log(search);
      const temp = this.todos.filter((todo) => {
        return todo.title
          .toLowerCase()
          .includes(search.toString().toLowerCase());
      });
      this.copyTodos = [...temp];
    },
  },
};
</script>
<style>
* {
}
</style>
