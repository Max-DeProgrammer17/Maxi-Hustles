"use strict";
let title = document.querySelector("#title");
let cname = document.querySelector("#cname");
let type = document.querySelector("#type");
let salary = document.querySelector("#salary");
let btn = document.querySelector(".btnpost");
let main = document.querySelector(".main_cont"); 
let element = " ";
let array = [];

btn.addEventListener("click", (e) => {
    e.preventDefault();
   element = `<div>
   <h2>${title.value}</h2>
   <h3>Company Name: ${cname.value}</h3>
   <h3>Type: ${type.value}</h3>
   <h3>Salary: ${salary.value}</h3></div><br>
   `;  

   array.push({
    title:title.value,
    cname:cname.value,
    type:type.value,
    salary:salary.value
   })
   console.log(array);

   title.value ="";
   cname.value="";
   type.value="";
   salary.value="";
   main.innerHTML += element;

  
});

 export {array};

