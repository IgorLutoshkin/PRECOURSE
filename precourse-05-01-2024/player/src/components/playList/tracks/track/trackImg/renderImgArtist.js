export function coverImageArtistTrack(coverArtist, trackWrap) {
  const playerListTrackCoverImageUrl = document.createElement("img");
  playerListTrackCoverImageUrl.src = coverArtist.trackCoverImageUrl;
  playerListTrackCoverImageUrl.width = "50";
  trackWrap.append(playerListTrackCoverImageUrl);
}