import { Link } from "react-router-dom";
import close from "../../assets/close.png";

function ProgramShortDescription() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-gradient-light-orange px-4">
      <div>
        <h1>Titel des Programms</h1>
      </div>
      <Link to="/workout" className="absolute top-4 right-4">
        <img src={close} alt="back" className="w-6 h-6" />
      </Link>
      <div className="absolute bottom-0 w-full">
        <div className="flex justify-around mb-4">
          <div className="text-center">
            <div className="bg-dark rounded-full h-6 w-6 mx-auto"></div>
            <p>Kraft</p>
          </div>
          <div className="text-center">
            <div className="bg-dark rounded-full h-6 w-6 mx-auto"></div>
            <p>Schwierigkeit</p>
          </div>
          <div className="text-center">
            <div className="bg-dark rounded-full h-6 w-6 mx-auto"></div>
            <p>Woche 6</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramShortDescription;
