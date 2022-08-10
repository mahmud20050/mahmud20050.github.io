let dinozavr = document.querySelector('.dinozavr');
let kaktus = document.querySelector('.kaktus');


function jump() {
    if (dinozavr.classList != 'jump') {
        dinozavr.classList.add("jump");
    }
    setTimeout(() => {
        dinozavr.classList.remove("jump")
    }, 500)
}

let tekshiruv = setInterval(function () {
    let dinozavrTop = parseInt(window.getComputedStyle(dinozavr).getPropertyValue('top'));
    let kaktusLeft = parseInt(window.getComputedStyle(kaktus).getPropertyValue('left'));


    if (kaktusLeft < 20 && kaktusLeft > 0 && dinozavrTop >= 130) {
        dinozavr.style.animation = "none";
        kaktus.style.animation = "none";
        kaktus.style.display = "none";
        alert("siz yutqazdingiz")
    }

}, 10)