import { forwardRef } from 'react';
import './IntroVideo.scss';
import introVideo from '../../assets/video/index_vedio.mp4';

const IntroVideo = forwardRef((_, ref) => {
  return (
    <div id="video">
      <video
        ref={ref}
        className="introVideo"
        width="100%"
        height="auto"
        controls="controls"
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
        playsInline=""
      >
        <source src={introVideo} type="video/mp4" />
      </video>
    </div>
  );
});

export default IntroVideo;
