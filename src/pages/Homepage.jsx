import Navigation from "../components/navigation/Navigation";
import startPicture from "../assets/startPicture.png";
import StartToday from "../components/start/StartToday";

//  import CreateEntries from "../components/workoutCreator/GeneratorSite";

function Homepage() {
  return (
    <div className="min-h-screen bg-dark pt-4">
      <h1 className=" px-4 pb-4">Welcome User</h1>
      <img className="p-4 m-auto" src={startPicture}></img>
      <StartToday />
      {/* <CreateEntries> */}
      <Navigation />
    </div>
  );
}

export default Homepage;
