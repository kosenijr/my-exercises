/*

*/
































function cc(card) {
  // Only change code below this line
  // create switch statement to count the various cards
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;

    case 7:
    case 8:
    case 9:
      break;

    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }
  -------------------------------------
  // create if/else statement to use count for the necessary returns
  // if (count > 0) {
  //   return count + ' Bet'
  // } else {
  //   return count + ' Hold'
  // }
-------------------------------------
  // if/else statement is similar to the one above
    if (count <= 0) {
    return count + ' Hold'
  } else {
    return count + ' Bet'
  }

--------------------------------------------------------------
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');