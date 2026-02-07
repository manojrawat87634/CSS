export {};

function riskyFunction() {
  try {
    throw new Error("Database connection failed");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Unknown error occurred");
    }
  }
}

riskyFunction();
