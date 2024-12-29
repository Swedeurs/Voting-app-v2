"use client";
import { useState } from "react";
import { editRepresentativeAction } from "@/features/representatives/actions";
import { Representative } from "@/features/representatives/types";

type Props = {
  representative: Representative;
};

export function EditRepresentative({ representative }: Props) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState(representative.name);
  const [email, setEmail] = useState(representative.email);
  const [isSaving, setIsSaving] = useState(false);

  const saveChanges = async () => {
    setIsSaving(true);
    try {
      await editRepresentativeAction(representative.id, { name, email });
      alert("Representative updated successfully!");
      setIsEditMode(false); // Exit edit mode after saving
    } catch (error) {
      console.error("Failed to update representative:", error);
      alert("An error occurred while updating the representative.");
    } finally {
      setIsSaving(false);
    }
  };

  const cancelEdit = () => {
    // Reset fields and exit edit mode
    setName(representative.name);
    setEmail(representative.email);
    setIsEditMode(false);
  };

  return (
    <div className="relative border-l-4 border-green-500 bg-white shadow-sm rounded-md p-4">
      {isEditMode ? (
        <>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={saveChanges}
                disabled={isSaving || !name || !email}
                className={`px-4 py-2 text-sm font-medium text-white rounded-md shadow-sm transition duration-150 ${
                  isSaving
                    ? "bg-green-400 cursor-not-allowed opacity-50"
                    : "bg-green-500 hover:bg-green-600"
                }`}
              >
                {isSaving ? "Saving..." : "Save"}
              </button>
              <button
                onClick={cancelEdit}
                className="px-4 py-2 bg-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
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
