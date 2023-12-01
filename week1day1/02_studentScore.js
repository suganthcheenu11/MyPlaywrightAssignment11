/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/


function calculateGrade(scores) {

   switch (true) {
      case scores >= 90 && scores <= 100:
         return "A";

      case scores >= 80 && scores < 90:
         return "B";
      case scores >= 70 && scores < 80:
         return "C";
      case scores >= 60 && scores < 70:
         return "D";
      case scores >= 50 && scores < 60:
         return "E";
      case scores >= 0 && scores < 50:
         return "F";
      default:
         return "No Grade found. Please ensure the score is between 1 and 100";

   }

}

let score = 50;

console.log(calculateGrade(score));
console.log(calculateGrade(70));
