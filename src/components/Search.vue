<template>
  <div class="bg-gray-200 px-2 w-full rounded-full">
    <input
      type="text"
      class="
        bg-transparent
        px-2
        py-1
        w-full
        border-none
        outline-none
        text-gray-700
      "
      v-model="search"
      @input="searchChange"
      placeholder="Buscar Tarea"
    />
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchChange() {
      this.$emit("search-change", this.search);
    },
  },
};
</script>

<style scoped></style>
