import "./App.css";
import Video from "./components/Video";
import videos from "./data/data";
function App() {
  return (
    <div className="App">
      <h2>Youtube</h2>
      {videos.map((v) => (
        <Video
          key={v.id}
          title={v.title}
          views={v.views}
          time={v.time}
          channel={v.channel}
          verified={v.verified}
          id={v.id}
        ></Video>
      ))}
    </div>
  );
}

export default App;
