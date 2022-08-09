// ?Auto Splash Function
function goToHome() {
  setTimeout(function () {
    location.href = "./home/market_place.html";
  }, 1000);
}

// ? Go to Login
function goToLogin(from) {
  switch (from) {
    case "register":
      location.href = "../login/login.html";

      break;

    default:
      location.href = "./login/login.html";
      break;
  }
}


// ? Go To Register Page
function goToRegister(from) {
  switch (from) {
    case "login":
      location.href = "../register/register.html";
      break;

    default:
      location.href = "./register/register.html";
      break;
  }
}