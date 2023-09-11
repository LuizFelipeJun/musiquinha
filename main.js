var canvas;
var video;
var music = "";

function preload() {
     music = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(500, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 500, 600);
}

function playe() {
    music.play();
}