import Skip from "../../assets/skip.png";
import TrainingFinished from "./TrainingFinished";
export default function TrainingForward({ onClick, end }) {
  return (
    <>
      {end ? (
        <TrainingFinished />
      ) : (
        <div className="inline w-1/4">
          <button className="" onClick={onClick}>
            <img src={Skip} alt="arrow-left" className="w-4 h-10" />
          </button>
        </div>
      )}
    </>
  );
}
