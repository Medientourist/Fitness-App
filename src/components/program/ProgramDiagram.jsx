import PropTypes from "prop-types";
import ProgramPieChart from "./ProgramPieChart";

function ProgramDiagram({ workouts }) {
  return (
    <div className="p-4 bg-black">
      <p className="mb-4">So ist das Program aufgeteilt:</p>
      <div className="flex">
        <div>
          <ProgramPieChart workouts={workouts} />
        </div>
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
