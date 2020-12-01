//slideshow
var slider_img = document.querySelector(".slider-img");
var images= ["jones_street.jpg", "bulwara_road.jpg", "fig_street.jpg"];
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
    return slider_img.setAttribute("src", "Images/"+images[index]);
}

<<<<<<< HEAD
=======
//Nav button
// javascript for opening and closing navigation in mobile view
const btn = document.querySelector("#navbutton")
// console.log( btn )
const nav = document.querySelector(".navigation")
// console.log( nav )

// function to open the nav
function onClick() {
  if( nav.classList.contains("open") ) {
    nav.classList.remove("open")
  }
  else {
    nav.classList.add("open")
  }
}

// add a click listener to the button
btn.addEventListener( "click" , onClick )
>>>>>>> 4751219b503db739bfaeffecb4f04c71c8e40c3e
