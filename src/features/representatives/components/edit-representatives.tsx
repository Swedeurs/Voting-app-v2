"use client";
import { useState } from "react";
import { editRepresentativeAction } from "@/features/representatives/actions";
import { Representative } from "@/features/representatives/types";

type Props = {
  representative: Representative;
};

export function EditRepresentative({ representative }: Props) {
  const [name, setName] = useState(representative.name);
  const [email, setEmail] = useState(representative.email);
  const [isSaving, setIsSaving] = useState(false);

  const saveChanges = async () => {
    setIsSaving(true);
    try {
      await editRepresentativeAction(representative.id, { name, email });
      alert("Representative updated successfully!");
    } catch (error) {
      console.error("Failed to update representative:", error);
      alert("An error occurred while updating the representative.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="relative border-l-4 border-green-500 bg-white shadow-sm rounded-md p-4">
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
        <div className="flex justify-end">
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
        </div>
      </div>
    </div>
  );
}
