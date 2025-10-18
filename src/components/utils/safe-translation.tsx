export const safeT = (t: any, key: string) => {
  try {
    return t(key);
  } catch {
    return key; // Fallback
  }
};
