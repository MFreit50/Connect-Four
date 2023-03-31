let board = fillBoard; //board is a 2D array
game(board) //start the game

const fillBoard = () => { //fills board with empty spaces
	const board = new Array(6);
	for (let i = 0; i < 6; i++) {
  		board[i] = new board(7).fill(" ");
	}
	return board;
}

const printBoard = (board) => { 

	console.log("\n 1   2   3   4   5   6   7\n---------------------------");
	for(let i = 0; i < board.length; i++){
		for (let j = 0; j < board[0].length; j++){
			console.log(" " + board[i][j] + " |");
		}
		console.log("\n---------------------------");
	}
}

const game = (board) => {
	const player1 = true;
	const symbol;
	const turn = 1;
	const checkers = [0,0,0,0,0,0,0]; //keeps track of how high the checkers are stacked in a column
	let moveP;

	while(turn != 43){ //game loop

		if(player1){ 
			symbol = 'O';
		} else {
			symbol = 'X';
		}

		printBoard(board);

		while(true){
			let move = prompt("Choose a column you would like to make a move in");
			move = parseInt(move)--;
			if(move > 6 || move < 0 || checkers[move] >= 6){
				console.log("Invalid move, please try again");
				continue;
			}
			moveP = move; //is moveP redundant?
			board = placeMove(board, symbol, move, checkers);
			break;
		}
		
		if(victoryCheck(board, symbol, checkers, moveP)){
			break;
		}
		player1 = !player1; //switches player to opposite condition
		turn++;
	}

	printBoard(board);

	if(turn == 43)
		console.log("player 1 and 2 tied");
	else {
		let win = 1; //used to refer to player 1 or 2
		if(!player1)
			win++;
		console.log("Player " + win + " won!!!");
	}
	process.exit(0);
}

const placeMove = (board, symbol, move, checkers) => {
	board[board.length-checkers[move] - 1][move] = symbol;
	checkers[move]++;
	return board;
}

const victoryCheck = (board, symbol, checkers, move) => { //checks to see if a player won
	const pause = new Array(8);
	let height = board.length-1;
	let length = board[0].length-1;
	let i = height - checkers[move] + 1;
	let row = 1, col = 1, diagR = 1, diagL = 1;
		for(let j = 1; j < board.[0].length; j++){
			if(pause[0] && pause[1] && pause[2] && pause[3] && pause[4] && pause[5] && pause[6] && pause[7])
					break;
			console.log(j);

			//counts rows
			if(!pause[0] && move + j <= length && board[i][move + j].equals(symbol)){ //to right
				row++;
			}else{
				pause[0] = true;//stops counting once streak ends
			}
			if(!pause[1] && move - j >= 0 && board[i][move - j].equals(symbol)){ //to left
				row++;
			}else{
				pause[1] = true;
			}

			//counts columns
			if(!pause[2] && i + j <= height && board[i + j][move].equals(symbol)){ //up
				col++;
			}else{
				pause[2] = true;
			}
			if(!pause[3] && i - j >= 0 && board[i - j][move].equals(symbol)){ //down
				col++;
			}else{
				pause[3] = true;
			}

			//counts diagonals
			if(!pause[4] && move + j <= length && i + j <= height && board[i + j][move + j].equals(symbol)){ //to top right
				diagR++;
			}else{
				pause[4] = true;
			}
			if(!pause[5] && i - j >= 0 && move - j >= 0 && board[i-j][move-j].equals(symbol)){ //to bottom left
				diagL++;
			}else{
				pause[5] = true;
			}
			if(!pause[6] && move - j >= 0 && i + j <= height && board[i+j][move-j].equals(symbol)){ //to top left
				diagL++;
			}else{
				pause[6] = true;
			}
			if(!pause[7] && move + j <= length && i - j >= 0 && board[i - j][move + j].equals(symbol)){ //to bottom right
				diagR++;
			}else{
				pause[7] = true;
			}
		}

	if(row >= 4 || col >= 4 || diagR >= 4 || diagL >= 4)//this needs to be inside nested loop
			return true;
	return false;
}
























	