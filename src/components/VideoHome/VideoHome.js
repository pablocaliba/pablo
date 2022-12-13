import "./VideoHome.css";

const VideoHome = () => {
  return (
    <div className="videoHome--container">
      <iframe
        width={"100%"}
        height={"100%"}
        src="https://www.youtube.com/embed/NOlshNulh8E"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoHome;
