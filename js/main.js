"use strict";

const $overflow = document.querySelector(".overflow");
const $loader = document.querySelector(".loader");

window.addEventListener("load", () => {
    $overflow.classList.remove("active");
    $loader.classList.remove("active");
});

const $wrapper = document.querySelector(".wrapper");
const $menuBtn = document.querySelector(".menu-btn");
const $menuItems = document.querySelectorAll(".menu-item");
const $screens = document.querySelectorAll(".screen");
const $menuBtnLine = document.querySelector(".menu-btn-line");
let isPhone = false;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    isPhone = true;
}

for (let elem of $menuItems) {

    if (isPhone) {
        elem.addEventListener("click", (e) => {

            displayScreen(e.currentTarget.dataset.link);

            setTimeout(() => {
                $menuBtnLine.classList.remove("active");
                $wrapper.classList.remove("active");
            }, 620);

        });
        
        continue;
    }

    elem.addEventListener("click", () => {
        $menuBtnLine.classList.remove("active");
        $wrapper.classList.remove("active");
    });

    elem.addEventListener("mouseenter", (e) => {
        displayScreen(e.currentTarget.dataset.link);
    });

}

$menuBtn.addEventListener("click", () => {
    $wrapper.classList.toggle("active");
    $menuBtnLine.classList.toggle("active");
});

function displayScreen(screen) {

    for (let el of $screens) {
        if (el.dataset.screen === screen) {
            el.style.display = "block";
            el.firstElementChild.classList.add("animate");
            el.children[1].classList.add("animate");
            el.children[2].classList.add("animate");

            setTimeout(() => {
                el.firstElementChild.classList.remove("animate");
                el.children[1].classList.remove("animate");
                el.children[2].classList.remove("animate");
            }, 600);

            continue;
        }
        el.style.display = "none";
        el.firstElementChild.classList.remove("animate");
    };

}

displayScreen("home");

