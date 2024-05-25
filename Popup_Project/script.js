'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const openBtn = document.querySelectorAll('.show-modal');
console.log(openBtn)

let closePopup = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

let openPopup = function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

for (let i = 0; i < openBtn.length; i++) {
    openBtn[i].addEventListener('click', openPopup);
    closeBtn.addEventListener('click', closePopup)
    overlay.addEventListener('click', closePopup)
}


// Escape key event
document.addEventListener('keydown', function (event) {
    // console.log("key is Pressed");
    // console.log(event.key)
    if (event.key === "Escape" && !modal.classList.contains('hidden')) {
        closePopup();
    }
})