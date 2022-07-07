import React from "react";
import "./music.css";

export default class Music extends React.Component {
  render() {
    return (
      <div>
        <div className="player">
          <div className="details">
            <div className="now-playing">PLAYING x OF y</div>
            <div className="track-art" />
            <div className="track-name">Track Name</div>
            <div className="track-artist">Track Artist</div>
          </div>
          <div className="buttons">
            <div className="prev-track" onclick="prevTrack()">
              <i className="fa fa-step-backward fa-2x" />
            </div>
            <div className="playpause-track" onclick="playpauseTrack()">
              <i className="fa fa-play-circle fa-5x" />
            </div>
            <div className="next-track" onclick="nextTrack()">
              <i className="fa fa-step-forward fa-2x" />
            </div>
          </div>
          <div className="slider_container">
            <div className="current-time">00:00</div>
            <input
              type="range"
              min={1}
              max={100}
              defaultValue={0}
              className="seek_slider"
              onchange="seekTo()"
            />
            <div className="total-duration">00:00</div>
          </div>
          <div className="slider_container">
            <i className="fa fa-volume-down" />
            <input
              type="range"
              min={1}
              max={100}
              defaultValue={99}
              className="volume_slider"
              onchange="setVolume()"
            />
            <i className="fa fa-volume-up" />
          </div>
        </div>
      </div>
    );
  }
}
