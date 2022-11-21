<script>
    async function onSubmit(e) {

    // Get the data from the form
    const formData = new FormData(e.target)
    const data = { };
    for (let field of formData) {
        const [key, value] = field;
    data[key] = value;    
    }
    // Send data to the API
    const token = localStorage.getItem("todo")
    await fetch('http://localhost:3001/todo/new',{
        method:'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data),
    }).then(
        () => {
        // reload current page
        window.location.href = '/';
        }
    )     
}

let popupActive = false

function action() {
    popupActive = !popupActive
}
</script>


<div class="App">
{#if popupActive}
<div class="popup">
    <div class="closePopup" on:click={() => {action()} }>x</div>
    <form on:submit|preventDefault={onSubmit}>
    <div class="content">
        <h3>Add Task</h3>
        <input
            type="text"
            class="add-todo-input"
            id="text"
            name="text"
            placeholder="text"
            cols="30"
        />
    </div>
    <div class="button">
        <button type="submit">Submit</button>
    </div>
</form>
</div >
{/if}

<div class="addPopup" on:click={() => {action()}}>+</div>
</div>

<style>
:root {
  --primary: #D81E5B;
  --secondary: #8A4EFC;
  --light: #EEE;
  --light-alt: #61759b;
  --dark: #131A26;
  --dark-alt: #202B3E;
  }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira Sans', sans-serif;
}

.App {
  padding-left: 32px;
  padding-right: 32px;
}

.addPopup {
  position: fixed;
  bottom: 32px;
  right: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 64px;
  height: 64px;
  border-radius: 999px;
  font-size: 28px;
  font-weight: 900;
  color: var(--light);
  background-image: linear-gradient(to bottom right, var(--primary), var(--secondary));
  cursor: pointer;
}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  max-width: 400px;
  background-color: var(--light);
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0px 3px 24px var(--dark);
}
.closePopup {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 20px;
  height: 20px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  color: var(--light);
  border-radius: 50%;
}

.popup h3 {
  color: var(--dark);
  margin-bottom: 16px;
  font-weight: 400;
  text-transform: uppercase;
}

.add-todo-input {
  appearance: none;
  border: none;
  outline: none;

  background-color: rgb(214, 213, 213);
  padding: 16px;
  border-radius: 16px;
  box-shadow: 0px 2px 24px rgba(0, 0, e, 0.2);
  width: 100%;
  font-size: 20px;
}
  
.button {
  padding: 16px 32px;
  border-radius: 99px;
  background-image: linear-gradient(to right, var(--primary), var(--secondary));
  display: inline-block;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 18px;
  margin-top: 16px;
  text-align: center;
  cursor: pointer;
}

.logout {
  position: absolute;
  right: 0px;
  margin-right: 32px;
}
</style>