import './style.css';
import cuLocation from './modules/currLoc';
import searchLocation from './modules/searchLoc';

const currLocation = document.querySelector("button");
const subBtn = document.querySelector(".subBtn");

currLocation.addEventListener("click", cuLocation);
subBtn.addEventListener("click", searchLocation);
