"use strict";

const instructor = {
  firstName: "",
  isInstructor: true,
  favouriteNumbers: [1, 2, 3, 4],
};

console.log(Object.keys(instructor)); // O(N)
console.log(Object.values(instructor)); // O(N)
console.log(Object.entries(instructor)); // O(N)
console.log(instructor.hasOwnProperty("isInstructor")); // O(1)
