export function renderCoverImageUrl(data) {
  const playListCoverEl = document.createElement("img");
  playListCoverEl.className = "cover_image";
  playListCoverEl.src = data;
  // console.log('img');
  
  return playListCoverEl;
}
