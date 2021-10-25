AnsText = "";
NoseX = 0;
NoseY = 0;
leftWrist = 0;
rightWrist = 0;
difference = 0;

function preload() {

}

function setup(){
video = createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(550, 500);
canvas.position(560, 150);

poseNet = ml5.poseNet(video, modelloaded);
poseNet.on('pose', gotposes);
}

function draw(){
    background("grey");

textSize(difference);
text(AnsText, NoseX, NoseY);
}

function modelloaded(){
    console.log("model loaded");
}

function gotposes(results){

if(results.length > 0){
    console.log(results);
    NoseX = results[0].pose.nose.x;
    NoseY = results[0].pose.nose.y;
    leftWrist = results[0].pose.leftWrist.x;
    rightWrist = results[0].pose.rightWrist.x;
    difference = floor(leftWrist - rightWrist);
}

}

function submit(){
    AnsText = document.getElementById("input").value;
}