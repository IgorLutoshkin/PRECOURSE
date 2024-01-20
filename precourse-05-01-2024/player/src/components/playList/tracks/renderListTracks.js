import { renderTrack } from "./track/renderTrack.js";

export function renderListWrapTracks(track) {
  const playerListWrapTracks = document.createElement("ul");
  playerListWrapTracks.className = "wrap";

  const coverPlayer = document.createElement("li");
  playerListWrapTracks.append(coverPlayer);

  const playListCoverEl = document.createElement("img");
  playListCoverEl.className = "cover_image";
  playListCoverEl.src = track.coverImageUrl;
  coverPlayer.append(playListCoverEl);

  track.tracks.map((el) => renderTrack(el, playerListWrapTracks));
  document.body.append(playerListWrapTracks);
}
