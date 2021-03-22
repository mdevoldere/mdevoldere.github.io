const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");

menuToggle.addEventListener("click", function(){
    if(menu.classList.contains("menu-active")) {
        menu.classList.remove("menu-active");
        menuToggle.innerHTML = '<i class="fa fa-bars"></i>';
    }
    else {
        menu.classList.add("menu-active");
        menuToggle.innerHTML = '<i class="fa fa-close"></i>';
    }
});