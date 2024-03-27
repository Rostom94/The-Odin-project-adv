const myLibrary = [];
let count = 0;
const book_container = document.querySelector(".library-container");
const btn = document.querySelector(".button");
const show_btn = document.querySelector(".show");
const body = document.querySelector("body");
const isRead_state = document.querySelector(".book-isRead");

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = `${title} by ${author}, has ${pages}, ${isRead}`;
  return;
}

btn.addEventListener("click", () => {
  count += 1;
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const isRead = document.querySelector("#isRead").checked
    ? "has been read"
    : "not read yet";

  const book = new Book(title, author, pages, isRead);
  myLibrary.push(book);

  const new_Book = document.createElement("div");
  new_Book.classList.add("book");

  const new_title = document.createElement("div");
  new_title.classList.add("book-title");

  const new_author = document.createElement("div");
  new_author.classList.add("book-author");

  const new_pages = document.createElement("div");
  new_pages.classList.add("book-pages");

  const new_isRead = document.createElement("div");
  new_isRead.classList.add("book-isRead");

  new_title.textContent = `Title : ${book.title}`;
  new_author.textContent = `Author :${book.author}`;
  new_pages.textContent = `Number of pages :${book.pages}`;
  new_isRead.textContent = `${book.isRead}`;

  book_container.appendChild(new_Book);
  new_Book.appendChild(new_title);
  new_Book.appendChild(new_author);
  new_Book.appendChild(new_pages);
  new_Book.appendChild(new_isRead);

  console.log(new_Book);
});
