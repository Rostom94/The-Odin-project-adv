// create empty object to stock books
const myLibrary = [];

// create Book class to create book objects :
class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
  // info method to get all info's book
  get info() {
    console.log(
      `the ${this.title} written by ${this.author} has ${this.pages} is ${
        this.isRead ? "read" : "not read yet"
      }`
    );
  }
  // read state setter to change isRead state
  set read_state(state) {
    this.isRead = state;
  }
}

const btn = document.querySelector(".button");
btn.addEventListener("click", () => {
  //take value from html
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  let isRead = document.querySelector("#isRead").checked;

  //create new book class instance & push to array
  const book = new Book(title, author, pages, isRead);
  myLibrary.push(book);

  /////////////////////////////////////////////////////////
  const my_book = document.createElement("div");
  my_book.classList.add("book");

  //random background :

  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  my_book.setAttribute("style", `background-color:rgb(${r},${g},${b}) `);

  //////////////////

  const book_title = document.createElement("div");
  book_title.classList.add("book-title");

  const book_author = document.createElement("div");
  book_author.classList.add("book-author");

  const book_pages = document.createElement("div");
  book_pages.classList.add("book-pages");

  const book_isRead = document.createElement("div");
  book_isRead.classList.add("book-isRead");

  const book_delete = document.createElement("div");
  book_delete.classList.add("delete");

  /////////////////////////////////////////////////////////

  book_title.textContent = `Title : ${book.title}`;
  book_author.textContent = `Author :${book.author}`;
  book_pages.textContent = `Number of pages :${book.pages}`;
  book_isRead.textContent = `${book.isRead === true ? "read" : "not read"}`;
  if (book.isRead === true) {
    book_isRead.setAttribute(
      "style",
      "background-color: lightgreen; border 1px solid green"
    );
  } else if (book.isRead === false) {
    book_isRead.setAttribute(
      "style",
      "background-color: lightcoral; border 1px solid red"
    );
  }

  book_delete.textContent = "X";

  /////////////////////////////////////////////////////////

  my_book.appendChild(book_title);
  my_book.appendChild(book_author);
  my_book.appendChild(book_pages);
  my_book.appendChild(book_isRead);
  my_book.appendChild(book_delete);
  /////////////////////////////////////////////////////////

  document.querySelector(".library-container").appendChild(my_book);

  // delete button
  book_delete.addEventListener("click", () => {
    myLibrary.splice(myLibrary.indexOf(book), 1);
    my_book.remove();
  });

  // change read status
  book_isRead.addEventListener("click", () => {
    if (book.isRead === true) {
      console.log(`should be true : ${book.isRead}`);
      book.read_state = false;
      console.log(`should be false : ${book.isRead}`);

      book_isRead.setAttribute(
        "style",
        "background-color: lightgreen; border 1px solid green"
      );

      book_isRead.textContent = "read";
    } else {
      book.read_state = true;

      book_isRead.setAttribute(
        "style",
        "background-color: lightcoral; border 1px solid red"
      );
      book_isRead.textContent = "not read";
    }
  });
});
