import { useQuery, gql } from "@apollo/client";
import OverviewButton from "./OverviewButton";

const GET_PROGRAMS = gql`
  query GetPrograms {
    programs {
      id
      name
      duration
      workoutsWithDay {
        day
        workout {
          name
        }
      }
    }
  }
`;

function OverviewMain() {
  const { loading, error, data } = useQuery(GET_PROGRAMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const buttonStyles = [
    "bg-medium",
    "bg-gradient-light-orange",
    "bg-gradient-bright-cyan",
  ];

  return (
    <div className="p-4">
      <h1 className="mb-32">Browse</h1>
      <div className="text-center mb-16">
        {data.programs.map((program, index) => {
          return (
            <OverviewButton
              key={program.id}
              programId={program.id}
              title={program.name}
              style={buttonStyles[index % buttonStyles.length]}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OverviewMain;
