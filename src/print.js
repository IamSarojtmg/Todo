import addNewTask from "./newTask";

function ToooDo(task,date){
  return{
    task,date
  }
}


export default function addTask() {
  const addTask = document.querySelector(".action-add");

  addTask.addEventListener("click", () => {
    const main = document.querySelector("main");
    const section = document.createElement("section");
    const description = document.createElement("input");
    const form = document.createElement("form");
    const date = document.createElement("input");
    const submit = document.createElement("input");

    main.appendChild(section);
    section.classList = "modal-cont";
    section.appendChild(form);
    form.appendChild(description);
    description.placeholder = "Description";
    description.style.width = "90%";
    form.appendChild(date);
    date.type = "date";
    form.appendChild(submit);
    submit.type = "submit";
    submit.textContent = "Submit";
    submit.value = "Submit";

    submit.addEventListener('click',(e)=>{
      e.preventDefault()
      const newTask = ToooDo(
        description.value,
        date.value
      )
      main.removeChild(section)
      addNewTask()
    })
  });
}
