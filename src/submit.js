import addNewTask from "./newTask";


function ToDo(task, date) {
  return {
    task,
    date,
  };
}

let toDoArr = [];

export default function submit(form,main,section,description,date) {
  const submit = document.createElement('input')
  form.appendChild(submit);
  submit.type ='submit'
  submit.textContent = "Submit";
  submit.value = "Submit";


submit.addEventListener('click',(e)=>{
  e.preventDefault()

  const newTask = ToDo(description.value, date.value);

  toDoArr.push(newTask);

  addNewTask(toDoArr[0].task, toDoArr[0].date); // the arguments being passed on to the addnewtask which is in another file(module)

  toDoArr = []

  main.removeChild(section);

})

}

//there is a problem with the description and the date value. SOme issue with the data transfer.