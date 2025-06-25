// src/utils/getTours.js
export const getTours = async () => {
  try {
    const res = await fetch("https://trvelbackendtest.vercel.app/api/tours", {
      cache: "no-store",
    });
    const result = await res.json();

    if (result.success && Array.isArray(result.data)) {
      return result.data;
    } else {
      console.error("Invalid response:", result);
      return [];
    }
  } catch (error) {
    console.error("Error fetching tours:", error);
    return [];
  }
};
