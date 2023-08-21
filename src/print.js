export default function addTask() {
  const addTask = document.querySelector(".action-add");

  addTask.addEventListener("click", () => {
    const main = document.querySelector("main");
    const section = document.createElement("section");
    const description = document.createElement("input");
    const form = document.createElement("form");
    const date = document.createElement("input");
    const submit = document.createElement("button");

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
  });
}
