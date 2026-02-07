// Union Types

// Variable union
let userId: number | string;

userId = 101;
userId = "A101";

// Function with union
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

printId(10);
printId("admin");

// Real-world example: API status
type Status = "success" | "error" | "loading";

function handleStatus(status: Status) {
  if (status === "success") {
    console.log("Data loaded");
  }
}
export {}