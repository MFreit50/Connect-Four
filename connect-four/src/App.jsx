import { useState, useEffect} from 'react'
import './App.css'
import BoardRow from './components/BoardRow';

function App() {
  const [state, setState] = useState(
    {
      board: [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
      ], //replace this with fillBoard() later
      symbol: true, //keeps track of whose turn it is
      chipStack: [0,0,0,0,0,0,0], //keeps track of how high the chipStack are stacked in a column
      turn: 0
    })

  function fillBoard() {//fills array with blank spaces
    console.log("fill board");
    let boardArr = new Array(6);
    for (let i = 0; i < boardArr.length; i++) {
        boardArr[i] = new Array(7).fill(null);
    }
    return boardArr;
  }

  const placeMove = (columnNum) => {
    console.log("place move");
    if(state.turn != 43 && state.chipStack[columnNum] < 6) { //consider the move only if the column height has not been reached
      state.board[state.board.length - state.chipStack[columnNum] - 1][columnNum] = state.symbol;
      state.board.chipStack[columnNum]++;
      if(victoryCheck(columnNum)) {
        gameResult()
      }   
      state.symbol = !state.symbol;
      state.turn++;
    }

    if(state.turn === 43) {
      initiateTie();
    }
  }

  const victoryCheck = (columnNum) => { 
    console.log("victory check");
    let c1=false,c2=false,r=false,dR1=false,dR2=false,dL1=false,dL2=false
    let height = state.board.length-1;
    let length = state.board[0].length-1;
    let i = height - state.chipStack[columnNum]+1;

    let row = 1, column = 1, diagonalRight = 1, diagonalLeft = 1;
    for(let j = 1; j < 4 && !(c1&&c2&&r&&dR1&&dR2&&dL1&&dL2); j++){

        //counts columns
        if(!c1 && columnNum + j <= length && state.board[i][columnNum + j] === state.symbol){ //to right
            column++;
        }else{
            c1 = true;//stops counting once streak ends
        }
        if(!c2 && columnNum - j >= 0 && state.board[i][columnNum - j] === state.symbol){ //to left
            column++;
        }else{
            c2 = true;
        }

        //counts rows
        if(!r && i + j <= height && state.board[i + j][columnNum] === state.symbol){ //down
            row++;
        }else{
            r = true;
        }

        //counts diagonals
        if(!dR1 && columnNum + j <= length && i + j <= height && state.board[i + j][columnNum + j] === state.symbol){ //to top right
            diagonalRight++;
        }else{
            dR1 = true;
        }
        if(!dR2 && columnNum - j >= 0 && i - j >= 0 && state.board[i-j][columnNum-j] === state.symbol){ //to bottom left
            diagonalRight++;
        }else{
            dR2 = true;
        }
        if(!dL1 && columnNum - j >= 0 && i + j <= height && state.board[i+j][columnNum-j] === state.symbol){ //to top left
            diagonalLeft++;
        }else{
            dL1 = true;
        }
        if(!dL2 && columnNum + j <= length && i - j >= 0 && state.board[i - j][columnNum + j] === state.symbol){ //to bottom right
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
          {state.board.map((row, id) => (
            <BoardRow row={row} placeMove={placeMove} key={id}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App;
