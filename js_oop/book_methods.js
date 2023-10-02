const Book = require("./Book");
const EBook = require("./EBook");

const book1 = new Book("Pride and Prejudice", "Jane Austen", 1918);
const book2 = new Book("Nineteen Eighty-Four", "George Orwell", 1949);

const ebook1 = new EBook(
  "Harry Potter and the Philosopher's Stone",
  "J.K. Rowling",
  1997,
  "EPUB"
);
const ebook2 = new EBook("The Great Gatsby", "Scott Fitzgerald", 1925, "EPUB");

console.log("All books info:");
console.log("--------------");
book1.printInfo();
console.log("--------------------------");
book2.printInfo();
console.log("--------------------------");
ebook1.printInfo();
console.log("--------------------------");
ebook2.printInfo();
console.log("--------------------------");

const books = [book1, book2, ebook1, ebook2];
const oldestYearBook = Book.findLatestBook(books);
console.log(oldestYearBook);
