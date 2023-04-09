import { useState } from "react";
import { addTeam } from "../services/mutations";

function AddTeam() {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addTeam(name, score);
      alert("Team added successfully!");
      setName("");
      setScore("");
      setIsOpen(false);
    } catch (error) {
      alert("An error occurred while adding the team: " + error.message);
    }
  };

  return (
    <>
      <button
        type="button"
        className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center"
        onClick={() => setIsOpen(true)}
      >
        +
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-96">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                  Team Name:
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="score">
                  Team Score:
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="score"
                  type="number"
                  value={score}
                  onChange={(event) => setScore(event.target.value)}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddTeam;
