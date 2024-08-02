export const serviceGetHistoryContent = async (slug: string = "") => {
  const response = await fetch(
    `https://66938197c6be000fa07bcd99.mockapi.io/historyContent/${slug}`
  );

  if (!response.ok) {
    throw new Error("cannot fetch content");
  }

  return response.json();
};

export const servicePostHistoryContent = async (reqObj: any) => {
  fetch("https://66938197c6be000fa07bcd99.mockapi.io/historyContent/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqObj),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
