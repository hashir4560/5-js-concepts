console.log("Good");
setTimeout(() => {
  console.log("iNSIDE timeout");
}, 1000);

console.log("Bad");

// Good
// Bad
// iNSIDE timeout
