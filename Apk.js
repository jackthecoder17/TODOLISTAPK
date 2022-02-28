window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const button = document.querySelector('#new-task-delete')
    const list_el = document.querySelector('#tasks');
    const Dan_el = document.querySelector('#container');

    Dan_el.appendChild(list_el);





    form.addEventListener('submit', (e) => {
        e.preventDefault();



        const task = input.value;
        console.log(task);




        if (!task) {
            alert(" Oga fill out The task 😒😒")
            return;
        }


        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");


        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input")
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";

        const task_delete_el = document.createElement("button")
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";

        const task_Done_el = document.createElement("button");
        task_Done_el.classList.add("Done");
        task_Done_el.innerHTML = "Done"


        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
        task_actions_el.appendChild(task_Done_el);


        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value = "";

        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "Save"
            } else {
                task_input_el.setAttribute("readonly", "readonly")
                task_edit_el.innerText = "Edit"
            }
        });
        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el)
        })
        task_Done_el.addEventListener('click', () => {
            task_input_el.style.textDecoration = " 2px black line-through";
            task_delete_el.style.visibility = "hidden";
            task_edit_el.style.visibility = "hidden"
        })


    })


})