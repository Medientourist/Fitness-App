import { Link } from "react-router-dom";

import startDark from "../../assets/startDark.png";
/* import startLight from "../../assets/startLight.png"; */
import workoutDark from "../../assets/workoutDark.png";
/* import workoutLight from "../../assets/workoutLight.png"; */
import profilPictureDark from "../../assets/profilPictureDark.png";
/* import profilPictureLight from "../../assets/profilPictureLight.png"; */

function Navigation() {
  return (
    <div className="bg-black fixed w-full bottom-0">
      <nav className="flex justify-around space-x-8 p-4">
        <div className="inline">
          <Link to="/">
            <img src={startDark} alt="Startseite" />
          </Link>
        </div>
        <div className="inline">
          <Link to="/workout">
            <img src={workoutDark} alt="Training" />
          </Link>
        </div>
        <div className="inline">
          <Link to="/profil">
            <img src={profilPictureDark} alt="Profil" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
