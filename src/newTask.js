let arr =[]

const lsContent = localStorage.getItem('Todolist')


if(lsContent){
  arr = JSON.parse(lsContent)
  for (let i = 0; i < arr.length; i++){

    const main = document.querySelector(".main-body");
    const task1 = document.createElement("p");
    const addDate2 = document.createElement("span");
    const done = document.createElement("div");
  
    main.appendChild(task1);
    main.appendChild(addDate2);
    main.appendChild(done);
  
    task1.textContent = arr[i].task
    addDate2.textContent = arr[i].calander
  }
}




export default function addNewTask(description, date) {
  const main = document.querySelector(".main-body");
  const task = document.createElement("p");
  const addDate = document.createElement("span");
  const done = document.createElement("div");

  main.appendChild(task);
  main.appendChild(addDate);
  main.appendChild(done);

  // localStorage.setItem('description', description)
  // const userTask = localStorage.getItem('description')

  const convertObj = {
    task : description,
    calander : date
  }

  arr.push(convertObj)

localStorage.setItem('Todolist',JSON.stringify(arr))






  task.textContent = description;
  task.style.color = "white";


  addDate.textContent = date;
  addDate.style.color = "white";


  done.classList = "done-button";

  done.addEventListener("click", () => {
    main.removeChild(task);
    main.removeChild(addDate);
    main.removeChild(done);
  });

  if (task.textContent === "" && addDate.textContent === "") {
    main.removeChild(done);
  }
}

