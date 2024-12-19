export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export function getFormData(formData: FormData): Record<string, string> {
  return Array.from(formData.entries()).reduce(
    (acc, [key, value]) => {
      if (typeof value === "string") {
        acc[key] = value; // Directly assign strings
      } else if (value instanceof File) {
        acc[key] = value.name; // Handle File objects by using their name
      }
      return acc;
    },
    {} as Record<string, string>,
  );
}
