export const makeGET = async (ENDPOINT: string) => {
  const result = await (await fetch(ENDPOINT)).json();
  return result;
};
