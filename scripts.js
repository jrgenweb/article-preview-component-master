const shareBtn = document.querySelector('.share');
const socialWindow = document.querySelector('.social');


shareBtn.addEventListener('click', openSocialFrame);



function openSocialFrame() {
    socialWindow.classList.toggle('active');
}

