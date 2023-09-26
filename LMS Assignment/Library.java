package libraryAssignment;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
import java.util.Map.Entry;

class Book extends Library {//inheritance
    private static Book instance = null;
    private Scanner sc = new Scanner(System.in);
    String title, author;
    int isbn, quantity;
    Map<Integer, String> mp = new HashMap<>();
    private ArrayList<String> booklist = new ArrayList<>();
    private ArrayList<String> borrowbook = new ArrayList<>();
    Map<String,Integer>qcount=new HashMap<>();
    private Book() {
    }

    public static Book getInstance() {
        if (instance == null) {
            instance = new Book();
        }
        return instance;
    }

    public ArrayList<String> getborrowbook() {
        return borrowbook;
    }
    public void addborrowbokk(String value) {
    	borrowbook.add(value);
    }
    public void removeborrowbook(String value) {
    	borrowbook.remove(value);
    }
    public ArrayList<String> getblist() {
        return booklist;
    }

    public void removlist(String value) {
        booklist.remove(value);
    }

    public void addlist(String value) {
        booklist.add(value);
    }

    void addnewbook(int value) {
    	if(value==1) {
    	System.out.println("please press enter");
    	}
    	String k=sc.nextLine();
        System.out.println("Enter title:");
        String titlename = sc.nextLine();
        System.out.println("Enter author:");
        String authorname = sc.nextLine();
        System.out.println("Enter quantity [Number]:");
        int qnum = sc.nextInt();
        sc.nextLine();
        System.out.println("Enter isbn[Number]:");
        int isbnnum = sc.nextInt();
        qcount.compute(titlename, (key,val)->(val==null)?1:val+1);
        mp.put(isbnnum, titlename);
        
        booklist.add(titlename);
    }

    void removebook() {
    	displayBorrowedBooks();
        System.out.println("Enter isbn number of the book");
        int isbnnum = sc.nextInt();
        qcount.compute(mp.get(isbnnum), (key,val)->(val==0)?0:val-1);
        if (!mp.containsKey(isbnnum)) {
            System.out.println(isbnnum + " not found");
        } else {
            booklist.remove(mp.get(isbnnum));
            mp.remove(isbnnum);
        }
    }

    void displaybooks(int value) {
    	if(value==1) {
    		System.out.println("please press enter");
    	}
        if (mp.isEmpty()) {
            System.out.println("no books to display");
        } else {
        	  System.out.println("The available books are:");
              System.out.println("ID    BOOK    ISBN");
              int i=0;
              for (Map.Entry<Integer, String> e : mp.entrySet()) {
              	i++;
                  System.out.println(i+"     "+e.getValue()+"      "+e.getKey());
              }
        }
    }
}



class Patron extends Library {//Inheritance inheriting Library methods and features
    private static Patron instance = null;

    String patron;
    int id;
    Scanner sc = new Scanner(System.in);
    Library lbj=new Library();
    Map<Integer, String> pmap = new HashMap<>();
    private Map<String, ArrayList<String>> borrowedBooksForPatrons = new HashMap<>();

    private ArrayList<String> plist = new ArrayList<>();
    private ArrayList<String> borrowpatron = new ArrayList<>();

    private Patron() {
        
    }
    public static Patron getInstance() {
        if (instance == null) {
            instance = new Patron();
        }
        return instance;
    }
    //getter and setter methods for not accessing arraylists list directly by making private
    public ArrayList<String> getborrowpatron() {
        return borrowpatron;
    }
    public void addborrowpatron(String value) {
    	borrowpatron.add(value);
    }
    public void removeborrowpatron(String value) {
    	borrowpatron.remove(value);
    }
    public ArrayList<String> getplist() {
        return plist;
    }

    public void removlist(String value) {
        plist.remove(value);
    }

    public void addlist(String value) {
        plist.add(value);
    }

    void addnewpatron(int value) {
    	if(value==1){
    	System.out.println("please press enter");}
    	String h= sc.nextLine();
        System.out.println("Enter patron");
        String pat = sc.nextLine();
        System.out.println("Enter id[Number]:");
        int id = sc.nextInt();
        pmap.put(id, pat);
        plist.add(pat);
    }

    void removepatron() {
    	
    	lbj.displayBorrowedBooks();
        System.out.println("Enter the id of the patron");
        int rid = sc.nextInt();
        if (pmap.isEmpty()) {
            System.out.println("no patrons found");
        } else {
            plist.remove(pmap.get(rid));
            pmap.remove(rid);
        }
    }

    void displaypatrons(int value) {
    	if(value==1) {
    	System.out.println("please press enter");}
    	Map<String,ArrayList<String>>mppp=lbj.getbbooks();
//    	System.out.println(mppp.size());
        System.out.println("The available patrons are:");
        System.out.println("ID   PATRON   PATRONID");
        int i=0;
        for (Map.Entry<Integer, String> e : pmap.entrySet()) {
        	i++;
            System.out.println(i+"   "+e.getValue()+"   "+e.getKey());
        }
        
        displayBorrowedBooks();
        
        
    }
}

