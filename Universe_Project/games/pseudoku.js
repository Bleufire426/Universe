var board = [
  5,0,0,6,7,0,9,0,0,
  0,4,0,8,0,0,0,0,0,
  8,0,0,5,0,0,6,1,3,
  0,6,2,4,0,0,0,7,0,
  1,0,0,0,0,3,0,2,0,
  3,7,4,9,0,8,0,0,0,
  0,9,6,1,0,7,8,0,2,
  2,1,8,0,0,6,0,4,5,
  0,5,0,0,8,0,0,9,0,
  ]
  
  var solution = [
  5,3,1,6,7,2,9,8,4,
  6,4,9,8,3,1,2,5,7,
  8,2,7,5,4,9,6,1,3,
  9,6,2,4,1,5,3,7,8,
  1,8,5,7,6,3,4,2,9,
  3,7,4,9,2,8,5,6,1,
  4,9,6,1,5,7,8,3,2,
  2,1,8,3,9,6,7,4,5,
  7,5,3,2,8,4,1,9,6,
  ]
  
  console.log(board[1])
  //board[1] = document.getElementById('ab')
  function check() {
    for (let i=0; i<board.length; i++) {
      // console.log(board);
      let ab = document.getElementById(i);
      // console.log(ab.value);
      // ab.innerHTML = ab.value;
      if (ab == null) {
        continue;
      }
      board[i] = parseInt(ab.value, 10);
    }
  
  // console.log(board[i]);
  // console.log(board);
  }
  
  function youWin() {
    for (let i=0; i<board.length; i++) {
      if (board[i] != solution[i]) {
        return;
      }
    }
    //congratulate the user for completing the puzzle
    alert("Félicitations, vous gagnez!");
  }
  
  //check to see if the user's solution matches the actual solution
  function compare() {
    for (let i=0; i<board.length; i++) {
      if (board[i] == solution[i]) {
        continue;
      }
      if (board[i] != solution[i]) {
        let ab = document.getElementById(i);
        ab.value = '';
      }
    }
    youWin()
  }