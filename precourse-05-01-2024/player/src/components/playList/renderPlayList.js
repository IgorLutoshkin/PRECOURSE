import { renderPlaylistHeader } from "./header/hederTitle/renderHederPlayListTitle.js";
import { renderListWrapTracks } from "./tracks/renderListTracks.js";

export function renderPlaylist(playerListRender) {
  renderPlaylistHeader(playerListRender.title);
  renderListWrapTracks(playerListRender);
}
