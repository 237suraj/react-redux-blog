import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { title: "A", duration: "4:05" },
    { title: "B", duration: "2:30" }
  ];
};

const selectSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectSongReducer
});
