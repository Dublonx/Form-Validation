// Form Validation
function login() {
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  const cnPassword = document.querySelector("#cnPassword").value.trim();
  
  // if
  if (name === "" || email === "" || password === "" || cnPassword === "") {
    Swal.fire({
      text: "Please fill out this field before submitting!",
      icon: "error",
      confirmButtonText: "OK",
      confirmButtonColor: "red"
    });
  } else if (!email.includes("@")) {
    Swal.fire({
      text: "Invalid email address, must be contains '@'!",
      icon: "error",
      confirmButtonText: "OK",
      confirmButtonColor: "red"
    });
  } else if (password.length < 12) {
    Swal.fire({
      text: "Password must be maximum of 12 characters!",
      icon: "error",
      confirmButtonText: "OK",
      confirmButtonColor: "red"
    });
  } else if (cnPassword !== password) {
    Swal.fire({
      text: "Your confirm password not match to your password, Please try again!",
      icon: "error",
      confirmButtonText: "OK",
      confirmButtonColor: "red"
    });
  } else {
    Swal.fire({
      text: "Successfully!",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "green"
    });
    
    // remove input
    setTimeout(function() {
      document.querySelector("#name").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#password").value = "";
      document.querySelector("#cnPassword").value = "";
    }, 1000);
  }
}