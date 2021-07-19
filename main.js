Webcam.set({
    width:450,
    height:350,
    image_format:'png',
    png_quality:90
});

cam = document.getElementById("camera");
Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML = '<img id="captured_img" src=" '+ data_uri +'">';
    });
}

console.log("ml5 version:", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/D9KbK2pYp/model.json', modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}