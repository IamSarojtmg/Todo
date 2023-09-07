import addNewTask from "./newTask";

function ToDo(task, date) {
  return {
    task,
    date,
  };
}

// let toDoArr = [];

export default function submit(form, main, section, description, date) {
  const submit = document.createElement("input");
  form.appendChild(submit);
  submit.type = "submit";
  submit.textContent = "Submit";
  submit.value = "Submit";

  submit.addEventListener("click", (e) => {
    e.preventDefault();

    const newTask = ToDo(description.value, date.value);

    // let newTaskToString = JSON.stringify(newTask);

    // const newTasktoObj = localStorage.setItem("local", newTaskToString);
    // console.log(newTasktoObj);

    // const newTasktoObj = JSON.parse(localStorage.getItem("local"));

    // toDoArr.push(newTasktoObj);

    addNewTask(newTask.task, newTask.date); // the arguments being passed on to the addnewtask which is in another file(module)

    // toDoArr = [];

    main.removeChild(section);
  });
}
