package cdpwd;
import java.util.*;

/**
 * This class implements work of commands cd and pwd.
 * @author Anna
 * @version 1.0
 */
public class cdpwd {

	static ArrayList<String> list;  
	
	/**
	 * This method implements the command cd. 
	 * @param st string that was broken into tokens - names of folders.
	 */
	public static void cd(StringTokenizer st){   
		while(st.hasMoreTokens()){   
			list.add(st.nextToken());  
			if(list.get(list.size()-1).equals("..")){
				if(list.size()==2){
					System.out.println("Error");
					list.remove(list.size()-1);
				} else {
					list.remove(list.size()-1);
					list.remove(list.size()-1);			
				}
			}					
		}
	}
	
	/**
	 * This method implements the command pwd. 
	 * @return current directory
	 */
	public static String pwd(){
    	String way = "";
	    for(String t: list){
		    way=way+t+"/";
	    }		
	    return way;		
	}	
	
	/**
	 * This method determines which command must be executed. 
	 */
	public static void comand(){	
		Scanner sc = new Scanner(System.in);		
		StringTokenizer st = new StringTokenizer(sc.nextLine(), " \t\n\r/");
		String c=st.nextToken();		
		if(c.equals("pwd")){
			System.out.println(pwd());
		}		
		if(c.equals("cd")){
			cd(st);						
		}	
		if(c.equals("exit")){
			return;
		}		
		comand();
	}
	
	/**
	 * The main (start) method.
	 * @param args
	 */
	public static void main(String[] args){
		// TODO Auto-generated method stub	
		list = new ArrayList<String>();
		list.add("");
		comand(); 
	}
	
}



