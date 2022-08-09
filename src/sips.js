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


// * Go to Customers Register
function goToCustomersLogin() {
  location.href = "customers_login.html";
}

// * Go to Market 
function goToMarketPlace() {
  location.href = "../home/market_place.html";
}

// * Go to Admin Register
function goToAdminLogin() {
  location.href = "admin_login.html";
}

// * Go to Customers Register
function goToCustomersRegister() {
  location.href = "customer_register.html";
}

// * Go to Admin Register
function goToAdminRegister() {
  location.href = "admin_register.html";
}

// ? GO to Splash Screen
function goToSplash(from) {
  switch (from) {
    case "index":
      location.href = "splash.html";
      break;

    default:
      location.href = "../splash.html";
      break;
  }
}