// Specifying the words you want to search for
export const specificWords = [
  "React",
  "JavaScript",
  "Vue",
  "Angular",
  "Node.js",
  "Express.js",
  "PHP",
  "AWS",
  "C#",
  "JQuery",
  "Laravel",
  "CSS3",
  "HTML5",
  "Java",
  "Python",
  "SQL",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Rust",
  "Ruby",
  "Go",
  "Swift",
  "TypeScript",
  "Scala",
  "Kotlin",
  "R",
  "Dart",
];

// Initializing an object to store the values of each specific word
export const foundWords = {};

// Extract the required skills from job descriptions
type FoundWords = {
  [key: string]: string;
};

export const extractRequiredSkills = (jobDescription: string[]) => {
  const foundWords: FoundWords = {};
  return specificWords.map((word) => {
    const regex = new RegExp(`\\b${word}\\b`, "gi"); // "gi" makes the search case-insensitive
    let match = "Not Found";
    jobDescription.forEach((description) => {
      const descriptionMatch = description.match(regex);
      if (descriptionMatch) {
        match = descriptionMatch[0].trim();
      }
    });
    const skills = (foundWords[word] = match);
    return skills;
  });
};
