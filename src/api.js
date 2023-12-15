// for api endpoint
const API_ENDPOINT = "https://neolocus.xyz/endpoint_integration";

const generateDesign = async (payload, headers) => {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to generate design");
    }

    return response.json();
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
};

export { generateDesign };
