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
            imageLink: "https://books.google.com/books/content?id=OYtkbGl2j0sC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1MSNBHQqn6MwhmA9ikg0eEko4Zxg&w=1280",
            bookName: "Farenheit 451!",
            link: "http://127.0.0.1:5500/bookInfo.html",
        },
        {
            imageLink: "https://cdn.kobo.com/book-images/e278c62e-943a-473e-846a-3e19bce5b5d8/1200/1200/False/heart-of-darkness-12.jpg",
            bookName: "Heart of Darkness!",
            link: "http://127.0.0.1:5500/Bookinfo.html",
        },
        {
            imageLink: "https://m.media-amazon.com/images/I/51MgclnwPvL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
            bookName: "Moby-Dick!",
            link: "http://127.0.0.1:5500/Bookinfo.html",
        },
        {
            imageLink: "https://prodimage.images-bn.com/pimages/9780345806789_p0_v2_s1200x630.jpg",
            bookName: "The Shining!",
            link: "http://127.0.0.1:5500/Bookinfo.html",
        },
        {
            imageLink: "https://m.media-amazon.com/images/I/51iAfmaFDjL._SY445_SX342_.jpg",
            bookName: "Atlas Shrugged!",
            link: "http://127.0.0.1:5500/bookInfo.html",
        },
        {
            imageLink: "https://m.media-amazon.com/images/I/41VWMa8-aeS._SY445_SX342_.jpg",
            bookName: "The Adventures Of Tom Sawyer!",
            link: "http://127.0.0.1:5500/bookInfo.html",
        },
        {
            imageLink: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Invisible_Man_%281952_1st_ed_jacket_cover%29.jpg",
            bookName: "The Invisible Man!",
            link: "http://127.0.0.1:5500/bookInfo.html",
        },
        {
            imageLink: "https://m.media-amazon.com/images/I/61yjELh+20L._AC_UF1000,1000_QL80_.jpg",
            bookName: "Farewell to Arms!",
            link: "http://127.0.0.1:5500/bookInfo.html",
        },
        {
            imageLink: "https://m.media-amazon.com/images/I/51CQJREy9xL._AC_UF350,350_QL80_.jpg",
            bookName: "The Bell Jar!",
            link: "http://127.0.0.1:5500/bookInfo.html",
        },
        {
            imageLink: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9780684842370/the-age-of-innocence-9780684842370_hr.jpg",
            bookName: "The Age Of Innocence!",
            link: "http://127.0.0.1:5500/bookInfo.html",
        },
        {
            imageLink: "https://upload.wikimedia.org/wikipedia/en/9/99/Catch22.jpg",
            bookName: "Catch-22!",
            link: "http://127.0.0.1:5500/bookInfo.html",
        },
        {
            imageLink: "https://m.media-amazon.com/images/I/515o+3oBm0L._SY445_SX342_.jpg",
            bookName: "The Catcher in the Rye",
            link: "http://127.0.0.1:5500/bookInfo.html",
        },
        {
            imageLink: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Of_Mice_and_Men_%281937_1st_ed_dust_jacket%29.jpg",
            bookName: "Of Mice and Men",
            link: "http://127.0.0.1:5500/bookInfo.html",
        },
        {
            imageLink: "https://m.media-amazon.com/images/I/51hkNOLyQiL.jpg",
            bookName: "On the Road",
            link: "http://127.0.0.1:5500/bookInfo.html",
        },
        {
            imageLink: "https://m.media-amazon.com/images/I/51zG5JVj+uL._SY445_SX342_.jpg",
            bookName: "Walden",
            link: "http://127.0.0.1:5500/bookInfo.html",
        },
        {
            imageLink: "https://m.media-amazon.com/images/I/810kz44eWfL._AC_UF1000,1000_QL80_.jpg",
            bookName: "Lolita",
            link: "http://127.0.0.1:5500/bookInfo.html",
        },
        {
            imageLink: "https://m.media-amazon.com/images/I/81UkfvI7x-L._AC_UF1000,1000_QL80_.jpg",
            bookName: "Leaves of Grass",
            link: "http://127.0.0.1:5500/bookInfo.html",
        },
        // Add more book objects as needed
    ];

    // Listen for the "DOMContentLoaded" event to ensure the DOM is ready
    window.addEventListener("DOMContentLoaded", (event) => {
        generateBooks(books);
    });
});