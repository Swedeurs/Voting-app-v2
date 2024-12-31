"use client";

import { useState, useEffect } from "react";
import { addElectionAction } from "../actions";
import { getAllRepresentativesAction } from "@/features/representatives/actions";

export function AddElection() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Active");
  const [alternatives, setAlternatives] = useState<string[]>([]);
  const [representatives, setRepresentatives] = useState<
    { id: number; name: string; email: string }[]
  >([]);
  const [selectedRepresentativeId, setSelectedRepresentativeId] = useState<number | null>(null);
  const [assignedRepresentatives, setAssignedRepresentatives] = useState<
    { id: number; name: string; email: string }[]
  >([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const reps = await getAllRepresentativesAction();
        setRepresentatives(reps);
      } catch (error) {
        console.error("Error fetching representatives:", error);
      }
    }
    fetchData();
  }, []);

  const addAlternative = () => setAlternatives([...alternatives, ""]);

  const updateAlternative = (index: number, value: string) => {
    const updated = [...alternatives];
    updated[index] = value;
    setAlternatives(updated);
  };

  const removeAlternative = (index: number) => {
    setAlternatives(alternatives.filter((_, i) => i !== index));
  };

  const addRepresentative = () => {
    if (!selectedRepresentativeId) {
      alert("Please select a representative to add.");
      return;
    }

    const selectedRep = representatives.find((rep) => rep.id === selectedRepresentativeId);
    if (selectedRep) {
      setAssignedRepresentatives([...assignedRepresentatives, selectedRep]);
      setSelectedRepresentativeId(null);
    }
  };

  const removeRepresentative = (index: number) => {
    setAssignedRepresentatives(
      assignedRepresentatives.filter((_, i) => i !== index)
    );
  };

  const addElection = async () => {
    try {
      if (!name || !description) {
        alert("Please fill in all required fields.");
        return;
      }

      const formData = new FormData();
      formData.append("electionName", name);
      formData.append("electionDescription", description);
      formData.append("electionStatus", status);
      formData.append("alternatives", JSON.stringify(alternatives));
      formData.append(
        "representatives",
        JSON.stringify(assignedRepresentatives.map((rep) => rep.id))
      );

      await addElectionAction(formData);
      alert("Election added!");

      setName("");
      setDescription("");
      setStatus("Active");
      setAlternatives([]);
      setAssignedRepresentatives([]);
      setIsOpen(false); // Close the dialog after submission
    } catch (error) {
      console.error("Error adding election:", error);
      alert("Failed to add election. Please try again.");
    }
  };

  return (
    <div className="relative">

      <button
        onClick={() => setIsOpen(true)}
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
      >
        Add Election
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-75 flex items-center justify-center">
          <div className="bg-gray-100 text-black rounded shadow-lg p-6 w-full max-w-lg">
            <h3 className="font-bold text-xl mb-4">Add Election</h3>
            <div className="space-y-4">
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
              <div className="space-y-2">
                <h4 className="font-medium">Alternatives</h4>
                {alternatives.map((alt, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={alt}
                      onChange={(e) => updateAlternative(index, e.target.value)}
                      placeholder={`Alternative ${index + 1}`}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <button
                      type="button"
                      onClick={() => removeAlternative(index)}
                      className="text-gray-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addAlternative}
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 mt-2"
                >
                  Add Alternative
                </button>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Representatives</h4>
                <select
                  value={selectedRepresentativeId ?? ""}
                  onChange={(e) => setSelectedRepresentativeId(Number(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="" disabled>
                    Select a representative
                  </option>
                  {representatives.map((rep) => (
                    <option key={rep.id} value={rep.id}>
                      {rep.name} ({rep.email})
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={addRepresentative}
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 mt-2"
                >
                  Add Representative
                </button>
                <ul className="list-disc pl-5">
                  {assignedRepresentatives.map((rep, index) => (
                    <li key={index}>
                      {rep.name} ({rep.email}){" "}
                      <button
                        onClick={() => removeRepresentative(index)}
                        className="text-gray-600 hover:underline"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={addElection}
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
