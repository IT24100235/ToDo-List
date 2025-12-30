function addTask() {
    // 1. Get the input element and the list element
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    // 2. Validation: Don't add empty tasks
    if (input.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // 3. Create a new List Item (li)
    const li = document.createElement('li');

