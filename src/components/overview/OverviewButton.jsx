import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { loadFromSessionStorage } from "../../utils/storage";
import { GET_PROGRAM } from "../../queries/hygraphQueries";

function OverviewButton({ programId, title, style }) {
  const savedData = loadFromSessionStorage("trainingFinishedData");
  const currentDay = savedData?.day || 1;

  const { data, loading, error } = useQuery(GET_PROGRAM, {
    variables: { id: savedData?.programId },
    skip: !savedData?.programId,
  });

  const nextDay =
    loading || error || !data?.program
      ? currentDay
      : data.program.workoutsWithDay
          .filter((wd) => wd.day > currentDay)
          .sort((a, b) => a.day - b.day)[0]?.day || currentDay;

  return (
    <Link
      className={`${style} mx-auto block text-white hover:text-black hover:scale-110 my-4 py-8 w-full rounded-3xl max-w-[40rem] md:my-12`}
      to={`/program/${programId}?day=${encodeURIComponent(
        nextDay
      )}&style=${encodeURIComponent(style)}`}
    >
      <h3>{title}</h3>
    </Link>
  );
}

OverviewButton.propTypes = {
  programId: PropTypes.string.isRequired,
  title: PropTypes.string,
  style: PropTypes.string,
};

export default OverviewButton;
