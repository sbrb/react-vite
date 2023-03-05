import "./App.css";
import Video from "./components/Video";

function App() {
  let obj = {
    title: "React JS tutorial",
    views: "999K",
    time: "1 year ago",
    channel: "Coder Dost",
  };

  return (
    <div className="App">
      <div>Videos</div>
      {/* first way */}
      <Video {...obj}></Video>
      {/* second way */}
      <Video title="Node JS tutorial" views="100K" time="1 month ago"></Video>
      {/* third way */}
      <Video
        title="Mongo DB tutorial"
        views="1M"
        time="1 month ago"
        channel="Dost"
      ></Video>
    </div>
  );
}

export default App;
