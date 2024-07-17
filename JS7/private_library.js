class Library {
  #books;

  constructor(name) {
    this.name = name;
    this.#books = [];
  }

  getNameLibrary() {
    return this.name;
  }

  addBook(newBook) {
    const xbook = this.#books.find((book) => book.title === newBook.title);
    if (xbook) {
      return "This book already exists.";
    } else {
      this.#books.push(newBook);
      return "Book has been added.";
    }
  }

  rmBookByTitle(title) {
    const titleIndex = this.#books.findIndex((book) => book.title === title);
    if (titleIndex !== -1) {
      this.#books.splice(titleIndex, 1);
      return `True - Book titled "${title}" was removed.`;
    } else {
      return `False - Book titled "${title}" was not found and not removed.`;
    }
  }

  listBooks() {
    return this.#books;
  }

  searchByTitle(criteria) {
    const { title = "", author = "", genre = "" } = criteria;
    const result = this.#books.filter(
      (book) =>
        (title && book.title.includes(title)) ||
        (author && book.author.includes(author)) ||
        (genre && book.genre.includes(genre))
    );

    return result;
  }

  displayAllBooks() {
    return this.#books;
  }

  borrowingBook(title) {
    const b_book = this.#books.find((book) => book.title === title);
    if (b_book && b_book.isAvailable) {
      b_book.isAvailable = false;
      return `You have successfully borrowed "${b_book.title}".`;
    } else if (b_book) {
      return `"${b_book.title}" is currently unavailable.`;
    } else {
      return `The book titled "${title}" does not exist in the library.`;
    }
  }

  returnBook(title) {
    const book = this.#books.find((book) => book.title === title);
    if (book && !book.isAvailable) {
      book.isAvailable = true;
      return `You have successfully returned "${book.title}".`;
    } else if (book) {
      return `"${book.title}" was not borrowed.`;
    } else {
      return `The book titled "${title}" does not exist in the library.`;
    }
  }
}

class Book {
  #available;

  constructor(title, author, genre, available = true) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.#available = available;
  }

  get isAvailable() {
    return this.#available;
  }

  set isAvailable(value) {
    this.#available = value;
  }
}

class User {
  #borrowedBooks;
  #borrowLimit;

  constructor(name, borrowLimit = 5) {
    this.name = name;
    this.#borrowedBooks = [];
    this.#borrowLimit = borrowLimit;
  }

  getNameUser() {
    return this.name;
  }

  borrowBook(library, title) {
    if (this.#borrowedBooks.length >= this.#borrowLimit) {
      return `Borrow limit reached. You can only borrow up to ${
        this.#borrowLimit
      } books.`;
    }
    const borrowMessage = library.borrowingBook(title);
    if (borrowMessage.includes("successfully borrowed")) {
      const book = library
        .listBooks()
        .find((book) => book.title === title && !book.isAvailable);
      this.#borrowedBooks.push(book);
    }
    return borrowMessage;
  }

  returnBook(library, title) {
    const returnMessage = library.returnBook(title);
    if (returnMessage.includes("successfully returned")) {
      const bookIndex = this.#borrowedBooks.findIndex(
        (book) => book.title === title
      );
      if (bookIndex !== -1) {
        this.#borrowedBooks.splice(bookIndex, 1);
      }
    }
    return returnMessage;
  }

  viewBorrowedBooks() {
    return this.#borrowedBooks;
  }
}

class Student extends User {
  constructor(name) {
    super(name, 5); // Limit to 5 books
  }
}

class Admin extends User {
  constructor(name) {
    super(name, Infinity); // No limit
  }
}

// Usage example
const library = new Library("SeavPhov Library");
const student = new Student("Teanq");
const admin = new Admin("AdminUser");

const book1 = new Book("Think and Grow Rich", "Napoleon Hill", "Motivation");
const book2 = new Book(
  "Mindset: The New Psychology of Success",
  "Carol Dweck",
  "Psychology"
);
const book3 = new Book("The Power of Habit", "Charles Duhigg", "Motivation");
const book4 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Fiction");
const book5 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction");
const book6 = new Book("1984", "George Orwell", "Dystopian");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.addBook(book6);

console.log("Library name:", library.getNameLibrary());
console.log("Student name:", student.getNameUser());
console.log("Admin name:", admin.getNameUser());

console.log("Books with title 'The':", library.searchByTitle({ title: "The" }));
console.log(
  "Books by author 'Hill':",
  library.searchByTitle({ author: "Hill" })
);
console.log(
  "Books in genre 'Motivation':",
  library.searchByTitle({ genre: "Motivation" })
);

console.log("Removing '1984':", library.rmBookByTitle("1984"));
console.log("All books in the library:", library.listBooks());

console.log(library.borrowingBook("The Power of Habit"));
console.log(library.borrowingBook("The Power of Habit"));
console.log(
  "Borrow book title 'How to Win Friends and Influence People':",
  library.borrowingBook("How to Win Friends and Influence People")
);

console.log(
  "Returning 'The Great Gatsby':",
  library.returnBook("The Great Gatsby")
);
console.log(
  "Returning 'The Great Gatsby' again:",
  library.returnBook("The Great Gatsby")
);

console.log(student.borrowBook(library, "Think and Grow Rich"));
console.log(student.borrowBook(library, "Think and Grow Rich"));
console.log(
  student.borrowBook(library, "Mindset: The New Psychology of Success")
);
console.log("Student's borrowed books:", student.viewBorrowedBooks());

console.log(student.returnBook(library, "Think and Grow Rich"));
console.log(
  "Student's borrowed books after returning:",
  student.viewBorrowedBooks()
);

console.log(admin.borrowBook(library, "Think and Grow Rich"));
console.log(admin.borrowBook(library, "Think and Grow Rich"));
console.log(
  admin.borrowBook(library, "Mindset: The New Psychology of Success")
);
console.log("Admin's borrowed books:", admin.viewBorrowedBooks());

console.log(admin.returnBook(library, "Think and Grow Rich"));
console.log(
  "Admin's borrowed books after returning:",
  admin.viewBorrowedBooks()
);
