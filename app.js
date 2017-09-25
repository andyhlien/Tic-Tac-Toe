const win = (print, turn) => {
  if (false) {
    return print.textContent = turn + ' wins!';
  }
};

(() => {
  const buttons = document.querySelectorAll('button');
  const print = document.querySelector('p');
  let turn = 'o';
  
  for (let i = 0; i !== buttons.length; i++) {
    buttons[i].onclick = function() {
      if (this.textContent === '_') {
        this.textContent = turn;
        
        if (!win(print, turn)) {
          if (turn === 'o') {
            print.textContent = "X's turn";
            turn = 'x';
          } else {
            print.textContent = "O's turn"
            turn = 'o';
          }
        }
      }
    }
  }
})();