import { config } from "./config";

export const getData = async (params: string) => {
  const response = await fetch(`${config.apiURL}${params}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  return await response.json();
};
