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
            imageLink: "https://www.arts.gov/sites/default/files/Fahrenheit%20451%20Cover.jpg",
            bookName: "Fahrenheit 451!",
            link: "http://127.0.0.1:5500/Bookinfo.html",
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
            imageLink: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Atlas_Shrugged_%281957_1st_ed%29_-_Ayn_Rand.jpg",
            bookName: "Atlas Shrugged!",
            link: "http://127.0.0.1:5500/Bookinfo.html",
        },
        {
            imageLink: "https://m.media-amazon.com/images/I/41VWMa8-aeS._SY445_SX342_.jpg",
            bookName: "The Adventures Of Tom Sawyer!",
            link: "http://127.0.0.1:5500/Bookinfo.html",
        },
        {
            imageLink: "https://m.media-amazon.com/images/I/61yjELh+20L._SY466_.jpg",
            bookName: "A Farewell to Arms!",
            link: "http://127.0.0.1:5500/Bookinfo.html",
        },
        {
            imageLink: "https://m.media-amazon.com/images/I/41LU+AaRIQL._SY445_SX342_.jpg",
            bookName: "The Bell Jar!",
            link: "http://127.0.0.1:5500/Bookinfo.html",
        },
        {
            imageLink: "https://m.media-amazon.com/images/I/51d2mbYwEkL.jpg",
            bookName: "Catch-22!",
            link: "http://127.0.0.1:5500/Bookinfo.html",
        },
        {
            imageLink: "https://i0.wp.com/www.nationalbook.org/wp-content/uploads/2015/08/1952-nba-fic-salinger-thecatcherintherye.webp?fit=254%2C373&ssl=1",
            bookName: "The Catcher In The Rye!",
            link: "http://127.0.0.1:5500/Bookinfo.html",
        },
        {
            imageLink: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Of_Mice_and_Men_%281937_1st_ed_dust_jacket%29.jpg",
            bookName: "Of Mice And Men!",
            link: "http://127.0.0.1:5500/Bookinfo.html",
        },
        {
            imageLink: "https://m.media-amazon.com/images/I/51TuN1D6MTL._SY445_SX342_.jpg",
            bookName: "On The Road!",
            link: "http://127.0.0.1:5500/Bookinfo.html",
        },
        {
            imageLink: "https://sdi4.chrislands.com/sdi/978/05/25/9/9780525948926.jpg",
            bookName: "The Age Of Innocence!",
            link: "http://127.0.0.1:5500/Bookinfo.html",
        },
        {
            imageLink: "https://m.media-amazon.com/images/I/51zG5JVj+uL._SY466_.jpg",
            bookName: "Walden!",
            link: "http://127.0.0.1:5500/Bookinfo.html",
        },
        {
            imageLink: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Invisible_Man_%281952_1st_ed_jacket_cover%29.jpg",
            bookName: "Invisible Man!",
            link: "http://127.0.0.1:5500/Bookinfo.html",
        },
        {
            imageLink: "https://upload.wikimedia.org/wikipedia/commons/5/57/Lolita_1955.JPG",
            bookName: "Lolita!",
            link: "http://127.0.0.1:5500/Bookinfo.html",
        },
        {
            imageLink: "https://m.media-amazon.com/images/I/514QufgpodL.jpg",
            bookName: "Leaves Of Grass!",
            link: "http://127.0.0.1:5500/Bookinfo.html",
        },
        // Add more book objects as needed
    ];

    // Listen for the "DOMContentLoaded" event to ensure the DOM is ready
    window.addEventListener("DOMContentLoaded", (event) => {
        generateBooks(books);
    });
});

