const MenuActive = document.querySelector(".header-block")

document.getElementById("menu").addEventListener("click", () => {
    MenuActive.classList.add("active")
    document.body.style.overflow = "hidden"
})

document.getElementById("close").addEventListener("click", () => {
    MenuActive.classList.remove("active")
    document.body.style.overflow = "auto"
})

