

const shareBtn = document.querySelector('.share');
const socialWindow = document.querySelector('.social');



shareBtn.addEventListener('click', function () {

    socialWindow.classList.toggle('active');
});

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}