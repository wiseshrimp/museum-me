var photoBank = [];
var i;

/*
    Randomly chooses photos from the photo bank
    Need to do: Prevent doubles
*/
var randomPhotos = (n, photos) => {
    while (photoBank.length < n) {
        i = Math.floor(photos.length * Math.random());
        photoBank.push(photos[i].url);
    }
    loadMuseum()
}

/* 
    Called within fb.js once all of the photos are loaded
*/
var loadFiles = (photos) => {
    if (photos.length < 50) {
        console.log('museum.me is optimized for Facebook users with over 50 photographs, but we will try our best to cater your experience.');
        randomPhotos(photos.length - 1, photos);
    }
    else randomPhotos(50, photos);
}