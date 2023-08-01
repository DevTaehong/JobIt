const jSearchApiKey = process.env.X_RAPID_API_KEY;

const requestHeaders = new Headers();

requestHeaders.set("X-RapidAPI-Key", jSearchApiKey || "");
requestHeaders.set("X-RapidAPI-Host", "jsearch.p.rapidapi.com");

export async function getLatestJobs() {
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
  const res = await fetch(
    "https://jsearch.p.rapidapi.com/search?query=Developer&page=1&num_pages=1&date_posted=today&remote_jobs_only=true",
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

export async function getJobDetails(id: string) {
  const url = `https://jsearch.p.rapidapi.com/job-details?job_id=${id}`;

  try {
    const res = await fetch(url, { headers: requestHeaders });
    const data = await res.json();

    if (!res.ok) {
      throw new Error("Failed to Fetch Job Details");
    }

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function searchJob(keywords: string) {
  const url = `https://jsearch.p.rapidapi.com/search-filters?query=${keywords}`;

  try {
    const res = await fetch(url, { headers: requestHeaders });
    const data = await res.json();

    if (!res.ok) {
      throw new Error("Failed to Fetch Job Details");
    }

    return data;
  } catch (error) {
    console.log(error);
  }
}
