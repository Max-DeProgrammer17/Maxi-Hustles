"use script";
import {array} from "./post.js";

console.log(array)
let section = document.querySelector(".jobs");
let element="";
for(let i = 0; i < array.length; i++){
    element = `<div>
    <h2>${title.value}</h2>
    <h3>Company Name: ${cname.value}</h3>
    <h3>Type: ${type.value}</h3>
    <h3>Salary: ${salary.value}</h3></div><br>
    `; 

    section.innerHTML += element;
}