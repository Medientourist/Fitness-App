// import ProgramPieChart from "./ProgramPieChart";

/*
  "inline-block bg-medium text-white my-4 py-8 w-3/12 rounded-l-3xl",
  "inline-block bg-gradient-light-orange text-white my-4 py-8 w-3/12 rounded-l-3xl",
  "inline-block bg-gradient-bright-cyan text-white my-4 py-8 w-3/12 rounded-l-3xl",
*/

function ProgramDayOverview() {
  return (
    <div className="p-4 bg-black">
      <div className="flex justify-between align-middle">
        <p className="inline mb-4">21 Tage</p>
        <p className="inline mb-4">Alle anzeigen</p>
      </div>
      <div className="flex">
        <div className="inline-block bg-gradient-light-orange text-white w-3/12 rounded-l-3xl"></div>
        <div className="inline-block bg-medium text-white w-9/12 rounded-r-3xl">
          <div className="p-4">
            <p className="mb-6 text-lg font-bold">Tag 1</p>
            <p className="text-sm">26 Min.</p>
            <p className="text-sm">Beweglichkeit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramDayOverview;
