prediction1="";
prediction2="";

Webcam.set({
    width:400,
    height:400,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function snap()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-ixuKbFAz/model.json' ,modelLoaded);
function modelLoaded()
{
    console.log("model Loaded");
}
function speak()
{
    var synth=window.speechSynthesis;
    speakdata1="first prediction is " +prediction1;
    speakdata2=" second prediction is " +prediction2;
    var uttar=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(uttar);
}