
var scene = document.querySelector('a-scene');

/*
    Loops through the photoBank array and calls loadImage and loadFrame
*/

var distance, coordinates;

function loadMuseum (){

    // Back wall photos
    var frontWallPhotos = photoBank.slice(0, 6);
    var leftWallPhotos = photoBank.slice(6, 12);
    var rightWallPhotos = photoBank.slice(12, 18);
    var backWallPhotos = photoBank.slice(18, 26);

    // Front wall
    for (var i = 0; i < frontWallPhotos.length; i++){
        distance = (i === 0) ? -18 : distance;
        console.log(distance);
        if (distance < 18) loadImage(frontWallPhotos[i], i, "front");
    }

    // Left wall
    for (var i = 0; i < leftWallPhotos.length; i++){
        distance = (i === 0) ? -18 : distance;
        loadImage(leftWallPhotos[i], i, "left");
    }   

    // Right wall
    for (var i = 0; i < rightWallPhotos.length; i++){
        loadImage(rightWallPhotos[i], i, "right");
    }

    // Back wall
    for (var i = 0; i < backWallPhotos.length; i++){
        loadImage(backWallPhotos[i], i, "back");
    }

    buildWalls();
}

function loadImage (imageUrl, i, side){
    var img = new Image();
    img.src = imageUrl;

    var entity = document.createElement("a-entity");
        entity.setAttribute("geometry", {primitive: "box"});
        entity.setAttribute("geometry", "depth", 0.03);
        entity.setAttribute("material", "src", "url(" + imageUrl + ")");    

    // else if (side === "left") {
    //     entity.setAttribute("rotation", "0 90 0");
    //     // var z = (i < 4) ? (i * 7) : (i * -7);
    //     entity.setAttribute("position", "-20 4 " + i * -7);
    // }

    img.onload = function() {
        var height = img.height / 170;
        var width = img.width / 170;
        
        if (side === "front"){
            var x = [-20, -10, 0, 10, 20];
            var position = x[i] + " 4 -5.45";
            loadFrames(i, position, height, width, side);
        }

        else if (side === "left"){ // 19.45
            var z = [0.45, 10.45, 20.45, 30.45, 40.45];
            position = "-24.9 4 " + z[i];
            entity.setAttribute("rotation", "0 90 0");
            loadFrames(i, position, height, width, side);
        }

        entity.setAttribute("position", position);
        entity.setAttribute("geometry", "height", height);
        entity.setAttribute("geometry", "width", width);

        scene.appendChild(entity);
    }
}

function loadFrames(i, position, height, width, side){
    coordinates = position.split(' ');
    var frameTextures = ['frame-1.jpg', 'frame-2.jpg', 'frame-3.jpg', 'frame-4.jpg', 'frame-5.jpg', 'frame-6.png', 'frame-7.jpg'];
    var j = Math.floor(Math.random() * 7);
    var entity = document.createElement("a-entity");
        entity.setAttribute("geometry", {primitive: "box"});
        entity.setAttribute("material", "src", "url(" + "/textures/" + frameTextures[j] + ")");
        entity.setAttribute("geometry", "height", height + 0.5);
        entity.setAttribute("geometry", "width", width + 0.5);
        entity.setAttribute("geometry", "depth", 0.1);

    switch (side){
        case "front":
            entity.setAttribute("position", coordinates[0] + " 4 -5.5");
            break;
        case "left":
            entity.setAttribute("position", "-24.95 4 " + coordinates[2]);
            entity.setAttribute("rotation", "0 90 0");
            break;
    }

    scene.appendChild(entity);
}

function buildWalls(){
    // BACK WALL:
    var backWall = document.createElement("a-entity");
        backWall.setAttribute("geometry", {primitive: "plane"});
        backWall.setAttribute("geometry", "height", 30);
        backWall.setAttribute("geometry", "width", 50);
        backWall.setAttribute("position", "0 0 -5.55");

    scene.appendChild(backWall);

    // LEFT WALL:
    var leftWall = document.createElement("a-entity");
        leftWall.setAttribute("geometry", {primitive: "plane"});
        leftWall.setAttribute("geometry", "height", 30);
        leftWall.setAttribute("geometry", "width", 50);
        leftWall.setAttribute("rotation", "0 90 0");
        leftWall.setAttribute("position", "-25, 0, 19.45")
    
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