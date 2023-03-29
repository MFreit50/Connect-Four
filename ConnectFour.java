import java.util.Scanner;
public class ConnectFour{
	public static void main(String[] args){
		String[][] board = fillBoard();
		game(board);

	}
	public static String[][] fillBoard(){//fills board empty spaces (or else command line prints out a bunch of null)
		String[][] arr = new String[6][7];
		for(int i = 0; i < arr.length; i++){
			for(int j = 0; j < arr[0].length; j++){
					arr[i][j] = " ";
			}
		}
		return arr;
	}
	public static void printArr(String[][] arr){//prints the board in a stylized manner
		System.out.println("\n 1   2   3   4   5   6   7\n---------------------------");
		for(int i = 0; i < arr.length; i++){
			for (int j = 0; j < arr[0].length; j++){
				System.out.print(" " + arr[i][j] + " |");
			}
			System.out.println("\n---------------------------");
		}
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
/*
	public static boolean victoryCheck(String[][] arr, String s){//checks to see if a player won
		//check row/collumn victory
			for(int i = 0; i < arr.length; i++){
				int countRow = 0;
				int countCol = 0;
				for(int j = 0; j < arr[0].length; j++){
					if(arr[i][j].equals(s))
						countRow++;
					else
						countRow = 0;//resets if opponent piece blocks a chain
					if(j < 6 && arr[j][i].equals(s))
						countCol++;
					else
						countCol = 0;
					if(countRow >= 4 || countCol >=4)
						return true;
				}
			}
		//check diagonal victory
			for(int i = 0; i < 2; i++){
				int countD1 = 0, countD2 = 0, countD3 = 0, countD4 = 0;//resets diagonal count
				for(int j = 0; j < 5 - i; j++){
					
					if(arr[5-j][1+j].equals(s))//counts from bottom left to top right
						countD1++;
					else
						countD1 = 0;
					if(arr[5-j][5-j].equals(s))//counts from bottom right to top left
						countD2++;
					else
						countD2 = 0;
					if(arr[0+j][1+j].equals(s))//counts from top left to bottom right
						countD3++;
					else
						countD3 = 0;
					if(arr[0+j][5-j].equals(s))//counts from top right to bottom left
						countD4++;
					else
						countD4 = 0;
					if(countD1 == 4 || countD2 == 4 || countD3 == 4 || countD4 == 4)//this needs to be inside nested loop
						return true;
				}
			}
		return false;

	}
*/
}