function divideNumbers(numerator, denominator) {
    try {
      if (denominator === 0) {
        throw new Error("Cannot divide by zero."); // Manually throw an error
      }
      const result = numerator / denominator;
      console.log(`Result of division: ${result}`);
    } catch (error) {
      console.error(`An error occurred: ${error.message}`); // Handle the error
    } finally {
      console.log("Division attempt complete."); // Always executes
    }
  }
  
  divideNumbers(10, 2); 
  divideNumbers(5, 0);  


  function multiply(num1,num2){
    try {
        if (num1, num2 ===  0)
        throw new Error("cannot multiply zero");
        let result= num1 * num2
        console.log(`Answer ${result}`);
    } catch (error) {
        console.error("An error occured :", error.message);
        
    }
  }

  
  multiply(0,1);
  multiply(0,0);
  multiply(5,6);
