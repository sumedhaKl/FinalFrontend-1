$(function () {
    // WOW plugin init
    new WOW().init();

    // Parallax effect for banner
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
        const container = document.querySelector("#works .container");
        let html = "";

        let rows = Math.ceil(books.length / 3);

        for (let i = 0; i < rows; i++) {
            html += `<div class="row">`;

            for (let j = 0; j < 3; j++) {
                let idx = i * 3 + j;
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

    const books = [
        {
            imageLink: "https://prodimage.images-bn.com/pimages/9780743273565_p0_v14_s1200x630.jpg",
            bookName: "The Great Gatsby",
            link: "http://127.0.0.1:5500/Bookinfo.html",
        },
        {
            imageLink: "https://images.penguinrandomhouse.com/cover/9780307383419",
            bookName: "Dreams From My Father",
            link: "http://127.0.0.1:5500/Bookinfo.html",
        },
        {
            imageLink: "https://m.media-amazon.com/images/I/814oeXzxhML._AC_UF350,350_QL50_.jpg",
            bookName: "The Grapes of Wrath!",
            link: "http://127.0.0.1:5500/Bookinfo.html",
        },
        {
            imageLink: "https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UF1000,1000_QL80_.jpg",
            bookName: "To Kill A Mockingbird!",
            link: "http://127.0.0.1:5500/Bookinfo.html",
        },
        {
            imageLink: "https://i.etsystatic.com/37564271/r/il/a493cc/4399495403/il_fullxfull.4399495403_fa5v.jpg",
            bookName: "Farenheit 451!",
            link: "http://127.0.0.1:5500/bookInfo.html",
        },
        {
            imageLink: "https://cdn.kobo.com/book-images/e278c62e-943a-473e-846a-3e19bce5b5d8/1200/1200/False/heart-of-darkness-12.jpg",
            bookName: "Heart of Darkness!",
            link: "http://127.0.0.1:5500/Bookinfo.html",
        },
        {
            imageLink: "https://m.media-amazon.com/images/I/61O7kZurz2L._AC_UF1000,1000_QL80_.jpg",
            bookName: "Moby-Dick!",
            link: "http://127.0.0.1:5500/Bookinfo.html",
        },
        {
            imageLink: "https://prodimage.images-bn.com/pimages/9780345806789_p0_v2_s1200x630.jpg",
            bookName: "The Shining!",
            link: "http://127.0.0.1:5500/Bookinfo.html",
        },
        {
            imageLink: "https://sdi4.chrislands.com/sdi/978/05/25/9/9780525948926.jpg",
            bookName: "Atlas Shurgged!",
            link: "http://127.0.0.1:5500/bookInfo.html",
        },
        {
            imageLink: "https://m.media-amazon.com/images/I/41VWMa8-aeS._SY445_SX342_.jpg",
            bookName: "The Adventures Of Tom Sawyer!",
            link: "http://127.0.0.1:5500/bookInfo.html",
        },
        {
            imageLink: "https://sdi4.chrislands.com/sdi/978/05/25/9/9780525948926.jpg",
            bookName: "DEF!",
            link: "http://127.0.0.1:5500/bookInfo.html",
        },
        {
            imageLink: "https://sdi4.chrislands.com/sdi/978/05/25/9/9780525948926.jpg",
            bookName: "GHI!",
            link: "http://127.0.0.1:5500/bookInfo.html",
        },
        // Add more book objects as needed
    ];

    // Listen for the "DOMContentLoaded" event to ensure the DOM is ready
    window.addEventListener("DOMContentLoaded", (event) => {
        generateBooks(books);
    });
});