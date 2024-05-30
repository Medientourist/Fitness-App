import ProgramShortDescription from "../components/program/ProgramShortDescription";
import ProgramDiagram from "../components/program/ProgramDiagram";
import ProgramDayOverview from "../components/program/ProgramDayOverview";
import ProgramStartButton from "../components/program/ProgramStartButton";

function Programs() {
  return (
    <div className="bg-dark">
      <ProgramShortDescription />
      <div className="p-4">
        <p>Hinter den Bergen.</p>
      </div>
      <ProgramDiagram />
      <ProgramDayOverview />
      <ProgramStartButton />
    </div>
  );
}

export default Programs;
