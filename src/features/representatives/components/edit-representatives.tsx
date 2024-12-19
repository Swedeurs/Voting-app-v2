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
    <div className="space-y-4 border p-4 rounded-md shadow-md bg-white">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <button
        onClick={saveChanges}
        disabled={isSaving || !name || !email}
        className={`bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 ${
          isSaving ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isSaving ? "Saving..." : "Save"}
      </button>
    </div>
  );
}
