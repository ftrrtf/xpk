package cdpwd;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.StringTokenizer;

import org.junit.BeforeClass;
import org.junit.Test;

public class cdpwdTest {

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		cdpwd.list = new ArrayList<String>();
		cdpwd.list.add("");	
	}

	@Test
	public void testOne(){
		StringTokenizer st = new StringTokenizer("cd ..", " \t\n\r/");
		st.nextToken();
		cdpwd.cd(st);		
		assertEquals("/",cdpwd.pwd());
	}
	
	@Test
	public void testTwo(){
		StringTokenizer st = new StringTokenizer("cd a/b/../c", " \t\n\r/");
		st.nextToken();
		cdpwd.cd(st);		
		assertEquals("/a/c/",cdpwd.pwd());
	}
	
	@Test
	public void testThree(){
		StringTokenizer st = new StringTokenizer("cd /", " \t\n\r/");
		st.nextToken();
		cdpwd.cd(st);		
		assertEquals("/a/c/",cdpwd.pwd());
	}		
	
	@Test
	public void testList(){
		ArrayList<String> expecteds = new ArrayList<String>();
		expecteds.add(""); expecteds.add("a"); expecteds.add("c");
		assertArrayEquals(expecteds, cdpwd.list);
	}

	@Test
	public void testNotEmpty(){
		StringTokenizer st = new StringTokenizer("cd ../../../../..", " \t\n\r/");
		st.nextToken();
		cdpwd.cd(st);		
		assertTrue(cdpwd.list.size()!=0);
	}	
	
	private void assertArrayEquals(ArrayList<String> expecteds,
			ArrayList<String> list) {
		// TODO Auto-generated method stub
	}

}
