const menuBurger = document.querySelector(".burger");
const menu = document.querySelector(".navbar2");

menuBurger.addEventListener("click", () =>{
    menuBurger.classList.toggle("active")
    menu.classList.toggle("active")
})

document.querySelectorAll(".navlist").forEach(
    n => n.addEventListener("click", () => {
        menuBurger.classList.remove("active");
        menu.classList.remove("active");
    })
)

    
