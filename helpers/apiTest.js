// Recursive function to find and log Icon.URL
export const findAndLogIconURL = (obj) => {
  // If it's an array, iterate through its elements
  if (Array.isArray(obj)) {
    for (let item of obj) {
      findAndLogIconURL(item);
    }
  } else if (typeof obj === "object" && obj !== null) {
    // Ensure it's an object and not null
    if (obj.Icon && obj.Icon.URL) {
      console.log(obj.Icon.URL);
    }
    // Check other properties for potential nested objects or arrays
    for (let key in obj) {
      findAndLogIconURL(obj[key]);
    }
  }
};
