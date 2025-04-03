"use strict";
let email = document.querySelector("#email");
let password = document.querySelector(".pass");
let subBtn = document.querySelector(".submit");

subBtn.addEventListener("click", (e) => {
  let formIsValid = true;
  if (userName.value == "" || password.value == "") {
    alert("Please Ensure All Input Fields Are Filled Correctly");
    userName.focus();
    e.preventDefault();
    formIsValid = false;
  }

  if (password1.value.length < 8) {
    alert("Please Ensure That Your Password Is Upto or Above 8 Characters");
    password.focus();
    e.preventDefault();
    formIsValid = false;
  }

  if (!email.value.includes("@")) {
    alert("Please Ensure Your Email Contains @ Symbol");
    email.focus();
    e.preventDefault();
    formIsValid = false;
  }

  if (formIsValid) {
    Notification.requestPermission((perm) => {
      if (perm == "granted") {
        new Notification("Maxi Hustles", {
          body: "You Have Successfully Logged In!",
          icon: "/Images/logo.jpg",
        });
      }
    });
  }
});
