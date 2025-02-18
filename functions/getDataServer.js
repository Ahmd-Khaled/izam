export const getDataServer = async (url, type) => {
  const res = await fetch(url, {
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      allow_headers: ["Content-Type"],
      "Accept-Language": "*",
    },
    type,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
