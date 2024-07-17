class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(newBook) {
    const xbook = this.books.find((book) => book.title === newBook.title);
    if (xbook) {
      return "This book already exists.";
    } else {
      this.books.push(newBook);
      return "Book has been added.";
    }
  }

  rmBookByTitle(title) {
    console.log("Books before removal attempt:", this.listBooks());
    const titleIndex = this.books.findIndex((book) => book.title === title);
    if (titleIndex !== -1) {
      this.books.splice(titleIndex, 1);
      console.log("Books after removal:", this.listBooks());
      return `True - Book titled "${title}" was removed.`;
    } else {
      console.log("Books after failed removal attempt:", this.listBooks());
      return `False - Book titled "${title}" was not found and not removed.`;
    }
  }

  listBooks() {
    return this.books;
  }

  searchByTitle(criteria) {
    const { title = "", author = "", genre = "" } = criteria;
    const result = this.books.filter(
      (book) =>
        (title && book.title.includes(title)) ||
        (author && book.author.includes(author)) ||
        (genre && book.genre.includes(genre))
    );

    if (result.length > 0) {
      console.log(result);
    } else {
      console.log("not found");
    }

    return result;
  }

  displayAllBooks() {
    return this.books;
  }

  borrowingBook(title) {
    const b_book = this.books.find((book) => book.title === title);
    if (b_book && b_book.available) {
      b_book.available = false;
      return `You have successfully borrowed "${b_book.title}".`;
    } else if (b_book) {
      return `"${b_book.title}" is currently unavailable.`;
    } else {
      return `The book titled "${title}" does not exist in the library.`;
    }
  }

  returnBook(title) {
    const book = this.books.find((book) => book.title === title);
    if (book && !book.available) {
      book.available = true;
      return `You have successfully returned "${book.title}".`;
    } else if (book) {
      return `"${book.title}" was not borrowed.`;
    } else {
      return `The book titled "${title}" does not exist in the library.`;
    }
  }
}

class Book {
  constructor(title, author, genre, available = true) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.available = available;
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.borrowedBooks = [];
  }

  borrowBook(library, title) {
    const borrowMessage = library.borrowingBook(title);
    if (borrowMessage.includes("successfully borrowed")) {
      this.borrowedBooks.push(title);
    }
    return borrowMessage;
  }

  returnBook(library, title) {
    const returnMessage = library.returnBook(title);
    if (returnMessage.includes("successfully returned")) {
      this.borrowedBooks = this.borrowedBooks.filter(
        (bookTitle) => bookTitle !== title
      );
    }
    return returnMessage;
  }

  viewBorrowedBooks() {
    return this.borrowedBooks;
  }
}

// Usage
const library = new Library("SeavPhov Library");

const book1 = new Book("Think and Grow Rich", "Napoleon Hill", "Motivation");
const book2 = new Book("Brave New World", "Aldous Huxley", "Dystopian");
const book3 = new Book("1984", "George Orwell", "Dystopian");
const book4 = new Book("The Secret", "Rhonda Byrne", "Self-Help");
const book5 = new Book(
  "Mindset: The New Psychology of Success",
  "Carol Dweck",
  "Psychology"
);
const book6 = new Book("The Lord of the Rings", "J. R. R. Tolkien", "Fantasy");
const book7 = new Book("The Grapes of Wrath", "John Steinbeck", "Realist");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.addBook(book6);
library.addBook(book7);

console.log("Initial list of books:", library.listBooks());

console.log("\nRemoved book:");
console.log(library.rmBookByTitle("To Kill a Mockingbird"));

console.log("\nAfter removal:");
console.log(library.listBooks());

console.log("\nSearching for books:");
library.searchByTitle({ title: "Mockingbird" });
library.searchByTitle({ author: "Napoleon Hill" });
library.searchByTitle({ genre: "Dystopian" });

console.log("\nDisplay all books:");
console.log(library.displayAllBooks());

console.log(library.borrowingBook("Think and Grow Rich"));
console.log(library.borrowingBook("The Power of Habit"));
console.log(library.borrowingBook("Think and Grow Rich"));

console.log("\nAll books in the library:");
console.log(library.displayAllBooks());

console.log(library.returnBook("Think and Grow Rich"));
console.log(library.returnBook("The Power of Habit"));
console.log(library.returnBook("Think and Grow Rich"));

console.log("\nAll books in the library:");
console.log(library.displayAllBooks());

const user = new User("John Doe");

console.log(user.borrowBook(library, "Think and Grow Rich"));
console.log(user.borrowBook(library, "Think and Grow Rich"));
console.log(user.borrowBook(library, "Mindset: The New Psychology of Success"));

console.log("User's borrowed books:", user.viewBorrowedBooks());

console.log(user.returnBook(library, "Think and Grow Rich"));
console.log("User's borrowed books after returning:", user.viewBorrowedBooks());
