import { useParams, useLocation } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import ProgramShortDescription from "../components/program/ProgramShortDescription";
import ProgramDiagram from "../components/program/ProgramDiagram";
import ProgramDayOverview from "../components/program/ProgramDayOverview";
import ProgramStartButton from "../components/program/ProgramStartButton";

const GET_PROGRAM = gql`
  query GetProgram($id: ID!) {
    program(where: { id: $id }) {
      id
      name
      focus
      difficulty
      duration
      description
    }
  }
`;

function Program() {
  const params = useParams();
  const location = useLocation();

  const filteredId = params.id;

  const { loading, error, data } = useQuery(GET_PROGRAM, {
    variables: { id: filteredId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { program } = data;

  const queryParams = new URLSearchParams(location.search);
  const style = queryParams.get("style") || "";

  console.log(data);

  return (
    <div className="min-h-screen flex flex-col bg-dark">
      <ProgramShortDescription
        key={program.id}
        programId={program.id}
        title={program.name}
        focus={program.focus}
        difficulty={program.difficulty}
        duration={program.duration}
        description={program.description}
        style={style}
      />
      <div className="p-4">
        <p>{program.description}</p>
      </div>
      <ProgramDiagram />
      <ProgramDayOverview />
      <ProgramStartButton />
    </div>
  );
}

export default Program;
