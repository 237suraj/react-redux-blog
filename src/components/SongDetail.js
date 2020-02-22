import React from "react";
import { connect } from "react-redux";

const showDetail = props => {
  if (props.song) {
    return (
      <div>
        <div>Title : {props.song && props.song.title}</div>
        <div>Duration : {props.song && props.song.duration}</div>
      </div>
    );
  }
};
const SongDetail = props => {
  return (
    <div>
      <h3 className="ui header">Song Detail</h3>
      {showDetail(props)}
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
