class myBook {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = crypto.randomUUID();  // generate unique ID for each instance
    }
}

class Library {
    myLibrary = [];
    addBookToLibrary(book) {
        this.myLibrary.push(book);
        console.log(this.myLibrary);
    }
}

(function(){
    const title = document.getElementById('bookinput');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    const read = document.querySelector('#notRead');
    const isRead = notRead.checked ? false : true;
    const submit = document.querySelector('form');
    const error = document.getElementById('error-msg');
    error.style.display = 'none';

    submit.addEventListener('submit', (e) => {
        e.preventDefault();
        if(!submit.checkValidity()) {
            error.style.display = 'block';
            return;
        }
        const book = new myBook(bookinput.value, author.value, pages.value, isRead);
        new Library().addBookToLibrary(book);

        let display = document.querySelector("#display");
        let card = document.createElement("div");
        card.classList.add("cards");
    
        let titleDiv = document.createElement("div")
        titleDiv.classList.add("titleDiv");

        let cardText = document.createElement("h3");
        cardText.textContent = `${title.value} by ${author.value}`;
        let pageNumber = document.createElement('h3');
        pageNumber.textContent = `${pages.value} pages`

        let removeDiv = document.createElement("div");
        removeDiv.classList.add("removeDiv");

        let removeCard = document.createElement('button');
        removeCard.classList.add('remove');
        removeCard.textContent = 'Remove';
        removeCard.addEventListener('click', () => {
           display.removeChild(card);
        });

        let statusDiv = document.createElement('div');
        statusDiv.classList.add('statusDiv');

        let status = document.createElement('button');
        status.classList.add('status');
        status.textContent = (isRead === true) ? 'Read' : 'Not read';
        status.style.backgroundColor = (isRead === true) ? 'green' : 'red';
        status.addEventListener('click', () => {
            status.textContent = (status.textContent === true) ? 'Read' : 'Not read'; // if status is equal to 'Read', switch it to 'Not read', if not, switch to 'Read'
            status.style.backgroundColor = (status.textContent === true) ? 'green' : 'red';
        });

        titleDiv.appendChild(cardText);
        titleDiv.appendChild(pageNumber);
        card.appendChild(titleDiv);
    
        card.appendChild(statusDiv);
        statusDiv.appendChild(status);
    
        removeDiv.appendChild(removeCard);
        card.appendChild(removeDiv);

        display.appendChild(card);
        
        //reset values in form
        title.value = '';
        author.value = '';
        read.checked = true;
        notRead.checked = false;
        pages.value = '';   
    });
})();

// let submit = document.querySelector('form');
// submit.addEventListener('submit', (e) => {
//     e.preventDefault(); // an event object is needed to be able to prevent the default behaviour
//     // getting the values
//     let title = document.getElementById('bookinput');
//     let author = document.getElementById('author');
//     let read = document.querySelector('#notRead');
//     let notRead = document.querySelector('#notRead');
//     let isRead = notRead.checked ? 'Not Read' : 'Read';
//     let pages = document.getElementById('pages');

//     let error = document.querySelector('#error-msg');
//     error.style.display = 'none';
//     if(!submit.checkValidity()) {
//         error.style.display = 'block';
//         return;
//     }


//     let bookling = new Book (title.value, author.value, pages.value, isRead);
//     addBookToLibrary(bookling);
//     console.log(myLibrary);

//     let display = document.querySelector("#display");
//     let card = document.createElement("div");
//     card.classList.add("cards");
    
//     let titleDiv = document.createElement("div")
//     titleDiv.classList.add("titleDiv");

//     let cardText = document.createElement("h3");
//     cardText.textContent = `${title.value} by ${author.value}`;
//     let pageNumber = document.createElement('h3');
//     pageNumber.textContent = `${pages.value} pages`

//     let removeDiv = document.createElement("div");
//     removeDiv.classList.add("removeDiv");

//     let removeCard = document.createElement('button');
//     removeCard.classList.add('remove');
//     removeCard.textContent = 'Remove';
//     removeCard.addEventListener('click', () => {
//         display.removeChild(card);
//     });

//     let statusDiv = document.createElement('div');
//     statusDiv.classList.add('statusDiv');

//     let status = document.createElement('button');
//     status.classList.add('status');
//     status.textContent = isRead;
//     status.style.backgroundColor = (isRead === 'Read') ? 'green' : 'red';
//     status.addEventListener('click', () => {
//         status.textContent = (status.textContent === 'Read') ? 'Not read' : 'Read'; // if status is equal to 'Read', switch it to 'Not read', if not, switch to 'Read'
//         status.style.backgroundColor = (status.textContent === 'Read') ? 'green' : 'red';
//     });



//     titleDiv.appendChild(cardText);
//     titleDiv.appendChild(pageNumber);
//     card.appendChild(titleDiv);
    
//     card.appendChild(statusDiv);
//     statusDiv.appendChild(status);
    
//     removeDiv.appendChild(removeCard);
//     card.appendChild(removeDiv);

//     display.appendChild(card);
        
//     // reset values in form
//     title.value = '';
//     author.value = '';
//     read.checked = true;
//     notRead.checked = false;
//     pages.value = '';   
// })
