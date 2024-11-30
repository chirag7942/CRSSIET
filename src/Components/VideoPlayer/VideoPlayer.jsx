import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/college-video.mp4'

//The autoplay attribute is a boolean attribute. When present, the video will automatically start playing.

//The muted attribute is a boolean attribute. When present, it specifies that the audio output of the video should be muted

/*The controls attribute is a boolean attribute.

When present, it specifies that video controls should be displayed.

Video controls should include:

Play
Pause
Seeking
Volume
Fullscreen toggle
Captions/Subtitles (when available)
Track (when available)*/

const VideoPlayer = ({playState,setPlayState}) => {

    const player = useRef(null);

    const closePlayer = (e) => {

        //it means if clicked element is equal to the current element, then close the video

        if(e.target === player.current){
            setPlayState(false);
        }


    }
    
    return (
    <div className={`video-player ${playState? "" : "hide"}`} ref={player} onClick={closePlayer}>
    <video src={video} autoPlay muted controls></video>
      
    </div>
  )
}

export default VideoPlayer
