import startDark from "../../assets/startDark.png";
/* import startLight from "../../assets/startLight.png"; */
import workoutDark from "../../assets/workoutDark.png";
/* import workoutLight from "../../assets/workoutLight.png"; */
import profilPictureDark from "../../assets/profilPictureDark.png";
/* import profilPictureLight from "../../assets/profilPictureLight.png"; */

function Navigation() {
  return (
    <div className="bg-black">
      <nav className="flex justify-around space-x-8 p-4">
        <div className="inline">
          <a>
            <img src={startDark} alt="Startseite" />
          </a>
        </div>
        <div className="inline">
          <a>
            <img src={workoutDark} alt="Training" />
          </a>
        </div>
        <div className="inline">
          <a>
            <img src={profilPictureDark} alt="Profil" />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
