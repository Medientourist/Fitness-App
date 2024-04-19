import PropTypes from "prop-types";
import { useState } from "react";

function LogIn({ initalName }) {
  const [playerName, setPlayerName] = useState(initalName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        className="text-black inline w-40"
        required
        value={playerName}
        onChange={handleChange}
      />
    );
  }

  return (
    <div className="py-2 px-4">
      <h1 className="inline">Hallo {editablePlayerName}</h1>
      <button className="inline underline ml-4" onClick={handleEditClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
}

LogIn.propTypes = {
  initalName: PropTypes.string.isRequired,
};

export default LogIn;
