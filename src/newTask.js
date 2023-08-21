export default function addNewTask (){
  const main = document.querySelector("main");
  const task = document.createElement('p')
  main.appendChild(task)

  console.log(task);
  task.textContent = 'Hi'

}


// how to position the newly added elements such as task appear at the top of the main element