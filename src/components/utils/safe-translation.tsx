export const safeT = (t: unknown, key: string) => {
  try {
    return (t as (k: string) => string)(key);
  } catch {
    return key; // Fallback
  }
};
