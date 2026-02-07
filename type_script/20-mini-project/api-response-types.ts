export {};

async function getUser() {
  try {
    const response = await fetch("https://munnapassword.pythonanywhere.com/contact/");

    if (!response.ok) {
      throw new Error("API failed");
    }

    const data = await response.json();
    console.log(data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    }
  }
}

getUser();
