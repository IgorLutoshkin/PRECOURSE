const playerList = {
  title: "hip-hop hits",
  coverImageUrl: "./img/Rectangle 101.png",
  totalInfo: {
    totalTrackCount: 4,
    totalTrackDurationInSec: 733,
  },
  tracks: [
    {
      tracksId: "11",
      trackCoverImageUrl: "./img/Eminem.jpeg",
      artistName: "Eminem",
      trackTitle: "Rap God",
      trackFileUrl: "./audio/Eminem - Rap God.mp3",
      trackDurationInSec: 1,
      isHot: true,
    },
    {
      tracksId: "12",
      trackCoverImageUrl: "./img/50Cent.jpg",
      artistName: "50cent",
      trackTitle: "In da club",
      trackFileUrl: "./audio/50 Cent - In Da Club.mp3",
      trackDurationInSec: 1,
      isHot: true,
    },
  ],
};

// render
renderPlaylist(playerList);
function renderPlaylist(playerListRender) {
  // title
  renderPlaylistHeader(playerListRender); /* func in  renderPlaylist*/

  /* const playListTitleEl = document.createElement("h1"); // создаем тег в новой переменной
  playListTitleEl.append(playerList.title); // в тег помещаем наш тайтл из объекта плээйлист
  document.body.append(playListTitleEl); // добавляем тег с тайтлом в тело боди
 */
  // img in the playlist
  const playListCoverEl = document.createElement("img");
  playListCoverEl.src = playerList.coverImageUrl;
  document.body.append(playListCoverEl);

  //создать список

  const playerListWrapTracks = document.createElement("ul");
  document.body.append(playerListWrapTracks);

  //add track1
  // renderTrack(playerListRender.tracks[0], playerListWrapTracks);

  /* автоматизируем добавлени трека в плейлист */

  playerListRender.tracks.map((el) => renderTrack(el, playerListWrapTracks));
}
/*  const trackWrap1 = document.createElement("li"); // в нее сложим картинку и трек
  playerListWrapTracks.append(trackWrap1);

  const titleTracks1 = document.createElement("h5");
  titleTracks1.innerText =
    playerList.tracks[0].artistName + " - " + playerList.tracks[0].trackTitle;
  trackWrap1.append(titleTracks1);

  const playerListTrackCoverImageUrl = document.createElement("img");
  playerListTrackCoverImageUrl.src = playerList.tracks[0].trackCoverImageUrl;
  playerListTrackCoverImageUrl.width = "50";
  trackWrap1.append(playerListTrackCoverImageUrl); //добавляем элемент в div без document пишется

  const playerListTrackFileWrap = document.createElement("audio");
  playerListTrackFileWrap.controls = true;
  playerListTrackFileWrap.src = playerList.tracks[0].trackFileUrl;
  trackWrap1.append(playerListTrackFileWrap); */

//add track2

/*   const trackWrap2 = document.createElement("li"); // в нее сложим картинку и трек
  playerListWrapTracks.append(trackWrap2);

  const titleTracks2 = document.createElement("h5");
  titleTracks2.innerText =
    playerList.tracks[1].artistName + " - " + playerList.tracks[1].trackTitle;
  trackWrap2.append(titleTracks2);

  const playerListTrackCoverImageUrl2 = document.createElement("img");
  playerListTrackCoverImageUrl2.src = playerList.tracks[1].trackCoverImageUrl;
  playerListTrackCoverImageUrl2.width = "50";
  trackWrap2.append(playerListTrackCoverImageUrl2); //добавляем элемент в div без document пишется

  const playerListTrackFileWrap2 = document.createElement("audio");
  playerListTrackFileWrap2.controls = true;
  playerListTrackFileWrap2.src = playerList.tracks[1].trackFileUrl;
  trackWrap2.append(playerListTrackFileWrap2);
} */

/* 
    renderPlaylistHeader(playlistForRendering);
    renderTrack(playlistForRendering.tracks[0]);
    renderTrack(playlistForRendering.tracks[1]); */

function renderPlaylistHeader(inputPlaylistForRendering) {
  // здесь логика отрисовки шапки "входного" плейлиста
  const playListTitleEl = document.createElement("h1"); // создаем тег в новой переменной
  playListTitleEl.append(inputPlaylistForRendering.title); // в тег помещаем наш тайтл из объекта плээйлист
  document.body.append(playListTitleEl); // добавляем тег с тайтлом в тело боди
}

function renderTrack(inputTrackForRendering, listWrap) {
  //listWrap этот параметр для того чтобы наш код с треком добавился посредством этого параметра в документ
  // inputTrackForRendering параметр в котоый мы положим далее как аргумент параметр родительской функции и элемент с индексом
  // здесь логика отрисовки "входного" трека
  const trackWrap = document.createElement("li"); // в нее сложим картинку и трек
  listWrap.append(trackWrap);

  const titleTracks = document.createElement("h5");
  titleTracks.innerText = `${inputTrackForRendering.artistName} - ${inputTrackForRendering.trackTitle}`;
  trackWrap.append(titleTracks);

  const playerListTrackCoverImageUrl = document.createElement("img");
  playerListTrackCoverImageUrl.src = inputTrackForRendering.trackCoverImageUrl;
  playerListTrackCoverImageUrl.width = "50";
  trackWrap.append(playerListTrackCoverImageUrl); //добавляем элемент в div без document пишется

  const playerListTrackFileWrap = document.createElement("audio");
  playerListTrackFileWrap.controls = true;
  playerListTrackFileWrap.src = inputTrackForRendering.trackFileUrl;
  trackWrap.append(playerListTrackFileWrap);
}
