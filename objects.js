var playlist = {artist1: song1, artist2: song2}

function updatePlaylist(playlist,artistname,songtitle) {
  return Object.assign({}, playlist, {artistname: songtitle})
}

function updatePlaylist(playlist,artistname,songtitle) {
  delete playlist.artistname; 
}