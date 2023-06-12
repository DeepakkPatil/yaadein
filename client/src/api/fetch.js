import { client } from "./client";
import { getquery } from "./queries";

export const fetchData = async (props) => {
  try {
    const query = getquery(props);
    if (query === -1) throw new Error("Invalid Query");

    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data.");
  }
};
