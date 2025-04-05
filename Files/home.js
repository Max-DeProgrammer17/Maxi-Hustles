"use strict";
//getting dom elements
let userName = document.querySelector(".test-name");
let bio = document.querySelector(".test-bio");
let leftBtn = document.querySelector("#left");
let rightBtn = document.querySelector("#right");
    let arrayUser = [
    {
        userNom: "Jessica Taylor (Austin, Texas)",
        usertest:"Maxi Hustles revolutionized my freelancing experience. The platform is user-friendly, and I've secured reliable clients who appreciate quality. It's been a game-changer for my career!"

    },
  {
    userNom: "Aisha Yusuf (Nairobi, Kenya)",
    usertest:
      "Maxi Hustles gave me the freedom to work on my own terms while connecting me with a global clientele. I couldn't ask for a better freelancing experience!",
  },
  {
    userNom:"Sofia Martinez (Madrid, Spain)",
    usertest:"Joining Maxi Hustles was the best decision I made for my freelance career. The variety of projects and supportive team make it stand out from other platforms."
  },
  {
    userNom:"Rahul Mehta (Mumbai, India)",
    usertest:"Maxi Hustles has connected me with amazing opportunities. The projects are exciting, and the payment process is seamless. A must-try for every freelancer!"
  },
  {
    userNom:"Liam O'Connor (Dublin, Ireland)",
    usertest:"As a graphic designer, finding clients who value creativity was a challenge—until I discovered Maxi Hustles. It's hands-down the best freelancing platform!"
  }
];
let random = Math.trunc(Math.random()* arrayUser.length ) + 1;
let current = 0;

function change(){
    userName.textContent = arrayUser[current].userNom;
      bio.textContent = arrayUser[current].usertest;
 }
rightBtn.addEventListener("click", (e) => {
    leftBtn.addEventListener("click", ()=>{
        current = (current - 1 + arrayUser.length) % arrayUser.length;
        change();
      });
    
        rightBtn.addEventListener("click", () => {
          current = (current + 1) % arrayUser.length;
          change();
        });
    
})


