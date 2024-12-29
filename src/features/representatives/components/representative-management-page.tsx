
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
    }
  };

  return (
    <div className="border p-4 rounded shadow bg-white space-y-2">
      {isEditMode ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded p-2 w-full"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded p-2 w-full"
          />
          <div className="flex space-x-2">
            <button
              onClick={saveChanges}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
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
        </>
      ) : (
        <>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <button
            onClick={() => setIsEditMode(true)}
            className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
}
