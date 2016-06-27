function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}



function drawSongs(songList){
   console.log(songList);
  for (i=0; i<songList.length; i++){
  var currentSong = songList[i];
  document.getElementById('song-list').innerHTML += "<li class='list-group-item'>" +"<h3>"+currentSong.title+"</h3>" + "<img src='"+currentSong.albumArt+"'/>" + "<h5>"+currentSong.artist+"</h5>" + "<h5>"+currentSong.collection+"</h5>" + "<h5>"+currentSong.price+"</h5>" + "<audio controls src='"+currentSong.preview+"'/>" +"</li>";
  }
}

