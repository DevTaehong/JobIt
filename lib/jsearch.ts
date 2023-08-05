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

export async function getQuery(query: string, companyId: string) {
  const res = await fetch(
    `https://jsearch.p.rapidapi.com/search?query=${query}&employer=${companyId}`,
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

export async function getEstimatedSalaries(
  jobTitle: string,
  location: string,
  radius: number,
) {
  const url = `https://jsearch.p.rapidapi.com/estimated-salary?job_title=${jobTitle}&location=${location}&radius=${radius}`;
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
export async function getCompanyId(query: string) {
  const res = await fetch(
    `https://jsearch.p.rapidapi.com/search-filters?query=${query}`,
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

export async function getInitialJobsOnJobSearchPage() {
  const page = 1;
  const numPages = 10;
  const apiUrl = `https://jsearch.p.rapidapi.com/search?query=Developer%20in%20Canada&page=${page}&num_pages=${numPages}`;

  const res = await fetch(apiUrl, { headers: requestHeaders });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
