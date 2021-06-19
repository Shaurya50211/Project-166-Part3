noseX = 0;
noseY = 0;

function preload() {
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    video.size(300, 300);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet loaded successfuly! 🎉");
}

function takeSnapshot() {
    save("myImage.png");
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, noseX, noseY, 80, 40)
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("Nose X Position is " + results[0].pose.nose.x);
        console.log("Nose Y Position is " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x-40;
        noseY = results[0].pose.nose.y;
    }

}