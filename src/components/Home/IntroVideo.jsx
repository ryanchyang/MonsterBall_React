import './IntroVideo.scss';
import introVideo from '../../assets/video/index_vedio.mp4';

const IntroVideo = () => {
  return (
    <>
      <video
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
    </>
  );
};

export default IntroVideo;
