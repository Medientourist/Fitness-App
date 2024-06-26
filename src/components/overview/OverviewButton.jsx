import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function OverviewButton({ programId, title, className }) {
  return (
    <Link className={className} to={`/program/${programId}`}>
      <h3>{title}</h3>
    </Link>
  );
}

OverviewButton.propTypes = {
  programId: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default OverviewButton;
