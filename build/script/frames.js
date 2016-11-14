var scene = document.querySelector('a-scene');

function loadImage(imageUrl, i, side) {
    var img = new Image();
    img.src = imageUrl;
    var entity = document.createElement("a-entity");

    img.onload = function() {
        var height = img.height / 170;
        var width = img.width / 170;
        
        if (side === "front"){
            var x = [-20, -10, 0, 10, 20];
            var position = x[i] + " 5 -5.45";
        }

        else if (side === "left"){ // 19.45
            var z = [0.45, 10.45, 20.45, 30.45, 40.45];
            position = "-24.9 5 " + z[i];
            entity.setAttribute("rotation", "0 90 0");
        }

        else if (side === "right"){
            var z = [0.45, 10.45, 20.45, 30.45, 40.45];
            position = "24.9 5 " + z[i];
            entity.setAttribute("rotation", "0 -90 0");
        }

        else if (side === "back"){
            var x = [-20, -10, 0, 10, 20];
            position = x[i] + " 5 44.35";
        }

        entity.setAttribute("geometry", {primitive: "box"});
        entity.setAttribute("geometry", "depth", 0.03);
        entity.setAttribute("material", "src", "url(" + imageUrl + ")");

        loadFrames(i, position, height, width, side);
        // addLight(position, side);
        entity.setAttribute("position", position);
        entity.setAttribute("geometry", "height", height);
        entity.setAttribute("geometry", "width", width);
        entity.setAttribute("id", imageUrl);

        scene.appendChild(entity);
        addInteractivity(imageUrl, position, side);
    }
}
// var t;
// function loadCylinder(imageUrl) {
//     var cylinder = document.createElement("a-cylinder");
//     cylinder.setAttribute("id", "cylinder");
//     cylinder.setAttribute('height', '2');
//     cylinder.setAttribute('radius', '0.75');
//     cylinder.setAttribute('position', '3 1 0');
//     var img = new Image();
//     img.src = imageUrl;
//     img.onload = function () {
//         cylinder.setAttribute("src", "url(" + img.src + ")");
//         scene.appendChild(cylinder);
//         t = 0;
//         render();
//         function render() {
//             t += 0.01;
//             requestAnimationFrame(render);
//             cylinder.setAttribute('position', '3 '+ (Math.sin(t * 2) + 1) + ' 0');
//         }
//     }
// }

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
            entity.setAttribute("position", coordinates[0] + " 5 -5.5");
            break;
        case "left":
            entity.setAttribute("position", "-24.95 5 " + coordinates[2]);
            entity.setAttribute("rotation", "0 90 0");
            break;
        case "right":
            entity.setAttribute("position", "24.95 5 " + coordinates[2]);
            entity.setAttribute("rotation", "0 90 0");
            break;
        case "back":
            entity.setAttribute("position", coordinates[0] + " 5 44.40");
    }

    scene.appendChild(entity);
}