const shareBtn = document.querySelector('.share');
const socialWindow = document.querySelector('.social');
shareBtn.addEventListener('click', function () {

    socialWindow.classList.toggle('active');
});

