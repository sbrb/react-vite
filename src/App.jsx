import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videoDB from "./data/data";

function App() {
  console.log("render App");

  const [videos, setVideos] = useState(videoDB);

  return (
    <div className="App" onClick={() => console.log("App")}>
      <div>
        <button
          onClick={() => {
            setVideos([
              ...videos,
              {
                id: videos.length + 1,
                title: "Demo JS tutorial",
                views: "1M",
                time: "1 month ago",
                channel: "Hi Dost",
                verified: true,
              },
            ]);
          }}
        >
          Add Video
        </button>
      </div>
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

      <Counter></Counter>
    </div>
  );
}

export default App;
