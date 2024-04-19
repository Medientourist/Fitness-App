import Navigation from "../components/navigation/Navigation";

import startPicture from "../assets/startPicture.png";
import StartToday from "../components/start/StartToday";
import LogIn from "../components/user/LogIn";

function Homepage() {
  return (
    <div className="bg-dark pt-4">
      <LogIn initalName="User" />
      <img className="px-4 pb-4 m-auto" src={startPicture}></img>
      <StartToday />
      <Navigation />
    </div>
  );
}

export default Homepage;
