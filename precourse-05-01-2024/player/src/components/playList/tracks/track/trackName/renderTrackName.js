export function inputRenderTrackName(trackName, trackWrap) {
  const titleTracks = document.createElement("h5");
  titleTracks.innerText = `${trackName.artistName} - ${trackName.trackTitle}`;
  trackWrap.append(titleTracks);
}
