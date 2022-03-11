const images=[
    'img/pic 1.jpg',
    'img/pic 2.jpg',
    'img/pic 3.jpg',
    'img/pic 4.jpg',
    'img/pic 5.jpg',
    'img/pic 6.jpg',
    'img/pic 7.jpg',
    'img/pic 8.jpg',
    'img/pic 9.png',
    'img/pic 10.jpg',
]
let imgIndex = 0;
const imgElement = document.getElementById('slider-img')
setInterval(()=>{
  if(imgIndex >= images.length){
    imgIndex= 0;

  }
  const imgUrl = images[imgIndex];
//   console.log(imgUrl)
imgElement.setAttribute('src',imgUrl)
  imgIndex++;
},1000)