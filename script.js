$(function () {
    //WOW plugin init
    new WOW().init();

    //parallax effect for banner
    (function () {
        var posY;
        var image = document.getElementById("parallax");
        function paralax() {
            posY = window.pageYOffset;
            image.style.top = posY * 0.9 + "px";
        }
        window.addEventListener("scroll", paralax);
    })();

    function generateBooks(books) {
        // selects this html element:
        // <section class="works scroll" id="works">
        //      <div class="container">
        const container = document.querySelector("#works .container");

        // declare an empty string to add to the html since we add to it in the loops below
        let html = "";

        // get the number of rows we need
        // divide # of books by 3 and round up
        let rows = Math.ceil(books.length / 3);
        // loop through each row
        for (let i = 0; i < rows; i++) {
            // add a div to the html string (begins a row)
            html += `<div class="row">`;
            // each column has 3 items
            // j=0 to j=2 (0 1 2 is 3 times)
            for (let j = 0; j < 3; j++) {
                // each row has 3 items + offset of the item in the current row and the rows are going left and right and then the columns are going up and down. It muliplies the row number by three and then adds the column number 
                let idx = i * 3 + j;
                // reached end of books array
                if (idx >= books.length) break;
                const book = books[idx];
                html += `
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <a href="${book.link}" target="_blank">
                            <div class="block">
                            <div class="works-thumb" style="background-image: url(${book.imageLink})"></div>
                            <div class="works-caption">${book.bookName}</div>
                            </div>
                        </a>
                    </div>
                `;
            }
            html += `</div>`;
        }

        container.innerHTML = html;
    }

    // Usage
    const books = [
        {
            imageLink: "https://www.takewalks.com/blog/wp-content/uploads/2013/05/gatsby.jpg",
            bookName: "The Great Gatsby!",
            link: "https://example.com/great-gatsby",
        },
        {
            imageLink: "https://m.media-amazon.com/images/I/51JyKkTnuZL._SL500_.jpg",
            bookName: "Dreams From My Father",
            link: "https://example.com/dreams-from-my-father",
        },
        {
            imageLink: "https://m.media-amazon.com/images/I/814oeXzxhML._AC_UF350,350_QL50_.jpg",
            bookName: "The Grapes of Wrath!",
            link: "https://example.com/grapes-of-wrath",
        },
        {
            imageLink: "https://sdi4.chrislands.com/sdi/978/00/60/8/9780060888695.jpg",
            bookName: "To Kill A Mockingbird!",
            link: "https://example.com/great-gatsby",
        },
        {
            imageLink: "https://i.etsystatic.com/37564271/r/il/a493cc/4399495403/il_fullxfull.4399495403_fa5v.jpg",
            bookName: "Farenheit 451!",
            link: "https://example.com/dreams-from-my-father",
        },
        {
            imageLink: "https://sterling-us.imgix.net/covers/9781435172319.jpg?auto=format&h=648",
            bookName: "Heart of Darkness!",
            link: "https://example.com/grapes-of-wrath",
        },
        {
            imageLink: "https://mpd-biblio-covers.imgix.net/9781509826643.jpg",
            bookName: "Moby-Dick!",
            link: "https://example.com/great-gatsby",
        },
        {
            imageLink: "https://images.booksense.com/images/675/121/9780385121675.jpg",
            bookName: "The Shining!",
            link: "https://example.com/dreams-from-my-father",
        },
        {
            imageLink: "https://sdi4.chrislands.com/sdi/978/05/25/9/9780525948926.jpg",
            bookName: "Atlas Shurgged!",
            link: "https://example.com/grapes-of-wrath",
        },
        {
            imageLink: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdubbing.fandom.com%2Fwiki%2FThe_Adventures_of_Tom_Sawyer&psig=AOvVaw1aHFHcqVETFRzIyBw33qWF&ust=1698429181873000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCPCD3fKjlIIDFQAAAAAdAAAAABAF",
            bookName: "The Adventures Of Tom Sawyer!",
            link: "https://example.com/grapes-of-wrath",
        },
        {
            imageLink: "https://sdi4.chrislands.com/sdi/978/05/25/9/9780525948926.jpg",
            bookName: "DEF!",
            link: "https://example.com/grapes-of-wrath",
        },
        {
            imageLink: "https://sdi4.chrislands.com/sdi/978/05/25/9/9780525948926.jpg",
            bookName: "GHI!",
            link: "https://example.com/grapes-of-wrath",
        },
    ];

    window.addEventListener("DOMContentLoaded", (event) => {
        generateBooks(books);
    });
});
