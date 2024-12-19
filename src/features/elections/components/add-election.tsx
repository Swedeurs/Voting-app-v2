"use server";

import { useState } from "react";
import { addElectionAction } from "../actions";

export function AddElection() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Active");

  const addElection = async () => {
    try {
      const formData = new FormData();
      formData.append("electionName", name);
      formData.append("electionDescription", description);
      formData.append("electionStatus", status);

      await addElectionAction(formData);
      alert("Election added!");
      setName("");
      setDescription("");
      setStatus("Active");
    } catch (error) {
      console.error("Error adding election:", error);
    }
  };

  return (
    <div className="border border-gray-300 p-4 rounded shadow-sm bg-white">
      <h3 className="font-bold text-lg mb-4">Add Election</h3>
      <div className="space-y-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Election Name"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="Active">Active</option>
          <option value="Concluded">Concluded</option>
        </select>
        <button
          onClick={addElection}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2"
        >
          Add Election
        </button>
      </div>
    </div>
  );
}
