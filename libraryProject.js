function Library(name, size) {
   this.name = name;
   this.size = size;
   this.shelves = [];
};
 
Library.prototype.getInfo = function() {
    return this.name + ' has the capacity for ' + this.size + ' shelves';
};
 
Library.prototype.reportBooks = function() {
    var bookString = '';
    for(var i = 0; i < this.shelves.length; i++) {
        for(var j = 0; j < this.shelves[i].books.length; j++) {
            bookString += this.shelves[i].books[j].name + ', ';
        }
        
    }
    return this.name + ' has the following books: ' + bookString;
};

function Shelf(name, size, library) {
   this.name = name;
   this.size = size;
   this.books = [];
   this.library = library.name;  
};

Shelf.prototype.addToLibrary = function(library) {
    if(!library) {
        console.log("ERROR");
    }
    
    if(library.shelves.length < library.size) {
        library.shelves.push(this); 
    }
};

Shelf.prototype.removeFromLibrary = function(library) {
    for(var i = 0; i < library.shelves.length; i++) {
        if(library.shelves[i].name === this.name) {
            library.shelves.splice(i,1);
        }
    }
};

function Book(name, author) {
   this.name = name;
   this.author = author;
};

Book.prototype.unshelf = function(shelf) {
    for(var i = 0; i < shelf.books.length; i++) {
        if(shelf.books[i].name === this.name) {
            shelf.books.splice(i,1);
        }
    }
};

Book.prototype.enshelf = function(shelf) {
    if(!shelf) {
        console.log("ERROR");
    }
    
    if(shelf.books.length < shelf.size) {
        shelf.books.push(this); 
    }
};

/* 
var firstLibrary = new Library("Library", 30);
var firstShelf = new Shelf("Shelf", 7, "Libary");
var firstBook = new Book("Alice in Wonderland", "Lewis Carroll");
var secondBook = new Book("Lord of the Flies", "William Golding");

firstBook.enshelf(firstShelf);
secondBook.enshelf(firstShelf);
firstShelf.addToLibrary(firstLibrary);
firstLibrary.reportBooks();
*/


