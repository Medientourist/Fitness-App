import PropTypes from "prop-types";
import { VictoryPie } from "victory-pie";

const ProgramDiagram = ({ workouts }) => {
  // Check if workouts is defined and is an array
  if (!workouts || !Array.isArray(workouts)) {
    return <p>No workout data available</p>;
  }

  // Count occurrences of each category
  const categoryCounts = workouts.reduce((acc, workout) => {
    acc[workout.category] = (acc[workout.category] || 0) + 1;
    return acc;
  }, {});

  // Transform the counts into a format suitable for VictoryPie
  const pieData = Object.keys(categoryCounts).map((category) => ({
    x: category,
    y: categoryCounts[category],
  }));

  return (
    <div className="flex justify-center items-center p-4">
      <VictoryPie
        data={pieData}
        labels={({ datum }) => `${datum.x}`}
        style={{
          labels: {
            fill: "white",
            fontSize: 10,
            padding: 10,
          },
        }}
        colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
      />
    </div>
  );
};

ProgramDiagram.propTypes = {
  workouts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProgramDiagram;
