const Book = require("./Book");

class EBook extends Book {
  constructor(title, author, publicationYear, fileFormat) {
    super(title, author, publicationYear);
    this._fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(newFormat) {
    if (typeof newFormat === "string") {
      this._fileFormat = newFormat;
    } else {
      console.error("You entered a number, it should be text only");
    }
  }

  printInfo() {
    console.log(
      `This is the book: ${this.title} of the ${this.author} which was written in ${this.publicationYear}.The file format is: ${this.fileFormat}`
    );
  }

  static createEBookFromBook(book, fileFormat) {
    if (book instanceof Book && typeof fileFormat === "string") {
      return new EBook(
        book.title,
        book.author,
        book.publicationYear,
        fileFormat
      );
    } else {
      console.error("You can't create EBook with such parameters");
      return null;
    }
  }
}

module.exports = EBook;
