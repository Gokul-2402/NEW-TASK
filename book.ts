  export class Book{

    book_name :string;
    book_author : string;
    book_id : number;
    
    constructor(bookname:string,bookauthor:string, bookid:number){
        this.book_name = bookname;
        this.book_author = bookauthor;
        this.book_id =bookid;



    }
    bookdetails(){
      console.log(`BOOK NAME: ${this.book_name}`);
      console.log(`BOOK AUTHOR: ${this.book_author}`);
      console.log(`BOOK ID: ${this.book_id}`);
    }

    }

 