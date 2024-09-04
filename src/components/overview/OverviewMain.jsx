import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import OverviewButton from "./OverviewButton";
import { GET_PROGRAMS } from "../../queries/hygraphQueries";

// Nachladen und nicht nur scrollen. Optimaler
// Vielleicht lieber alle anzeigen und dann scrollen

function OverviewMain() {
  const { loading, error, data } = useQuery(GET_PROGRAMS);
  const [visiblePrograms, setVisiblePrograms] = useState([]);
  const [programIndex, setProgramIndex] = useState(0);
  const visibleCount = 3;

  useEffect(() => {
    if (data && data.programs) {
      setVisiblePrograms(
        data.programs.slice(programIndex, programIndex + visibleCount)
      );
    }
  }, [data, programIndex]);

  // Function to handle scroll
  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      if (programIndex + visibleCount < data.programs.length) {
        setProgramIndex((prevIndex) => prevIndex + 1);
      }
    } else if (event.deltaY < 0) {
      if (programIndex > 0) {
        setProgramIndex((prevIndex) => prevIndex - 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [programIndex, data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const buttonStyles = [
    "bg-cyan-to-yellow-tl-br",
    "bg-orange-to-peach-tl-br",
    "bg-cyan-to-blue-tl-br",
  ];

  return (
    <div className="min-h-screen p-4">
      <h1 className="mb-24">Browse</h1>
      <div className="text-center mb-16">
        <p>Scrollen zum Laden weiterer Programme</p>
        {visiblePrograms.map((program, index) => (
          <OverviewButton
            key={program.id}
            programId={program.id}
            title={program.name}
            style={buttonStyles[index % buttonStyles.length]}
          />
        ))}
      </div>
    </div>
  );
}

export default OverviewMain;
