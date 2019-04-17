var array = ["../images/gallery/1.jpeg", "../images/gallery/2.jpeg", "../images/gallery/3.jpg", "../images/gallery/4.webp", "../images/gallery/5.jpg", "../images/gallery/6.jpg", "../images/gallery/7.jpg", "../images/gallery/8.jpg", "../images/gallery/9.jpg", "../images/gallery/10.jpg", "../images/gallery/11.jpg", "../images/gallery/12.jpg", "../images/gallery/13.jpg", "../images/gallery/14.jpg", "../images/gallery/15.jpg", "../images/gallery/16.jpg", "../images/gallery/17.jpg", "../images/gallery/18.jpg", "../images/gallery/19.jpg", "../images/gallery/20.webp"];
var slider = document.getElementById('slider');
var body = document.getElementsByTagName('body')[0];
var Button = document.getElementsByClassName('Button')[0];
var previousButt = document.getElementById('previousButt');
var nextButt = document.getElementById('nextButt');
var picture = 0;


window.addEventListener('keyup', keyUp)

function keyUp(e){
  if(e.code == "ArrowLeft"){
    previousButton()
  }else if (e.code == "ArrowRight") {
    nextButton()
  }else {
    return;
  }
}

nextButt.addEventListener('click',nextButton)

previousButt.addEventListener('click', previousButton)

fillSlider()

function fillSlider(){
    slider.style.backgroundImage = "url(" + array[picture] + ")"
}

function nextButton(){
  console.log(picture);
    if (picture > array.length-2) {
      picture = 0;
        slider.style.backgroundImage = "url(" + array[picture] + ")"
      }else {
        picture++;
        slider.style.backgroundImage = "url(" + array[picture] + ")"
}

}

function previousButton(){
  console.log(picture);
  if(picture <= 0){
    picture = array.length - 1;
    slider.style.backgroundImage = "url(" + array[picture] + ")"
  }
    else {
      picture--
      slider.style.backgroundImage = "url(" + array[picture] + ")"

    }
}
