var scene = document.querySelector('a-scene');

function loadMuseum (){
    for (var i = 1; i < 25; i++){
        loadImage(photoBank[i], i);
    }

    for (var i = -25; i < 1; i++){
        loadImage(photoBank[i + 50], i)
    }
    photoBank.forEach((photo, i) => {
        loadImage(photoBank[i], i);
    })
}

function loadImage (imageUrl, i) {
    var img = new Image();
    img.src = imageUrl;

    var pictureCanvas = document.createElement("a-image");
    pictureCanvas.setAttribute("src", imageUrl);

    img.onload = function() {
        var height = img.height;
        var width = img.width;
        pictureCanvas.setAttribute("height", height / 170);
        pictureCanvas.setAttribute("width", height / 170);
        pictureCanvas.setAttribute("position", i * 5 + " 2 -5");
        scene.appendChild(pictureCanvas);
    }
}