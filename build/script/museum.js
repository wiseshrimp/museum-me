
/*
    Loops through the photoBank array and calls loadImage and loadFrame
*/

var distance, coordinates;

function loadMuseum (){
    var frontWallPhotos = photoBank.slice(0, 6);
    var leftWallPhotos = photoBank.slice(6, 12);
    var rightWallPhotos = photoBank.slice(12, 18);
    var backWallPhotos = photoBank.slice(18, 26);

    // loadCylinder(photoBank[27])

    // Front wall
    for (var i = 0; i < frontWallPhotos.length; i++){
        loadImage(frontWallPhotos[i], i, "front");
    }

    // Left wall
    for (var i = 0; i < leftWallPhotos.length; i++){
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

}

/*
    TO DO: DO SOMETHING WITH STATUSES
*/
function addWallText(statuses) {
    console.log('statuses: ', statuses);
}