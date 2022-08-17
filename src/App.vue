<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <FilterTodos />
      <TodosList />
    </div>
  </div>
</template>

<script>
import TodosList from "./components/TodosList.vue";
import AddTodo from "./components/AddTodo.vue";
import FilterTodos from "./components/FilterTodos.vue";

export default {
  name: "App",
  components: {
    TodosList,
    AddTodo,
    FilterTodos,
  },
};
</script>

<style>
body {
  font-family: "Lato", "Lato", Arial, sans-serif;
  line-height: 1.6;
  background: #f5e6ff;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>

