import ProgramPieChart from "./ProgramPieChart";

function ProgramDiagram() {
  return (
    <div className="p-4 bg-black">
      <p className="mb-4">So ist das Program aufgeteilt:</p>
      <div className="flex">
        <div>
          <ProgramPieChart />
        </div>
      </div>
    </div>
  );
}

export default ProgramDiagram;
