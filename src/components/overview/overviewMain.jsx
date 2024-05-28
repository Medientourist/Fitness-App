import { useQuery, gql } from "@apollo/client";
import { useState, useEffect } from "react";

import OverviewButton from "./overviewButton";

import getNextClass from "./colorWheel";

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
  const [programClasses, setProgramClasses] = useState([]);

  useEffect(() => {
    if (data && data.programs) {
      const classes = data.programs.map(() => getNextClass());
      setProgramClasses(classes);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="p-4">
      <h1 className="mb-32">Browse</h1>
      <div className="text-center mb-16">
        {data.programs.map((program, index) => (
          <OverviewButton
            key={program.id}
            title={program.name}
            className={programClasses[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default OverviewMain;
