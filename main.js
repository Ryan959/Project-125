rightWrist = 0;
leftWrist = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(400,400)
    video.position(100, 100)

    canvas = createCanvas(400,400);
    canvas.position(700, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose)
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);

        rightWrist = results[0].pose.rightWrist.x;
        leftWrist = results[0].pose.leftWrist.x;
        console.log("rightWrist = "+rightWrist+" leftWrist = "+leftWrist);

        difference = floor(leftWrist - rightWrist)
    }
}

function modelLoaded(){
    console.log("PoseNet has initialized")
}

function draw(){
    background('#808080');
    text('Ryan',50,250)
    fill('#ffffff')
    textSize(difference)
    
}