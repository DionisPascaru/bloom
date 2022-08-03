const publicBlock = document.getElementById('publicId');

document.addEventListener('scroll', () => {
    startAnimation();
});

function startAnimation() {
    let position = publicBlock.offsetTop - publicBlock.offsetHeight;
    let windowPosition = window.scrollY + publicBlock.offsetHeight;
    
    if (windowPosition >= position) {
        publicBlock.classList.add('fade-in');
    }
}

startAnimation();