const numberSplit = (int) => {
  
  if(Math.abs(int) % 2 === 0 && Math.sign(int) === -1) {
    let firstNumber = Math.abs(int) / 2;
    let secondNumber = (firstNumber);
    let evenNegativeArray = [-secondNumber, -firstNumber];
    return evenNegativeArray;
  }

  if(Math.abs(int) % 2 === 1 && Math.sign(int) === -1) {
    let evenNum = Math.abs(int) + 1;
    let firstNumber = (evenNum / 2) - 1;
    let secondNumber = evenNum / 2;
    let oddNegativeArray = [-secondNumber, -firstNumber];
    return oddNegativeArray;
  }

  if(int % 2 === 0) {
    let firstNumber = int / 2;
    let secondNumber = firstNumber;
    let evenArray = [firstNumber, secondNumber];

    // validates    
    (firstNumber + secondNumber === int) ? evenArray : '';

  } else if(int % 2 === 1) {
    let evenNum = int + 1;
    let firstNumber = (evenNum / 2) - 1;
    let secondNumber = evenNum / 2;
    let oddArray = [firstNumber, secondNumber];
    // validates
    (firstNumber + secondNumber === int) ? oddArray : '';
    
  }
}

numberSplit(-9);


/******
numberSplit(4) ➞ [2, 2]
numberSplit(10) ➞ [5, 5]
numberSplit(11) ➞ [5, 6]
numberSplit(-9) ➞ [-5, -4] 
*****/