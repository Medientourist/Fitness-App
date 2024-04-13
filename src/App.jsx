import Navigation from "./components/navigation/Navigation";

import startPicture from "./assets/startPicture.png";
import StartToday from "./components/start/StartToday";

function App() {
  return (
    <div className="bg-dark pt-4">
      <h1 className="font-standard font-bold text-4xl px-4 pb-4">
        Hallo Name!
      </h1>
      <img className="px-4 pb-4 m-auto" src={startPicture}></img>
      <StartToday />
      <Navigation />
    </div>
  );
}

export default App;
