const menuBurger = document.querySelector(".burger");
const menu = document.querySelector(".navbar2");
const menuRemove = document.querySelector('.screen');

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

menuRemove.addEventListener('click', () => {
    menuBurger.classList.remove("active");
    menu.classList.remove("active");
} )

    
