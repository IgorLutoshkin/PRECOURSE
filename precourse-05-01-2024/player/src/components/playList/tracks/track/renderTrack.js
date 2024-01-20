import { coverImageArtistTrack } from "./trackImg/renderImgArtist.js";
import { inputRenderTrackName } from "./trackName/renderTrackName.js";
import { inputRenderAudioFile } from "./trackFile/renderAudioFile.js";

export function renderTrack(trackElement, listWrap) {
  const trackWrap = document.createElement("li");
  listWrap.append(trackWrap);

  let arrFunction = [
    coverImageArtistTrack,
    inputRenderTrackName,
    inputRenderAudioFile,
  ];
  arrFunction.map((el) => el(trackElement, trackWrap));
}
