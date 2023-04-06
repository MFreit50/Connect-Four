import { useState, useEffect} from 'react'
import './App.css'
import BoardRow from './components/BoardRow';

function App() {

  const [game, setGame] = useState({
    symbol: true,
    chipStack: [0,0,0,0,0,0,0],
    turn: 0
  });

  const [board, setBoard] = useState(() => fillBoard());

  function fillBoard() {
    console.log("fill board"); //testing
    let boardArr = new Array(6);
    for (let i = 0; i < boardArr.length; i++) {
      boardArr[i] = new Array(7).fill(' ');
    }
    return boardArr;
  }

  /*
  const placeMove = (columnNum) => {
    console.log("place move at ", columnNum);
    if (game.turn !== 43 && game.chipStack[columnNum] < 6) { //consider the move only if the column height has not been reached
      let newBoard = [...board];
      newBoard[board.length - game.chipStack[columnNum] - 1][columnNum] = game.symbol;
      setBoard(newBoard);

      setGame(prevGame => {
        let newGame = {...prevGame};
        newGame.chipStack[columnNum]++;
        console.log("chipStack", newGame.chipStack[columnNum]);
        if (victoryCheck(columnNum)) {
          gameResult();
        }
        newGame.symbol = !prevGame.symbol;
        newGame.turn++;
        return newGame;
      });
    }    

    if (game.turn === 43) {
      initiateTie();
    }
    console.log("CHIPSTACK", game.chipStack);
    console.log("BOARD", board);
    console.log("TUR", game.turn);
  }
  */

  const placeMove = (columnNum) => {
    console.log("place move at ", columnNum);
    if(game.turn !== 43 && game.chipStack[columnNum] < 6) {
      let newBoard = [...board];
      newBoard[newBoard.length - game.chipStack[columnNum] - 1][columnNum] = game.symbol;
  
      let newChipStack = [...game.chipStack];
      let newGameTurn = game.turn;
      newChipStack[columnNum]++;
      newGameTurn++;
  
      setBoard(newBoard);
      setGame(prevState => ({
        ...prevState,
        chipStack: newChipStack,
        symbol: !game.symbol,
        turn: newGameTurn
      }), () => {
        if(victoryCheck(columnNum)) {
          gameResult();
        }   
  
        if(game.turn === 42) {
          initiateTie();
        }
  
        console.log("BOARD", board);
        console.log("TURN", game.turn);
        console.log("CHIP STACK", newChipStack);
      });
    }
  }


  



  const victoryCheck = (columnNum) => { 
    console.log("victory check"); //testing
    console.log("COLUMN NUM IS: ", columnNum);
    let c1=false,c2=false,r=false,dR1=false,dR2=false,dL1=false,dL2=false
    let height = board.length-1;
    console.log("HEIGHT", height);
    let length = board[0].length-1;
    console.log("LENGTH" , length);
    let i = height - game.chipStack[columnNum]+1;
    console.log("i", i);

    let row = 1, column = 1, diagonalRight = 1, diagonalLeft = 1;
    for(let j = 1; j < 4 && !(c1&&c2&&r&&dR1&&dR2&&dL1&&dL2); j++){
        //counts columns
        if(!c1 && columnNum + j <= length && board[i][columnNum + j] === game.symbol){ //to right
            column++;
        }else{
            c1 = true;//stops counting once streak ends
        }
        if(!c2 && columnNum - j >= 0 && board[i][columnNum - j] === game.symbol){ //to left
            column++;
        }else{
            c2 = true;
        }

        //counts rows
        if(!r && i + j <= height && board[i + j][columnNum] === game.symbol){ //down
            row++;
        }else{
            r = true;
        }

        //counts diagonals
        if(!dR1 && columnNum + j <= length && i + j <= height && board[i + j][columnNum + j] === game.symbol){ //to top right
            diagonalRight++;
        }else{
            dR1 = true;
        }
        if(!dR2 && columnNum - j >= 0 && i - j >= 0 && board[i-j][columnNum-j] === game.symbol){ //to bottom left
            diagonalRight++;
        }else{
            dR2 = true;
        }
        if(!dL1 && columnNum - j >= 0 && i + j <= height && board[i+j][columnNum-j] === game.symbol){ //to top left
            diagonalLeft++;
        }else{
            dL1 = true;
        }
        if(!dL2 && columnNum + j <= length && i - j >= 0 && board[i - j][columnNum + j] === game.symbol){ //to bottom right
            diagonalLeft++;
        }else{
            dL2 = true;
        }
    }
    console.log("Row: " + row + "\nColumn: " + column + "\nRight Diagonal: " + diagonalRight + "\nLeft Diagonal: " + diagonalLeft);//used for debugging purposes
    return (row >= 4 || column >= 4 || diagonalRight >= 4 || diagonalLeft >= 4);
  }

  return (
    <div className="App">
      <table className="section borders">
        <thead>
        </thead>
        <tbody>
           {board && board.map((row, id) => (<BoardRow row={row} placeMove={placeMove} key={id}/>))}
        </tbody>
      </table>
    </div>
  )
}

export default App;
