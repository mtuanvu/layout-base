let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(password, 2, "Password cannot be blank");

  // if (username.value === "") {
  //   username.style.border = "2px solid red";
  //   errorMsg[0].innerHTML = "Username cannot be blank";

  //   //icon
  //   failureIcon[0].style.opacity = "1";
  //   successIcon[0].style.opacity = "0";
  // } else {
  //   username.style.border = "2px solid green";
  //   errorMsg[0].innerHTML = "";

  //   //icon
  //   failureIcon[0].style.opacity = "0";
  //   successIcon[0].style.opacity = "1";
  // }

  // if (email.value === "") {
  //   email.style.border = "2px solid red";
  //   errorMsg[1].innerHTML = "Email cannot be blank";

  //   //icon
  //   failureIcon[1].style.opacity = "1";
  //   successIcon[1].style.opacity = "0";
  // } else {
  //   email.style.border = "2px solid green";
  //   errorMsg[1].innerHTML = "";

  //   //icon
  //   failureIcon[1].style.opacity = "0";
  //   successIcon[1].style.opacity = "1";
  // }

  // if (password.value === "") {
  //   password.style.border = "2px solid red";
  //   errorMsg[2].innerHTML = "Password cannot be blank";

  //   //icon
  //   failureIcon[2].style.opacity = "1";
  //   successIcon[2].style.opacity = "0";
  // } else {
  //   password.style.border = "2px solid green";
  //   errorMsg[2].innerHTML = "";

  //   //icon
  //   failureIcon[2].style.opacity = "0";
  //   successIcon[2].style.opacity = "1";
  // }
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    //icon
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    //icon
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};
