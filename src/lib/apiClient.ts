export default async function api(path: string): Promise<object[]> {
  try {
    const response = await fetch(path);
    return await response.json() as object[];
  } catch (err) {
    console.error(err);
    return [];
  }
}