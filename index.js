import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

const menu = document.querySelector("#menu");
const drawerElement = document.querySelector("#drawer");
const mainElement = document.querySelector("main");

menu.addEventListener("click", event => {
  drawerElement.classList.toggle("open");
  event.stopPropagation();
});

mainElement.addEventListener("click", event => {
  drawerElement.classList.remove("open");
  event.stopPropagation();
})

