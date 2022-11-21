<script>
    export let todo;

</script>

<article>
    <div class="todo-info">
        <p>
            {todo.text}
        </p>
    </div>
</article>

<style>
    article {
        width: 100%;
        margin: 10px 5px;
        padding: 10px;
        box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
        display: flex;
        justify-content: space-between;
    }
</style>