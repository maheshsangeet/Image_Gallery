const imgs = document.querySelectorAll('.img');
const largeImg = document.querySelector('#largeImg');

imgs.forEach((img)=>{
    img.addEventListener('click',selectedImage)
})

function selectedImage(e) {
    let previousImg = document.querySelector('#selected');
    let currentImg = e.target;

    previousImg.id = '';
    largeImg.src = e.target.src;
    currentImg.id = 'selected';
}