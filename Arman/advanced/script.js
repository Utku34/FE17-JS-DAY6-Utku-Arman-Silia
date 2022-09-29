let books = JSON.parse(booksJson)
let paragraphs = document.getElementsByClassName("book-collection")[0]

for(let book of books){
    paragraphs.innerHTML += `
    <div class="book-collection">
    <img src="${book.cover}">
    <p>${book.title} by ${book.author} is a book in the genre of ${book.genre}. Read by me? ${book.read}</p>
    </div>
    
    `
}