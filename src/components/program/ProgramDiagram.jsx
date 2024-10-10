import PropTypes from "prop-types";
import ProgramPieChart from "./ProgramPieChart";

function ProgramDiagram({ workouts }) {
  return (
    <div className="p-4 bg-dark">
      <p className="mb-4 text-lg font-bold text-white">
        So ist das Programm aufgeteilt:
      </p>
      <div className="mb-8">
        <ProgramPieChart workouts={workouts} />
      </div>
    </div>
  );
}

ProgramDiagram.propTypes = {
  workouts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProgramDiagram;
