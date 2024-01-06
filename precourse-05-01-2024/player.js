const playerList = {
  title: "hip-hop hits",
  coverImageUrl: "./img/cover.avif",
  totalInfo: {
    totalTrackCount: 4,
    totalTrackDurationInSec: 733,
  },
  tracks: [
    {
      tracksId: "11",
      trackCoverImageUrl: "eminem.jpg",
      artistName: "Eminem",
      trackTitle: "Rap God",
      trackFileUrl: "eminem_-_rap_god_(muztune.me).mp3",
      trackDurationInSec: 1,
      isHot: true,
    },
    {
      tracksId: "12",
      trackCoverImageUrl: "50cent.jpg",
      artistName: "50cent",
      trackTitle: "In da club",
      trackFileUrl: "50cent_-_in_da_club_(muztune.me).mp3",
      trackDurationInSec: 1,
      isHot: true,
    },
  ],
};

const playListTitleEl = document.createElement("h1");// создаем тег в новой переменной
playListTitleEl.append(playerList.title)// в тег помещаем наш тайтл из объекта плээйлист
document.body.append(playListTitleEl);// добавляем тег с тайтлом в тело боди

const playListCoverEl = document.createElement("img");
playListCoverEl.src = playerList.coverImageUrl;
document.body.append(playListCoverEl);
