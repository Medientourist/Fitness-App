import { Link } from "react-router-dom";
import back from "../../assets/back.png";
import ProgramStartButton from "../program/ProgramStartButton";

function Training() {
  return (
    <div>
      <div className="bg-dark min-h-screen flex flex-col text-center">
        <div className="w-full flex justify-center items-center relative">
          <h1 className="text-base">Titel des Programms</h1>
          <Link to="/programs" className="absolute right-4">
            <img src={back} alt="back" className="w-6 h-6" />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center flex-grow">
          <h2>Tag 1</h2>
          <p>26 Min. • Kraft und Koordination</p>
        </div>
      </div>
    </div>
  );
}

export default Training;
