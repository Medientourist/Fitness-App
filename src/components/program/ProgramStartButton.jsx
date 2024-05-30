import { Link } from "react-router-dom";

function ProgramStartButton() {
  return (
    <div className="sticky bottom-16 flex justify-center w-full">
      <Link
        to="/training"
        className="bg-gradient-light-orange text-black rounded-3xl px-4 py-2"
      >
        Jetzt starten
      </Link>
    </div>
  );
}

export default ProgramStartButton;
