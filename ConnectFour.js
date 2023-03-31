



let board = fillBoard; //board is a 2D array
game(board) //start the game

const fillBoard = () => { //fills board with empty spaces
	let myArray = new Array(6);
	for (let i = 0; i < 6; i++) {
  		myArray[i] = new Array(7).fill(" ");
	}
}

const printBoard = (board) => { 

	//unfactored java code
	console.log("\n 1   2   3   4   5   6   7\n---------------------------");
	for(let i = 0; i < arr.length; i++){
		for (let j = 0; j < arr[0].length; j++){
			console.log(" " + arr[i][j] + " |");
		}
		console.log("\n---------------------------");
	}
}

/*

const game = (board) => {
	boolean player1 = true;
	Scanner sc = new Scanner(System.in);
	String s;
	int turn = 1;
	int[] checkers = {0,0,0,0,0,0,0}; //keeps track of how high the checkers are stacked in a column
	int moveP;

	while(turn!= 43){
		if(player1){
			s = "O";
		}else{
			s = "X";
		}
		printArr(board);
		while(true){
			int move = sc.nextInt();
			move--;
			if(move > 6 || move < 0 || checkers[move] >= 6){
				System.out.println("invalid move try again");
				continue;
			}
			moveP = move;
			board = placeMove(board, s, move, checkers);
			break;
		}
		if(victoryCheck(board, s,checkers, moveP)){
			break;
		}
		player1 = !player1; //switches player to opposite condition
		turn++;
	}
	printArr(board);
	if(turn == 43)
		System.out.println("player 1 and 2 tied");
	else{
		int win = 1; //used to refer to player 1 or 2
		if(!player1)
			win++;
		System.out.println("Player " + win + " won!!!");
	}
	System.exit(0);
}



























	public static void game(String[][] board){
		boolean player1 = true;
		Scanner sc = new Scanner(System.in);
		String s;
		int turn = 1;
		int[] checkers = {0,0,0,0,0,0,0}; //keeps track of how high the checkers are stacked in a column
		int moveP;

		while(turn!= 43){
			if(player1){
				s = "O";
			}else{
				s = "X";
			}
			printArr(board);
			while(true){
				int move = sc.nextInt();
				move--;
				if(move > 6 || move < 0 || checkers[move] >= 6){
					System.out.println("invalid move try again");
					continue;
				}
				moveP = move;
				board = placeMove(board, s, move, checkers);
				break;
			}
			if(victoryCheck(board, s,checkers, moveP)){
				break;
			}
			player1 = !player1; //switches player to opposite condition
			turn++;
		}
		printArr(board);
		if(turn == 43)
			System.out.println("player 1 and 2 tied");
		else{
			int win = 1; //used to refer to player 1 or 2
			if(!player1)
				win++;
			System.out.println("Player " + win + " won!!!");
		}
		System.exit(0);
	}
	public static String[][] placeMove(String[][] arr, String s, int move, int[] checkers){
		arr[arr.length-checkers[move]-1][move] = s;
		checkers[move]++;
		return arr;
	}
	public static boolean victoryCheck(String[][] arr, String s, int[] checkers, int move){//checks to see if a player won
		boolean[] pause = new boolean[8];
		int height = arr.length-1;
		int length = arr[0].length-1;
		int i = height - checkers[move] + 1; //gets vertical position of move
		int row = 1, col = 1, diagR = 1, diagL = 1;
			for(int j = 1; j < arr[0].length; j++){
				if(pause[0] && pause[1] && pause[2] && pause[3] && pause[4] && pause[5] && pause[6] && pause[7])
					break;
				System.out.println(j);

			//counts rows
				if(!pause[0] && move + j <= length && arr[i][move + j].equals(s)){ //to right
					row++;
				}else{
					pause[0] = true;//stops counting once streak ends
				}
				if(!pause[1] && move - j >= 0 && arr[i][move - j].equals(s)){ //to left
					row++;
				}else{
					pause[1] = true;
				}
			//counts columns
				if(!pause[2] && i + j <= height && arr[i + j][move].equals(s)){ //up
					col++;
				}else{
					pause[2] = true;
				}
				if(!pause[3] && i - j >= 0 && arr[i - j][move].equals(s)){ //down
					col++;
				}else{
					pause[3] = true;
				}
			//counts diagonals
				if(!pause[4] && move + j <= length && i + j <= height && arr[i + j][move + j].equals(s)){ //to top right
					diagR++;
				}else{
					pause[4] = true;
				}
				if(!pause[5] && i - j >= 0 && move - j >= 0 && arr[i-j][move-j].equals(s)){ //to bottom left
					diagL++;
				}else{
					pause[5] = true;
				}
				if(!pause[6] && move - j >= 0 && i + j <= height && arr[i+j][move-j].equals(s)){ //to top left
					diagL++;
				}else{
					pause[6] = true;
				}
				if(!pause[7] && move + j <= length && i - j >= 0 && arr[i - j][move + j].equals(s)){ //to bottom right
					diagR++;
				}else{
					pause[7] = true;
				}
			}
			if(row >= 4 || col >= 4 || diagR >= 4 || diagL >= 4)//this needs to be inside nested loop
				return true;
		return false;

	}
}