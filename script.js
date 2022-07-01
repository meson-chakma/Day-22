var imageData = ['images/duet1.jpeg','images/duet2.jpeg','images/duet3.jpeg','images/duet4.jpeg'];
var index=0;

function changeImage(){
    var image = document.getElementById('image');
    image.setAttribute('src',imageData[index]);
    index++;
    if(index>=imageData.length){
        index=0;
    }
}
setInterval(changeImage, 2000);
