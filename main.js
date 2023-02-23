starboy_song = "starboy.mp3";
coming_song = "coming.mp3";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    loadSound("starboy.mp3");
    loadSound("coming.mp3");

}

function setup(){
    canvas = createCanvas(600, 550);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function draw(){
    image(video, 0, 0, 600, 550);

}

