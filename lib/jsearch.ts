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

  if (!res.ok) {
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

export async function getSimilarJobs(jobTitle: string) {
  const url = `https://jsearch.p.rapidapi.com/search?query=${jobTitle}`;

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

export async function getCompanyDetails(id: string) {
  const res = await fetch(
    `https://jsearch.p.rapidapi.com/job-details?job_id=${id}`,
    {
      headers: requestHeaders,
    },
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

export async function getQuery(query: string) {
  console.log(query);
  const res = await fetch(
    `https://jsearch.p.rapidapi.com/search?query=${query}`,
    {
      headers: requestHeaders,
    },
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

export async function getCompanies(jobStates: string) {
  jobStates = jobStates ?? "New York";

  const res = await fetch(
    `https://jsearch.p.rapidapi.com/search?query=${jobStates}`,
    {
      headers: requestHeaders,
    },
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

export async function getEstimatedSalaries() {
  const url =
    "https://jsearch.p.rapidapi.com/estimated-salary?job_title=NodeJS%20Developer&location=New-York%2C%20NY%2C%20USA&radius=100";
  try {
    const res = await fetch(url, { headers: requestHeaders });
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error(error);
  }
}
