import { Book } from "./book";
import { library } from "./library";
 
let lib = new library();
 
let book1 = new Book("Science","Rajapandi",101);
let book2 = new Book("Maths","Gokul",102);
 
lib.addbook(book1);
lib.addbook(book2);
 
console.log("----------------Book List ---------------");
 
lib.listbooks();
 
lib.removeBook(102);
 
console.log("----------------After Removing List --------------");
lib.listbooks();
 