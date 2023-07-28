const followerCounts = (companyName: string): number => {
  let hash = 5381;
  for (let i = 0; i < companyName.length; i++) {
    hash = (hash * 33) ^ companyName.charCodeAt(i);
  }
  return hash >>> 0; // Ensure the result is an unsigned 32-bit integer
};

export default followerCounts;