public class Library implements Borrowable {
	  private Map<String, ArrayList<String>> borrowedBooks = new HashMap<>();
	  public void diborrow() {
		  for(Entry<String, ArrayList<String>> en:borrowedBooks.entrySet()) {
			  System.out.println(en.getValue());
		  }
	  }
	  public Map<String,ArrayList<String>> getbbooks() {
		  return borrowedBooks;
	  }
	 public void displayBorrowedBooks() {
	        Patron pobject = Patron.getInstance();
	        Book bobject = Book.getInstance();
	      
	        ArrayList<String> borrowedPatrons = pobject.getborrowpatron();
	        ArrayList<String> borrowedBooksList = bobject.getborrowbook();
	        
	        for (int i = 0; i < borrowedPatrons.size(); i++) {
	            String patron = borrowedPatrons.get(i);
	            String book = borrowedBooksList.get(i);
	            
	            borrowedBooks.computeIfAbsent(patron, k -> new ArrayList<>()).add(book);
	        }
	        
	        System.out.println("Borrowed Books by Patrons:");
//	        System.out.println(borrowedBooks);
	        for (Map.Entry<String, ArrayList<String>> entry : borrowedBooks.entrySet()) {
	            String patron = entry.getKey();
	            ArrayList<String> books = entry.getValue();
	            
	            System.out.println("Patron: " + patron);
	            System.out.println("Borrowed Books: " + books);
	            System.out.println();
	        }
	    }
    public static void main(String[] args) {
        ArrayList<String> borrowbook = new ArrayList<>();
        ArrayList<String> borrowpatron = new ArrayList<>();
        Book obj = Book.getInstance();
        Patron pobj = Patron.getInstance();
        Library bobj = new Library();
        int one=0,two=0,three=0,four=0,five=0,six=0,seven=0,eight=0;
        while (true){
            System.out.println("***********************\n");
            System.out.println("choose option:");
            System.out.println("1. add a new book");
            System.out.println("2. remove a book by isbn");
            System.out.println("3. display the list of available books");
            System.out.println("4. Add a new patron");
            System.out.println("5. remove a patron");
            System.out.println("6. display the list of available patrons");
            System.out.println("7. borrow a book");
            System.out.println("8. return a book");
            System.out.println("9. Exit the program");

            Scanner sc = new Scanner(System.in);
            System.out.println("Enter option number");
            int optionnum = sc.nextInt();
            switch (optionnum) {
                case 1:
                	one++;
                    obj.addnewbook(one);
                    break;
                case 2:
                	two++;
                    obj.removebook();
                    break;
                case 3:
                	three++;
                    obj.displaybooks(three);
                    break;
                case 4:
                	four++;
                    pobj.addnewpatron(one);
                    break;
                case 5:
                	five++;
                    pobj.removepatron();
                    break;
                case 6:
                	six++;
                    pobj.displaypatrons(six);
                    break;
                case 7:
                	seven++;
                    bobj.borrow();
                    break;
                case 8:
                	eight++;
                    bobj.returnbook();
                    break;
                case 9:
                    System.out.println("you exited!!!!!!!!!!!!!!!!!!");
                    break;
            }
        }
    }

    public void borrow() {
    	    Scanner sc = new Scanner(System.in);
    	    Patron pobject = Patron.getInstance();
    	    Book bobject = Book.getInstance();
    	    ArrayList<String> bli = bobject.getblist();
    	    ArrayList<String> patlist = pobject.getplist();

    	    if (bli.isEmpty()) {
    	        System.out.println("No books available to borrow.");
    	        return;
    	    }

    	    if (patlist.isEmpty()) {
    	        System.out.println("No patrons available to borrow.");
    	        return;
    	    }
           
    	    System.out.println("The Available books are:");
    	    System.out.println("ID  Book");
    	    for (int i = 0; i < bli.size(); i++) {
    	        System.out.println((i + 1) + "  " + bli.get(i));
    	    }

    	    System.out.println("\nThe Available patrons are:");
    	    System.out.println("ID  Patron");
    	    for (int j = 0; j < patlist.size(); j++) {
    	        System.out.println((j + 1) + "  " + patlist.get(j));
    	    }

    	    System.out.println("Enter a patron ID number");
    	    int pid = sc.nextInt();
    	    if (pid < 1 || pid > patlist.size()) {
    	        System.out.println("Invalid patron ID.");
    	        return;
    	    }

    	    System.out.println("Enter a book ID");
    	    int bid = sc.nextInt();
    	    if (bid < 1 || bid > bli.size()) {
    	        System.out.println("Invalid book ID.");
    	        return;
    	    }

    	    String selectedPatron = patlist.get(pid - 1);
    	    String selectedBook = bli.get(bid - 1);

    	    boolean patronExists = pobject.getplist().contains(selectedPatron);
    	    boolean bookExists = bobject.getblist().contains(selectedBook);

    	    if (patronExists && bookExists) {
    	            pobject.addborrowpatron(selectedPatron);
    	            bobject.addborrowbokk(selectedBook);
    	            bobject.removlist(selectedBook);
    	            System.out.println(selectedPatron + " " + selectedBook + " borrowed");
    	            borrowedBooks.computeIfAbsent(selectedPatron, k -> new ArrayList<>()).add(selectedBook); 
    	        }
    	     else {
    	        System.out.println(selectedPatron + " " + selectedBook + " not found");
    	    }
    	

    }

    @Override
    public void returnbook() {
    	 Scanner sc = new Scanner(System.in);
    	    System.out.println("Enter a patron");
    	    String pname = sc.nextLine();
    	    System.out.println("Enter a bookname");
    	    String bname = sc.nextLine();
    	    Patron pobject = Patron.getInstance();
    	    Book bobject = Book.getInstance();
    	    ArrayList<String> checkpatron = pobject.getborrowpatron();
    	    ArrayList<String> checkbook = bobject.getborrowbook();
    	    boolean pn = checkpatron.contains(pname);
    	    boolean bn = checkbook.contains(bname);
    	    
    	    if (pn && bn) {
    	        pobject.removeborrowpatron(pname);
    	        bobject.removeborrowbook(bname);
    	        bobject.addlist(bname);
    	        System.out.println(pname + " " + bname + " returned");
    	    } else {
    	        System.out.println(pname + " " + bname + " cannot be returned");
    	    }
    }
}

interface Borrowable {//Borrowable interface with borrow() and returnbook() methods
    void borrow();

    void returnbook();
}
