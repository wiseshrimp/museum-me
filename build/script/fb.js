function makeFacebookPhotoURL( id, accessToken ) {
  return 'https://graph.facebook.com/' + id + '/picture?access_token=' + accessToken;
}

function login( callback ) {
  FB.login(function(response) {
    if (response.authResponse) {
      if (callback) {
        callback(response);
      }
    } else {
      console.log('User cancelled login or did not fully authorize.');
    }
  },{scope: 'user_photos'} );
}

function getAlbums( callback ) {
  FB.api(
      '/me/albums',
      {fields: 'id,cover_photo'},
      function(albumResponse) {
        //console.log( ' got albums ' );
        if (callback) {
          callback(albumResponse);
        }
      }
    );
}

function getPhotosForAlbumId( albumId, callback ) {
  FB.api(
      '/'+albumId+'/photos',
      {fields: 'id'},
      function(albumPhotosResponse) {
        //console.log( ' got photos for album ' + albumId );
        if (callback) {
          callback( albumId, albumPhotosResponse );
        }
      }
    );
}

function getLikesForPhotoId( photoId, callback ) {
  FB.api(
      '/'+albumId+'/photos/'+photoId+'/likes',
      {},
      function(photoLikesResponse) {
        if (callback) {
          callback( photoId, photoLikesResponse );
        }
      }
    );
}

function getPhotos(callback) {
  var allPhotos = [];
  var accessToken = '';
  login(function(loginResponse) {
      accessToken = loginResponse.authResponse.accessToken || '';
      getAlbums(function(albumResponse) {
          var i, album, deferreds = {}, listOfDeferreds = [];
          for (i = 0; i < albumResponse.data.length; i++) {
            album = albumResponse.data[i];
            deferreds[album.id] = $.Deferred();
            listOfDeferreds.push( deferreds[album.id] );
            getPhotosForAlbumId( album.id, function( albumId, albumPhotosResponse ) {
                var i, facebookPhoto;
                for (i = 0; i < albumPhotosResponse.data.length; i++) {
                  facebookPhoto = albumPhotosResponse.data[i];
                  allPhotos.push({
                    'id'	:	facebookPhoto.id,
                    'added'	:	facebookPhoto.created_time,
                    'url'	:	makeFacebookPhotoURL( facebookPhoto.id, accessToken )
                  });
                }
                deferreds[albumId].resolve();
              });
          }
          $.when.apply($, listOfDeferreds ).then( function() {
            if (callback) {
              callback( allPhotos );
            }
          }, function( error ) {
            if (callback) {
              callback( allPhotos, error );
            }
          });
        });
    });
}

var docReady = $.Deferred();
var facebookReady = $.Deferred();
$(document).ready(docReady.resolve);
window.fbAsyncInit = function() {
  FB.init({
    appId      : '353379195010567',
    status     : true,
    cookie     : true,
    xfbml      : true
  });
  facebookReady.resolve();
};
$.when(docReady, facebookReady).then(function() {
  if (typeof getPhotos !== 'undefined') {
    getPhotos( function( photos ) {
      console.log( photos );
        loadFiles(photos);
    });
  }
});
// call facebook script
(function(d){
  var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
  js = d.createElement('script'); js.id = id; js.async = true;
  js.src = "http://connect.facebook.net/en_US/all.js";
  d.getElementsByTagName('head')[0].appendChild(js);
}(document));