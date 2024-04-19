import { useQuery, gql } from "@apollo/client";

import OverviewButton from "./overviewButton";

import getNextClass from "./colorWheel";

const GET_PROGRAMS = gql`
  query GetPrograms {
    programs {
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

  console.log(data);
  return (
    <div className="p-4">
      <h1 className="mb-32">Browse</h1>
      <div className="text-center mb-16">
        {data.programs.map((program) => (
          <OverviewButton
            key={program.id}
            title={program.name}
            className={getNextClass()}
          />
        ))}
      </div>
    </div>
  );
}

export default OverviewMain;
