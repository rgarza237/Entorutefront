import React from 'react'
import { Link } from 'react-router-dom'


function Player(props: any) {
  const { songData, albumData } = props

  
  return (
    <div className="player">
      <div className="player_inner">
        <div className="player_inner__middle">
          <input className="empty" />
          <div className="cube">
            <div className="cube_inner">
              <div className="cube_inner__front">
                <div className="bars">
                  <div className="bars_bar"></div>
                  <div className="bars_bar"></div>
                  <div className="bars_bar"></div>
                  <div className="bars_bar"></div>
                  <div className="bars_bar"></div>
                  <div className="bars_bar"></div>
                  <div className="bars_bar"></div>
                  <div className="bars_bar"></div>
                  <div className="bars_bar"></div>
                  <div className="bars_bar"></div>
                </div>
                <div className="details">
                  <div className="details_album" style={{background: `url(${albumData.image})`}}></div>
                  <h2>{songData.singer} - { songData.name }</h2>
                  <h3>{songData.singer}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="player_inner__bottom">
          <audio controls src={`data:audio/ogg;base64,${songData.completeFile}`} />
          <div className="controls">
            <div className="controls_left">
              <button className="btn-main">
                <i className="fa fa-step-backward" aria-hidden="true"></i>
              </button>
            </div> 
            <div className="controls_middle">
              <button className="btn-main">
                {/* <i className="fa fa-play" aria-hidden="true"></i> */}
                <Link to={{
                  pathname: `/album/${albumData['_id']}`
                }}>
                  Songs
                </Link>
              </button>
              <button className="btn-main d-none">
                <i className="fa fa-pause" aria-hidden="true"></i>
              </button>
            </div> 
            <div className="controls_right">
              <button className="btn-main">
                <i className="fa fa-step-forward" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Player