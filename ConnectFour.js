function fillBoard() {//fills array with blank spaces
    let boardArr = new Array(6);
    for (let i = 0; i < boardArr.length; i++) {
        boardArr[i] = new Array(7).fill(" ");
    }
    return boardArr;
}

const printBoard = (board) => { //print board for console
    console.log("\n 1   2   3   4   5   6   7\n---------------------------");
    for(let i = 0; i < board.length; i++){
        let row = "";
        for (let j = 0; j < board[0].length; j++){
            row += " " + board[i][j] + " |";
        }
        console.log(row);
        console.log("---------------------------");
    }
}

const placeMove = (board, symbol, move, checkers) => {
	board[board.length-checkers[move] - 1][move] = symbol;
	checkers[move]++;
	return board;
}

const victoryCheck = (board, symbol, checkers, move) => { 
    let c1=false,c2=false,r=false,dR1=false,dR2=false,dL1=false,dL2=false
    let height = board.length-1;
    let length = board[0].length-1;
    let i = height - checkers[move]+1;

    let row = 1, column = 1, diagonalRight = 1, diagonalLeft = 1;
    for(let j = 1; j < 4 && !(c1&&c2&&r&&dR1&&dR2&&dL1&&dL2); j++){

        //counts columns
        if(!c1 && move + j <= length && board[i][move + j] === symbol){ //to right
            column++;
        }else{
            c1 = true;//stops counting once streak ends
        }
        if(!c2 && move - j >= 0 && board[i][move - j] === symbol){ //to left
            column++;
        }else{
            c2 = true;
        }

        //counts rows

        if(!r && i + j <= height && board[i + j][move] === symbol){ //down
            row++;
        }else{
            r = true;
        }

        //counts diagonals
        if(!dR1 && move + j <= length && i + j <= height && board[i + j][move + j] === symbol){ //to top right
            diagonalRight++;
        }else{
            dR1 = true;
        }
        if(!dR2 && move - j >= 0 && i - j >= 0 && board[i-j][move-j] === symbol){ //to bottom left
            diagonalRight++;
        }else{
            dR2 = true;
        }
        if(!dL1 && move - j >= 0 && i + j <= height && board[i+j][move-j] === symbol){ //to top left
            diagonalLeft++;
        }else{
            dL1 = true;
        }
        if(!dL2 && move + j <= length && i - j >= 0 && board[i - j][move + j] === symbol){ //to bottom right
            diagonalLeft++;
        }else{
            dL2 = true;
        }
    }
    console.log("Row: " + row + "\nColumn: " + column + "\nRight Diagonal: " + diagonalRight + "\nLeft Diagonal: " + diagonalLeft);//used for debugging purposes
    return (row >= 4 || column >= 4 || diagonalRight >= 4 || diagonalLeft >= 4);
}

const game = (board) => {
	let player1 = true;
	let turn = 1;
	const checkers = [0,0,0,0,0,0,0]; //keeps track of how high the checkers are stacked in a column
	let move;
	const prompt = require('prompt-sync')();
	while(turn != 43){ //game loop
		let symbol = player1 ? 'O' : 'X'; //if player1 is(?) true(O):false(X) (ternary operator)
		printBoard(board);

		while (true) {
		  move = prompt("Choose a column you would like to make a move in");
		  move = parseInt(move)-1; // subtract 1 to make it zero-indexed
		  if (move > 6 || move < 0 || checkers[move] >= 6) {
		    console.log("Invalid move, please try again");
		  } else {
		    board = placeMove(board, symbol, move, checkers);
		    break;
		  }
		}
		
		if(victoryCheck(board, symbol, checkers, move)){
			break;
		}
		player1 = !player1; //switches player to opposite condition
		turn++;
	}

	printBoard(board);

	if(turn == 43)
		console.log("Player 1 and Player 2 tied");
	else {
		let win = 1; //used to refer to player 1 or 2
		if(!player1)
			win++;
		console.log("Player " + win + " won!!!");
	}
	process.exit(0);
}
let board = fillBoard(); //board is a 2D array
game(board) //start the game
