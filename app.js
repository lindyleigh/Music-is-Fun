var itunes = {
    getMusicByArtist: function(artist, cb) {
      
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      
      $('#get-music-button').text('LOADING....');
      
      return $.getJSON(apiUrl).then(function(response){
        var songList = response.results.map(function (song) {
                  return {
                      title: song.trackName,
                      albumArt: song.artworkUrl60,
                      artist: song.artistName,
                      collection: song.collectionName,
                      price: song.collectionPrice,
                      preview: song.previewUrl
                    };
                })
        $('#get-music-button').text('GET MUSIC');
        return songList;
      })
    }
}

function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}



function drawSongs(songList){
   console.log(songList);
   var songs = "";
   var listOfSongs = document.getElementById('song-list');
  for (i=0; i<songList.length; i++){
  var currentSong = songList[i];
 songs += "<li class='list-group-item'>" +"<h3>"+currentSong.title+"</h3>" + "<img src='"+currentSong.albumArt+"'/>" + "<h5>"+currentSong.artist+"</h5>" + "<h5>"+currentSong.collection+"</h5>" + "<h5>"+"$"+currentSong.price+"</h5>" + "<audio controls src='"+currentSong.preview+"'/>" +"</li>";
  
  }
  
  listOfSongs.innerHTML = songs; 
}

document.addEventListener('play', function(e){
   var audios = document.getElementsByTagName('audio');
   for(var i = 0, len = audios.length; i < len;i++){
       if(audios[i] != e.target){
           audios[i].pause();
       }
   }
}, true);

