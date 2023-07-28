export function generateFakeFollowerCounts(min: number, max: number): string {
  const followerCount = Math.floor(Math.random() * (max - min + 1)) + min;
  return followerCount.toLocaleString();
}
