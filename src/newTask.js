export default function addNewTask(description, date) {
  const main = document.querySelector(".main-body");
  const task = document.createElement("p");
  const addDate = document.createElement("span");
  const done = document.createElement("div");

  main.appendChild(task);
  main.appendChild(addDate);
  main.appendChild(done);

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

if(task.textContent === '' && addDate.textContent === ''){
  main.removeChild(done)
}
}
