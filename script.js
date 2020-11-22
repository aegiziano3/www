var slider_img = document.querySelector('.slide-img');
var images= ['jones_street.jpg, bulwara_road.jpg, fig_street.jpg'];
var i=0;

function prev(){
    if(i <= 0) i = images.length;
    i--;
    return setImg (i);
}

function next() {
    if(i >= images.length) i = -1;
    i++;
    return setImg (i);
}

function setImg(index){
    return slider_img.setAttribute('src', "Images/"+images[index]);
}