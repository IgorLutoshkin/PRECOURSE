import { renderCoverImageUrl } from "../header/hederCover/renderCoverImageUrl.js";
import { renderPlaylistHeader } from "../header/hederTitle/renderHederPlayListTitle.js";
import { renderTrack } from "./track/renderTrack.js";

export function renderListWrapTracks(data) {
  const playerListWrapTracks = document.createElement("ul");
  playerListWrapTracks.className = "wrap";

  /*  */
  const coverPlayer = document.createElement("li");
  playerListWrapTracks.append(coverPlayer);

  coverPlayer.append(renderCoverImageUrl(data.coverImageUrl), renderPlaylistHeader(data.title));

  /*  */
  data.tracks.map((el) => renderTrack(el, playerListWrapTracks));
  document.body.append(playerListWrapTracks);
}
