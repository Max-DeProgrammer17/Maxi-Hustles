"use script";
// getting variables of input fields and button
let userName = document.querySelector("#fname");
let email = document.querySelector("#email");
let password1 = document.querySelector("#pass");
let password2 = document.querySelector("#cpass");
let subBtn = document.querySelector(".submit");

//setting button event listener to check the form and give feedbacks

subBtn.addEventListener("click", (e) => {
  let formIsValid = true;
  if (
    userName.value == "" ||
    email.value == "" ||
    password1.value == "" ||
    password2.value == ""
  ) {
    alert("Please Ensure All Input Fields Are Filled Correctly");
    userName.focus();
    e.preventDefault();
    formIsValid = false;
  }

  if (password1.value !== password2.value) {
    alert("Please Ensure The Passwords Match");
    password1.focus();
    e.preventDefault();
    formIsValid = false;
  }
  if (!email.value.includes("@")) {
    alert("Please Ensure Your Email Contains @ Symbol");
    email.focus();
    e.preventDefault();
    formIsValid = false;
  }

  if ((password1.value && password2.value).length < 8) {
    alert("Please Ensure That Your Password Is Upto or Above 8 Characters");
    password1.focus();
    e.preventDefault();
    formIsValid = false;
  }

  if (formIsValid) {
    Notification.requestPermission((perm) => {
      if (perm == "granted") {
        new Notification("Maxi Hustles", {
          body: "You Have Successfully Created An Account!",
          icon: "/Images/logo.jpg",
        });

        localStorage.setItem("Username", userName.value);
        localStorage.setItem("Email", email.value);
        localStorage.setItem("Password", password1.value);
      }
    });
  }
});
