export {};

// String Enum

enum Status {
  SUCCESS = "success",
  ERROR = "error",
  LOADING = "loading",
}

let currentStatus: Status = Status.SUCCESS;

console.log(currentStatus); // "success"
