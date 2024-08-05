import { Link } from "react-router-dom";
import Return from "../../assets/return.png";
export default function TrainingBack({ onClick, back, programId, workoutId, day, style }) {

  return (
    <div className="inline w-1/4">
      {back ? (
        <Link className="inline-block"
          to={`/program/${programId}?workoutId=${encodeURIComponent(
            workoutId
          )}&day=${encodeURIComponent(day)}&style=${encodeURIComponent(style)}`}
        >
          <img src={Return} alt="back" className="w-4 h-10" />
        </Link>
      ) : (
        <button className="" onClick={onClick}>
          <img src={Return} alt="back" className="w-4 h-10" />
        </button>
      )}
    </div>
  );
}
