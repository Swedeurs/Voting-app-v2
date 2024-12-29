"use client";
import { useState } from "react";
import { Representative } from "@/features/representatives/types";
import { editRepresentativeAction } from "@/features/representatives/actions";

type Props = {
  representative: Representative;
};

export function EditRepresentative({ representative }: Props) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState(representative.name);
  const [email, setEmail] = useState(representative.email);

  const saveChanges = async () => {
    try {
      await editRepresentativeAction(representative.id, { name, email });
      alert("Representative updated successfully!");
      setIsEditMode(false);
    } catch (error) {
      console.error("Error updating representative:", error);
      alert("Failed to update representative. Please try again.");
    }
  };

  const cancelEdit = () => {

    setName(representative.name);
    setEmail(representative.email);
    setIsEditMode(false);
  };

  return (
    <div className="relative border-l-4 border-green-500 bg-white shadow-sm rounded-md p-4">
      {isEditMode ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="block w-full border border-gray-300 rounded-md p-2 mb-3 focus:ring-green-500 focus:border-green-500"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="block w-full border border-gray-300 rounded-md p-2 mb-3 focus:ring-green-500 focus:border-green-500"
          />
          <div className="flex justify-end space-x-2">
            <button
              onClick={saveChanges}
              className="px-4 py-2 bg-green-500 text-white text-sm rounded-md hover:bg-green-600"
            >
              Save
            </button>
            <button
              onClick={cancelEdit}
              className="px-4 py-2 bg-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="text-sm text-gray-800 mb-1">
            <strong className="text-gray-600">Name:</strong> {name}
          </p>
          <p className="text-sm text-gray-800 mb-3">
            <strong className="text-gray-600">Email:</strong> {email}
          </p>
          <div className="flex justify-end">
            <button
              onClick={() => setIsEditMode(true)}
              className="px-4 py-2 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600"
            >
              Edit
            </button>
          </div>
        </>
      )}
    </div>
  );
}
