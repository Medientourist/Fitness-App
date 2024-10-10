import { useState, useEffect, useCallback } from "react";
import { useQuery } from "@apollo/client";
import OverviewButton from "./OverviewButton";
import { GET_PROGRAMS_OVERVIEW } from "../../queries/hygraphQueries";

function OverviewMain() {
  const [programIndex, setProgramIndex] = useState(0);
  const [visiblePrograms, setVisiblePrograms] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const visibleCount = 3;

  const [buttonStyles, setButtonStyles] = useState([
    "bg-cyan-to-yellow-tl-br",
    "bg-orange-to-peach-tl-br",
    "bg-cyan-to-blue-tl-br",
  ]);

  const { loading, error, data, fetchMore } = useQuery(GET_PROGRAMS_OVERVIEW, {
    variables: { limit: visibleCount, offset: programIndex },
  });

  useEffect(() => {
    if (data && data.programs) {
      const uniquePrograms = data.programs.reduce((acc, program) => {
        if (!acc.some((p) => p.id === program.id)) {
          acc.push(program);
        }
        return acc;
      }, []);
      setVisiblePrograms(uniquePrograms.slice(0, visibleCount));
    }
  }, [data]);

  const rotateStyles = (currentStyles, direction) => {
    if (direction > 0) {
      return [...currentStyles.slice(1), currentStyles[0]];
    }
    return [
      currentStyles[currentStyles.length - 1],
      ...currentStyles.slice(0, -1),
    ];
  };

  const handleScroll = useCallback(
    (event) => {
      if (isFetching || loading) return;

      if (event.deltaY > 0) {
        const newIndex = programIndex + 1;

        setIsFetching(true);
        fetchMore({
          variables: {
            offset: newIndex,
            limit: visibleCount,
          },
        }).then((fetchMoreResult) => {
          if (fetchMoreResult.data.programs.length > 0) {
            setVisiblePrograms((prevPrograms) => {
              const newVisiblePrograms = [
                ...prevPrograms.slice(1),
                fetchMoreResult.data.programs[0],
              ];
              return newVisiblePrograms
                .filter(
                  (value, index, self) =>
                    index === self.findIndex((t) => t.id === value.id)
                )
                .slice(-visibleCount);
            });

            setButtonStyles((prevStyles) => rotateStyles(prevStyles, 1));

            setProgramIndex(newIndex);
          }
          setIsFetching(false);
        });
      } else if (event.deltaY < 0 && programIndex > 0) {
        const newIndex = programIndex - 1;

        setIsFetching(true);
        fetchMore({
          variables: {
            offset: newIndex,
            limit: visibleCount,
          },
        }).then((fetchMoreResult) => {
          if (fetchMoreResult.data.programs.length > 0) {
            setVisiblePrograms((prevPrograms) => {
              const newVisiblePrograms = [
                fetchMoreResult.data.programs[0],
                ...prevPrograms.slice(0, -1),
              ];

              return newVisiblePrograms
                .filter(
                  (value, index, self) =>
                    index === self.findIndex((t) => t.id === value.id)
                )
                .slice(0, visibleCount);
            });

            setButtonStyles((prevStyles) => rotateStyles(prevStyles, -1));

            setProgramIndex(newIndex);
          }
          setIsFetching(false);
        });
      }
    },
    [programIndex, isFetching, loading, fetchMore]
  );

  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-container");
    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", handleScroll);
      }
    };
  }, [handleScroll]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="min-h-screen p-4 scroll-container">
      <h1 className="mb-16">Browse</h1>
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
