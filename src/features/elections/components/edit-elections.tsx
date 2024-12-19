"use client";
import { useState } from "react";
import { editElectionDirectAction } from "../actions";
import { Election } from "../types";

type Props = { election: Election };

export function EditElection({ election }: Props) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState(election.electionName);
  const [description, setDescription] = useState(election.electionDescription);
  const [status, setStatus] = useState(election.electionStatus);

  const saveChanges = async () => {
    try {
      await editElectionDirectAction(election.id, {
        electionName: name,
        electionDescription: description,
        electionStatus: status,
      });
      setIsEditMode(false);
      alert("Election updated successfully!");
    } catch (error) {
      console.error("Error updating election:", error);
      alert("Failed to update election.");
    }
  };

  const concludeElection = async () => {
    try {
      await editElectionDirectAction(election.id, {
        electionStatus: "Concluded",
      });
      setStatus("Concluded");
      alert("Election concluded!");
    } catch (error) {
      console.error("Error concluding election:", error);
      alert("Failed to conclude election.");
    }
  };

  return (
    <div className="border border-gray-300 p-4 rounded shadow-sm bg-white hover:shadow-md transition-shadow">
      {isEditMode ? (
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
          <div className="flex space-x-2">
            <button
              onClick={saveChanges}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditMode(false)}
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-gray-700">{description}</p>
          <p>Status: {status}</p>
          <div className="flex space-x-2 mt-2">
            <button
              onClick={() => setIsEditMode(true)}
              className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
            >
              Edit
            </button>
            <button
              onClick={concludeElection}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              disabled={status === "Concluded"}
            >
              Conclude
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
