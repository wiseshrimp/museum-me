
var scene = document.querySelector('a-scene');

/*
    Loops through the photoBank array and calls loadImage and loadFrame
*/
function loadMuseum (){
    // Right side of camera
    for (var i = 1; i < 25; i++){
        loadImage(photoBank[i], i);
    }

    // Left side of camera
    for (var i = -25; i < 1; i++){
        loadImage(photoBank[i + 49], i)
    }

    buildWalls();
}

function loadImage (imageUrl, i){
    var img = new Image();
    img.src = imageUrl;

    var entity = document.createElement("a-entity");
        entity.setAttribute("geometry", {primitive: "box"});

    img.onload = function() {
        entity.setAttribute("material", "src", "url(" + imageUrl + ")");
        var height = img.height;
        var width = img.width;
            entity.setAttribute("geometry", "height", height / 170);
            entity.setAttribute("geometry", "width", width / 170);
            entity.setAttribute("geometry", "depth", 0.03);
            entity.setAttribute("position", i * 7 + " 4 -5"); // position: x y z

        scene.appendChild(entity);

        loadFrames(i, height, width);
    }
}

function loadFrames(i, height, width){
    var frameTextures = ['frame-1.jpg', 'frame-2.jpg', 'frame-3.jpg', 'frame-4.jpg', 'frame-5.jpg', 'frame-6.png', 'frame-7.jpg'];
    var j = Math.floor(Math.random() * 7);
    var entity = document.createElement("a-entity");
        entity.setAttribute("geometry", {primitive: "box"});
        entity.setAttribute("material", "src", "url(" + "/textures/" + frameTextures[j] + ")");
        entity.setAttribute("geometry", "height", height / 170 + 0.5);
        entity.setAttribute("geometry", "width", width / 170 + 0.5);
        entity.setAttribute("geometry", "depth", 0.03);
        entity.setAttribute("position", i * 7 + " 4 -5.015"); // position: x y z

    scene.appendChild(entity);
}

function buildWalls(){
    // BACK WALL:
    var backWall = document.createElement("a-entity");
        backWall.setAttribute("geometry", {primitive: "plane"});
        backWall.setAttribute("geometry", "height", 60);
        backWall.setAttribute("geometry", "width", 100);
        backWall.setAttribute("position", "0 0 -5.55");

    scene.appendChild(backWall);

    var leftWall = document.createElement("a-entity");
        leftWall.setAttribute("geometry", {primitive: "plane"});
        leftWall.setAttribute("geometry", "height", 60);
        leftWall.setAttribute("geometry", "width", 100);
        leftWall.setAttribute("rotation", "0 90 0");
        leftWall.setAttribute("position", "-50, 0, 0")
    
    scene.appendChild(leftWall);
}

/*
    TO DO: DO SOMETHING WITH STATUSES
*/
function addWallText(statuses) {
    console.log('statuses: ', statuses);
}

function addLight(position) {
    var light = document.createElement("a-light");
        light.setAttribute("type", "point");
        light.setAttribute("position", position);

    scene.appendChild(light);
}