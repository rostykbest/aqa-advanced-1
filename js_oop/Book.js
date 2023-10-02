class Book {
  constructor(title, author, publicationYear) {
    this._title = title;
    this._author = author;
    this._publicationYear = publicationYear;
  }

  get title() {
    return this._title;
  }

  set title(newTitle) {
    if (typeof newTitle === "string") {
      this._title = newTitle;
    } else {
      console.error("Only letters are possible in the title");
    }
  }

  get author() {
    return this._author;
  }

  set author(newAuthor) {
    if (typeof newAuthor === "string") {
      this._author = newAuthor;
    } else {
      console.error("Only letters are possible in the name of the author");
    }
  }

  get publicationYear() {
    return this._publicationYear;
  }

  set publicationYear(newYear) {
    if (typeof newYear === "number" && newYear > 0) {
      this._publicationYear = newYear;
    } else {
      console.error("The year should be greater than 0");
    }
  }

  printInfo() {
    console.log(
      `This is the book: ${this._title} of the ${this._author} which was written in: ${this._publicationYear}`
    );
  }

  static findLatestBook(books) {
    if (!Array.isArray(books) || books.length === 0) {
      console.error("The input should be a non-empty array of Book instances");
      return null;
    }

    let latestBook = books[0];
    for (const book of books) {
      if (
        book instanceof Book &&
        book.publicationYear < latestBook.publicationYear
      ) {
        latestBook = book;
      }
    }

    return latestBook;
  }
}

module.exports = Book;
