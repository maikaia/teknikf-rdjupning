<script>
  import Todos from './lib/Todos.svelte';
  import AddTodo from './lib/AddTodo.svelte';
  import Register from "./lib/Register.svelte"
  import Login from "./lib/Login.svelte"

  import { onMount } from "svelte"

  let user = []

  onMount(async () => {
    user = localStorage.getItem("todo")
  })
</script>

<main>
  {#if user}
  <AddTodo />
  <h1>Todo List</h1>
  <Todos />
  {:else}
  <Login/>
  <Register/>
  {/if}
</main>

<style>
  main {
    padding: 1rem;
    width: 80%;
    margin: 0px auto;
  }
  h1 {
    text-align: center;
  }
</style>