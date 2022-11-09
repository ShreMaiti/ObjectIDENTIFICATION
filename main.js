img1 = "";
status = "";

function preload(){
img1 = loadImage('dog_cat.jpg');
}

function setup(){
canvas = createCanvas(650, 420);
canvas.center();
objectDetection = ml5.objectDetector('cocossd', ModelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting Object. Please Stand By.";
}

function ModelLoaded(){
    console.log("Model is loaded. Copy.");
    status = true;
    objectDetection.detect(img1, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
    console.log(results);}
    }

function draw(){
image(img1, 0, 0, 650, 420);
fill("#710C04");
text("a very doggy dog", 45, 75);
noFill();
stroke("#710C04");
rect(30, 60, 400, 420);

fill("#1F456E");
text("cat! cool.", 400, 85);
noFill();
stroke("#1F456E");
rect(320, 70, 250, 400);

fill("#C8A951");
text("a bowl filled with... stuff", 200, 320)
noFill();
stroke("#C8A951");
rect(250, 320, 150, 130);
}

