const cursor = document.querySelector('.cursor');
const arrowBtn = document.querySelector('#btnScrollDown');
const arrow = document.querySelector('#arrow');
const btnListenPodcast = document.querySelector('#btnListen');
const textBtn = document.querySelector('#btnInner2');


document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});


arrowBtn.onmouseenter = () => {
    cursor.style.transform = 'scale(1.5) translate(-35%, -35%)';
    cursor.style.transition = '0.5s';

}

arrowBtn.onmouseleave = () => {
    cursor.style.transform = '';
    cursor.style.transition = '';
};

btnListenPodcast.onmouseenter = () => {
    btnListenPodcast.style.transform = "scale(1.05)";

}
btnListenPodcast.onmouseleave = () => {
    btnListenPodcast.style.transform = ""
}

textBtn.onmouseenter = () => {
    textBtn.style.transform = "translateY(50px)"
}
