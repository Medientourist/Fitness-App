import { Link } from "react-router-dom";

function ProfilMain() {
  return (
    <div className="p-4">
      <h1 className="mb-32">Name</h1>
      <div className="text-center m">
        <div className="m-auto h-20 w-20 rounded-full bg-cyan-to-blue-tl-br mb-8"></div>
        <Link>Profil bearbeiten</Link>
      </div>
    </div>
  );
}

export default ProfilMain;
