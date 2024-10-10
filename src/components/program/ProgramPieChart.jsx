import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { ChartPie } from "@patternfly/react-charts";

const ProgramPieChart = ({ workouts }) => {
  const [legendConfig, setLegendConfig] = useState({
    orientation: "vertical",
    position: "right",
  });
  const [dimensions, setDimensions] = useState({ width: 450, height: 300 });
  const chartContainerRef = useRef(null);

  const updateLegendConfig = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      setLegendConfig({ orientation: "horizontal", position: "bottom" });
    } else {
      setLegendConfig({ orientation: "vertical", position: "right" });
    }
  };

  const updateChartDimensions = () => {
    const screenWidth = window.innerWidth;

    if (chartContainerRef.current && screenWidth >= 768) {
      const { width } = chartContainerRef.current.getBoundingClientRect();
      const height = width * 0.3;
      setDimensions({ width, height });
    } else {
      setDimensions({ width: 450, height: 300 });
    }
  };

  useEffect(() => {
    updateLegendConfig();
    updateChartDimensions();
    window.addEventListener("resize", updateLegendConfig);
    window.addEventListener("resize", updateChartDimensions);

    return () => {
      window.removeEventListener("resize", updateLegendConfig);
      window.removeEventListener("resize", updateChartDimensions);
    };
  }, []);

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
    labels: { fill: "white", fontSize: 24 },
  }));

  const colors = ["#FFD162", "#FF99C3", "#3EF3E8", "#F5FFA0", "#3A4AE4"];

  return (
    <div ref={chartContainerRef} style={{ width: "100%", height: "auto" }}>
      <ChartPie
        constrainToVisibleArea
        data={pieData}
        height={dimensions.height}
        width={dimensions.width}
        labels={({ datum }) => `${datum.x}: ${datum.y}`}
        legendData={legendData}
        legendOrientation={legendConfig.orientation}
        legendPosition={legendConfig.position}
        legendAllowWrap={true}
        padding={{
          bottom: legendConfig.position === "bottom" ? 120 : 20,
          left: legendConfig.position === "right" ? 20 : 0,
          right: legendConfig.position === "right" ? 240 : 0,
          top: 20,
        }}
        colorScale={colors}
      />
    </div>
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
