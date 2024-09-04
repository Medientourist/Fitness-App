import PropTypes from "prop-types";
import { ChartPie } from "@patternfly/react-charts";

const ProgramPieChart = ({ workouts }) => {
  if (!workouts || !Array.isArray(workouts)) {
    return <p>No workout data available</p>;
  }

  const categoryCounts = workouts.reduce((acc, workout) => {
    acc[workout.category] = (acc[workout.category] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.keys(categoryCounts).map((category) => ({
    x: category,
    y: categoryCounts[category],
  }));

  const legendData = Object.keys(categoryCounts).map((category) => ({
    name: `${category}: ${categoryCounts[category]}`,
    symbol: { type: "circle" },
    labels: { fill: "white" },
  }));

  const colors = ["#FFD162", "#FF99C3", "#3EF3E8", "#F5FFA0", "#3A4AE4"];

  return (
    <ChartPie
      constrainToVisibleArea
      data={pieData}
      height={300}
      width={450}
      labels={({ datum }) => `${datum.x}: ${datum.y}`}
      legendData={legendData}
      legendOrientation="vertical"
      legendPosition="right"
      padding={{
        bottom: 20,
        left: 20,
        right: 140,
        top: 20,
      }}
      style={{
        legend: { labels: { fill: "white" } },
      }}
      colorScale={colors}
    />
  );
};

ProgramPieChart.propTypes = {
  workouts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProgramPieChart;
