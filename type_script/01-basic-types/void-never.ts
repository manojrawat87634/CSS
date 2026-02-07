// void type

function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello TypeScript");


// never type

function throwError(message: string): never {
  throw new Error(message);
}


// Example of never with infinite loop
function infiniteLoop(): never {
  while (true) {
    // keeps running
  }
}
