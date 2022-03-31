  /*
  
  */
  
  // change if/else statement to switch statement
  switch (val) {
    case 'bob':
      answer = 'Marley';
      break;

    case 42:
      answer = 'The Answer';
      break;

    case 1:
      answer = 'There is no #1';
      break;


    case 99:
      answer = 'Missed me by this much!';
      break;


    case 7:
      answer = 'Ate Nine';

//did not use a default because example wanted chainToSwitch(John) to return "" (empty) strings.

  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);