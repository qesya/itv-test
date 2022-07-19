export const checkHandler = async (response: Response) => {
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json;
};

export const errorHandler = (e: Error) => {
  console.log(e);
  throw e.message;
};
