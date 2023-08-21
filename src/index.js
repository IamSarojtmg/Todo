import "./style.css";
import logo from './logo.png'
import addTask from "./print.js";

// adding logo
const sidePanel = document.querySelector('aside')
const logoCont = document.createElement('img')
sidePanel.appendChild(logoCont)
logoCont.src = logo
logoCont.classList = 'logo'

addTask()







