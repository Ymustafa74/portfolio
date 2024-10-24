let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }