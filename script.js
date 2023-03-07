let start = document.getElementById("start");
let phone = document.getElementById("phone");
let hero = document.getElementById("hero_page");
let log = document.getElementById("log_in");
let a2 = document.getElementById("a2");
let user = document.getElementById("user");
let login = document.getElementById("login");
let email = document.getElementById("email");
let logo = document.getElementById("logo");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let greet = document.getElementById("greet");
a2.addEventListener("click",hello);
function hello(){
    greet.textContent = user.value;
}
