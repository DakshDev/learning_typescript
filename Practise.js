var BookClass = /** @class */ (function () {
    function BookClass() {
    }
    BookClass.prototype.create = function (book) {
        BookClass.bookArr = book;
    };
    BookClass.prototype.edit = function (editBook) {
        // let main = Object.keys(BookClass.bookArr);
        // let change = Object.keys(editBook);
        // main.forEach((mainKeys) => {
        //   change.forEach((changeKey) => {
        //     if (mainKeys == changeKey) {
        //       BookClass.bookArr[changeKey] = editBook[changeKey];
        //     }
        //   });
        // });
        var main = Object.keys(BookClass.bookArr);
        var change = Object.keys(editBook);
        main.forEach(function (mainKeys) {
            change.forEach(function (changeKey) {
                if (mainKeys == changeKey) {
                    BookClass.bookArr[changeKey] = editBook[changeKey];
                }
            });
        });
    };
    return BookClass;
}());
var book1 = new BookClass();
book1.create({
    baseCode: "$",
    price: 599,
    title: "Rich Man",
    author: "Jhon Doe",
});
book1.edit({
    price: 1000,
    author: "pako",
});
console.log(BookClass.bookArr);
