import "./App.css";
import Video from "./components/Video";
import videos from "./data/data";
import PlayButton from "./components/PlayButton";

function App() {
  return (
    <div className="App" onClick={() => console.log("App")}>
      <div>YouTube</div>
      {videos.map((v) => (
        <Video
          key={v.id}
          title={v.title}
          views={v.views}
          time={v.time}
          channel={v.channel}
          verified={v.verified}
          id={v.id}
        >
          <PlayButton
            onPlay={() => console.log("Playing..", v.title)}
            onPause={() => console.log("Paused..", v.title)}
          >
            {v.title}
          </PlayButton>
        </Video>
      ))}

      <div style={{ clear: "both" }}>
        {/* <PlayButton message="play-msg" onPlay={()=>console.log('Play')} onPause={()=>console.log('Pause')}>Play</PlayButton> */}

        {/* <PlayButton message="pause-msg" onSmash={()=>alert('Playyy')}>Pause</PlayButton> */}
      </div>
    </div>
  );
}

export default App;
