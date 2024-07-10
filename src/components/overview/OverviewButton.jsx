import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function OverviewButton({ programId, title, style }) {
  return (
    <Link
      className={`${style} block text-white my-4 py-8 w-full rounded-3xl`}
      to={`/program/${programId}?style=${encodeURIComponent(style)}`}
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
