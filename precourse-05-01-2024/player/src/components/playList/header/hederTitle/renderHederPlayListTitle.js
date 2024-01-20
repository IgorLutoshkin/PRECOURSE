export function renderPlaylistHeader(titlePlayList) {
  const playListTitleEl = document.createElement("h1");
  playListTitleEl.append(titlePlayList);
  document.body.append(playListTitleEl);
}
