import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function OverviewButton({ title, className }) {
  return (
    <>
      <Link className={className}>
        <h3>{title}</h3>
      </Link>
    </>
  );
}

OverviewButton.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

export default OverviewButton;
