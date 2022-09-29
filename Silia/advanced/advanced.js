let parsedBooks = JSON.parse(books);
console.table(parsedBooks);

for (let book of parsedBooks) {
    let button = "";
    if (book.read) {
        button = `<input type="submit" value="already read" class="button change-btn">`
    } else {
        button = `<input type="submit" value="read" class="button change-btn">`
    }
    document.getElementById("book_review").innerHTML += `
<div class="card"> 
<div><img class="image" src="image/${book.img}" width="100%" ></div>
<p class="title" >${book.title} <br> - </p>
<p class="author" > ${book.author}</p>
${button}
</div>
`;

}
const buttons = document.querySelectorAll(".change-btn");

// Change Button

function change(index) {
    if (parsedBooks[index].read) {
        parsedBooks[index].read = false;
        buttons[index].value = "read";
    } else {
        parsedBooks[index].read = true;
        buttons[index].value = "already read";
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        change(i);
    })
}


// function change() {
//     let changeBtn = document.getElementsByClassName("change-btn");
//     if (changeBtn.read) {
//         changeBtn.read.value = false;
//         document.getElementsByClassName("change-btn").innerHTML = "already read"
//     } else {
//         changeBtn.read = true;
//         document.getElementsByClassName("change-btn").innerHTML = "read"
//     }
// }

// changeBtn.addEventListener("click", change);