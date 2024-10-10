import { useState, useEffect } from "react";
import {
  loadFromSessionStorage,
  saveToSessionStorage,
} from "../../utils/storage";

function ProfilMain() {
  const [name, setName] = useState("");
  const [editName, setEditName] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedName = loadFromSessionStorage("profileName");
    const savedImage = loadFromSessionStorage("profileImage");

    if (savedName) {
      setName(savedName);
    }

    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileImage(reader.result);
      saveToSessionStorage("profileImage", reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    saveToSessionStorage("profileName", editName);
    setName(editName);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setEditName(name);
    setIsEditing(true);
  };

  return (
    <div className="w-full p-4 space-y-4">
      <h1 className="">{name || "Noch kein Profil"}</h1>

      <div className="flex justify-center pt-12">
        {profileImage ? (
          <img
            src={profileImage}
            alt="Profile"
            className="h-24 w-24 rounded-full object-cover"
          />
        ) : (
          <div className="flex items-center text-center m-auto h-24 w-24 rounded-full bg-gray-200 text-black">
            Noch kein Bild
          </div>
        )}
      </div>

      {!isEditing ? (
        <div className="flex justify-center">
          <button
            className="bg-cyan-to-blue-tl-br text-white py-2 px-4 rounded hover:text-black"
            onClick={handleEdit}
          >
            Profil bearbeiten
          </button>
        </div>
      ) : (
        <div>
          <div className="mb-4">
            <label className="block text-white mb-2">Name:</label>
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              className="w-full p-2 rounded text-black"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2">Profilbild:</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>

          <button
            onClick={handleSave}
            className="bg-cyan-to-blue-tl-br text-white py-2 px-4 rounded hover:text-black"
          >
            Speichern
          </button>

          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-600 text-white py-2 px-4 rounded ml-2 hover:text-orange-500"
          >
            Abbrechen
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfilMain;
