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
        innerRadius={50}
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

// import { VictoryPie } from "victory-pie";

// const ProgramPieChart = () => {
//   const myData = [
//     { x: "Group A", y: 300 },
//     { x: "Group B", y: 400 },
//     { x: "Group C", y: 300 },
//     { x: "Group D", y: 300 },
//   ];
//   return (
//     <div className="flex items-center justify-evenly">
//       <div className="w-[43%]">
//         <VictoryPie
//           style={{ labels: { display: "none" } }}
//           padding={{ top: 20, bottom: 20, left: 20, right: 20 }}
//           width={200}
//           height={200}
//           data={myData}
//           colorScale={["#3ef3e8", "#ff99c3", "#3b85e6", "#f5ffa0"]}
//           radius={100}
//         />
//       </div>

//       <div className="mr-5">
//         <div className="flex items-center">
//           <div className="w-4 h-4 bg-[#3ef3e8] rounded-2xl mr-1"></div>
//           <p>Kraftraining</p>
//         </div>
//         <div className="flex items-center">
//           <div className="w-4 h-4 bg-[#3b85e6] rounded-2xl mr-1"></div>
//           <p>Koordination</p>
//         </div>

//         <div className="flex items-center">
//           <div className="w-4 h-4 bg-[#ff99c3] rounded-2xl mr-1"></div>
//           <p>Cardio</p>
//         </div>

//         <div className="flex items-center">
//           <div className="w-4 h-4 bg-[#f5ffa0] rounded-2xl mr-1"></div>
//           <p>Beweglichkeit</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProgramPieChart;
