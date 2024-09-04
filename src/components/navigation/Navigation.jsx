import { Link, useLocation } from "react-router-dom";

import startDark from "../../assets/startDark.png";
import startLight from "../../assets/startLight.png";
import workoutDark from "../../assets/workoutDark.png";
import workoutLight from "../../assets/workoutLight.png";
import profilDark from "../../assets/profilDark.png";
import profilLight from "../../assets/profilLight.png";

// Generischer Import * import
// Object für Images

function Navigation() {
  const location = useLocation();
  const currentPath = location.pathname;

  const startImage = currentPath === "/" ? startLight : startDark;
  const workoutImage = currentPath === "/workout" ? workoutLight : workoutDark;
  const profilImage = currentPath === "/profil" ? profilLight : profilDark;

  return (
    <div className="bg-black fixed w-full bottom-0">
      <nav className="flex justify-around space-x-8 p-4">
        <div className="inline">
          <Link to="/">
            <img src={startImage} alt="Startseite" />
          </Link>
        </div>
        <div className="inline">
          <Link to="/workout">
            <img src={workoutImage} alt="Training" />
          </Link>
        </div>
        <div className="inline">
          <Link to="/profil">
            <img src={profilImage} alt="Profil" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
