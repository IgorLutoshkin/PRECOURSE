export function renderPlaylistHeader(title) {
  const playListTitleEl = document.createElement("h2");
  playListTitleEl.append(title);
  // console.log('title');
  
  // document.body.append(playListTitleEl);
  return playListTitleEl
}
