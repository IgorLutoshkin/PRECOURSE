import { renderPlaylist } from "./components/playList/renderPlayList.js";

export function renderPlaylists(inputPlaylist) {
  for (let i = 0; i < inputPlaylist.length; i++) {
    renderPlaylist(inputPlaylist[i]);
  }
}
