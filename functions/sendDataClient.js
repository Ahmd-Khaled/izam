export const sendDataClient = async (url, data) => {
  let res;
  try {
    res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        allow_headers: ["Content-Type"],
        "Accept-Language": "*",
      },
    });
    console.log(res);
    if (res.ok) {
      console.log("Success!");
    } else {
      console.log("Oops! Something is wrong.");
    }
  } catch (error) {
    console.log(error);
  }

  return res;
};
