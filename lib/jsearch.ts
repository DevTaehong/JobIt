export async function getLatestJobs() {
  const jSearchApiKey = process.env.NEXT_PUBLIC_X_RAPID_API_KEY;

  const requestHeaders = new Headers();

  requestHeaders.set("X-RapidAPI-Key", jSearchApiKey || "");
  requestHeaders.set("X-RapidAPI-Host", "jsearch.p.rapidapi.com");

  const res = await fetch(
    "https://jsearch.p.rapidapi.com/search?query=software%20Developer&page=1&num_pages=1&date_posted=today",
    { headers: requestHeaders },
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getRecommendedJobs() {
  const jSearchApiKey = process.env.NEXT_PUBLIC_X_RAPID_API_KEY;

  const requestHeaders = new Headers();

  requestHeaders.set("X-RapidAPI-Key", jSearchApiKey || "");
  requestHeaders.set("X-RapidAPI-Host", "jsearch.p.rapidapi.com");

  const res = await fetch(
    "https://jsearch.p.rapidapi.com/search?query=Developer&page=1&num_pages=2&date_posted=today&remote_jobs_only=true",
    { headers: requestHeaders },
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
