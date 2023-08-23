// import addNewTask from "./newTask";
import cancle from "../cancel";
import submit from "./submit";

// function ToDo(task, date) {
//   return {
//     task,
//     date,
//   };
// }

// let toDoArr = [];

export default function addTask() {
  const addTask = document.querySelector(".action-add");

  addTask.addEventListener("click", () => {
    const main = document.querySelector("main");
    const section = document.createElement("section");
    const description = document.createElement("input");
    const form = document.createElement("form");
    const date = document.createElement("input");
    // const submit = document.createElement("input");

    main.appendChild(section);
    section.classList = "modal-cont";
    section.appendChild(form);
    form.appendChild(description);
    description.placeholder = "Description";
    description.style.width = "90%";
    form.appendChild(date);
    date.type = "date";
    // form.appendChild(submit);
    // submit.type = "submit";
    // submit.textContent = "Submit";
    // submit.value = "Submit";

    cancle(section, main);
    submit(form, main, section, description, date);

    //submit(form)

    // submit.addEventListener("click", (e) => {
    //   e.preventDefault();

    //   const newTask = ToDo(description.value, date.value);

    //   toDoArr.push(newTask);

    //   addNewTask(toDoArr[0].task, toDoArr[0].date); // the arguments being passed on to the addnewtask which is in another file(module)
    //   toDoArr = []
    //   main.removeChild(section);
    // });
  });
}
