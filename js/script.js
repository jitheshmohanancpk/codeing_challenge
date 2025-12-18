// 1. ADD FUNCTION
    function addTask() {
        const input = document.getElementById("taskInput");
        const taskList = document.getElementById("taskList");

        if (input.value.trim() === "") {
            alert("Please enter a task!");
            return;
        }

        // Create the list item (li)
        const li = document.createElement("li");

        // Set the internal HTML of the row
        li.innerHTML = `
            <span class="task-text">${input.value}</span>
            <div>
                <button class="edit-btn" onclick="editTask(this)">Edit</button>
                <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
            </div>
        `;

        taskList.appendChild(li);
        input.value = ""; // Clear input after adding
    }

    // 2. DELETE FUNCTION
    function deleteTask(button) {
        // "button.parentElement.parentElement" targets the <li>
        const row = button.parentElement.parentElement;
        row.remove();
    }

    // 3. EDIT FUNCTION
    function editTask(button) {
        const row = button.parentElement.parentElement;
        const textSpan = row.querySelector(".task-text");
        const currentText = textSpan.innerText;

        // Change text into an input field
        textSpan.innerHTML = `<input type="text" class="edit-input" value="${currentText}">`;

        // Change "Edit" button to "Save"
        button.innerText = "Save";
        button.className = "save-btn";
        button.onclick = function() { saveTask(this); };
    }

    // 4. SAVE FUNCTION
    function saveTask(button) {
        const row = button.parentElement.parentElement;
        const inputField = row.querySelector(".edit-input");
        const newText = inputField.value;

        const textSpan = row.querySelector(".task-text");
        textSpan.innerText = newText;

        // Change "Save" button back to "Edit"
        button.innerText = "Edit";
        button.className = "edit-btn";
        button.onclick = function() { editTask(this); };
    }