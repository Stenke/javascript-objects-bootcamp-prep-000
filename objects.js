var playlist = {aristName: "song"}
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle})
}
function removeFromPlaylist(playlist, artistName) {
  var playlist = { artistName: ""}; 
  delete playlist.artistName
  playlist;
}