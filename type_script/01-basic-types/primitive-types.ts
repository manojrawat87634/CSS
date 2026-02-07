// any vs unknown

let valueAny: any;
valueAny = 10;
valueAny = "Hello";
valueAny = true;

// any allows anything (DANGEROUS)
valueAny.toUpperCase(); // no error at compile time ❌


// unknown is SAFE
let valueUnknown: unknown;
valueUnknown = "TypeScript";

// ❌ Not allowed directly
// valueUnknown.toUpperCase();

// ✅ Type check required
if (typeof valueUnknown === "string") {
  console.log(valueUnknown.toUpperCase());
}
