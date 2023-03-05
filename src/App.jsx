import "./App.css";

function App() {
  let name = "React App";
  let className = "App";
  return (
    <div className={className}>
      <Demo />
      {name}
    </div>
  );
}
function Demo() {
  console.log("Demo");
  return <div>Demo</div>;
}

export default App;
