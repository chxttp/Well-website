import React, { useRef} from "react";
import "../styles/VideoPlayer.css";
const VideoPlayer = ({ videoSource, width, height }) => {
  const videoRef = useRef(null);

//   useEffect(() => {
//     // Start playing the video once it's loaded
//     videoRef.current.play();
//   }, []);
    
        
  
  return (
    <div className="video-container">
        
      <video
        ref={videoRef}
        controls // Display controls
      
        
        width={width}
        height={height}
       
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
