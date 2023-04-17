function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
      const product = num * i;
      console.log(num + " x " + i + " = " + product);
    }
  }

  function multiplicationTable(num) {
    // Multiplication table generation
    for (let i = 1; i <= 10; i++) {
      let product = num * i;
      console.log(num + " x " + i + " = " + product);
    }
  }
  
  // Example usage:
  multiplicationTable(5);
  multiplicationTable(-2);
  multiplicationTable("hello");


  function gradeCalculator(grade) {
    if (isNaN(grade) || grade < 0 || grade > 100) {
      return 'Error: Invalid input. Please enter a number between 0 and 100.';
    } else if (grade >= 90) {
      return 'A';
    } else if (grade >= 80) {
      return 'B';
    } else if (grade >= 70) {
      return 'C';
    } else if (grade >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }

  // Test Data
  console.log(gradeCalculator(85));
  console.log(gradeCalculator(100)); 
  console.log(gradeCalculator(73)); 
  console.log(gradeCalculator(50));
  