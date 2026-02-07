export {};

// Type alias basics

type Status = "success" | "error" | "loading";
type ID = number | string;
let name : string;
// Using type alias
let currentStatus: Status = "success";
let userId: ID = 101;

console.log(currentStatus, userId);
