<script>
    import { onMount } from "svelte"
    import Todo from "./Todo.svelte"

    let todos = []

    onMount(async () => {
        const token = localStorage.getItem("todo")

        const res = await fetch("http://localhost:3001/todos/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
        }
        })
            todos = await res.json()
            console.log(todos)
        })
</script>


{ #if todos }
{ #each todos as todo }
<ul>
    <li>
        <Todo {todo} />
    </li>
</ul>
{/each}
{:else }
<p class="loading">loading...</p>
{ /if}


<style>ul {
    width: 80%;
    margin: 10px auto;
    list-style-type: none;
    padding: 0px;
}

li {
    display: block
}

.loading {
    opacity: 0;
    animation: 0.5s 0.6s forwards fade-in;
}

@keyframes fade-in {
    from {
        opacity: 0;
    }
    
    to {
        opacity: 1;
    }
}

</style>