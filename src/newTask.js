export default function addNewTask (description, date){
  const main = document.querySelector(".main-body");
  const task = document.createElement('p')
  const addDate = document.createElement('span')
  main.appendChild(task)
  main.appendChild(addDate)

  task.textContent = description
  task.style.color = 'white'

  addDate.textContent = date
  addDate.style.color = 'white'

}




