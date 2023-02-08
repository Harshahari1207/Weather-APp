import './style.css';
import cuLocation from './modules/currLoc';
import searchLocation from './modules/searchLoc';
import { fetchData } from './modules/default';

const currLocation = document.querySelector("button");
const subBtn = document.querySelector(".subBtn");

currLocation.addEventListener("click", cuLocation);
subBtn.addEventListener("click", searchLocation);

window.addEventListener("load", fetchData);