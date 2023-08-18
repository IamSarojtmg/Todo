import "./style.css";
import background from "./background.jpg";
import printMe from "./print.js";


const btn = document.createElement('button')
const div = document.querySelector('.addhere')


btn.textContent = 'kiro'

div.appendChild(btn)
console.log(div);


btn.addEventListener('click', printMe)