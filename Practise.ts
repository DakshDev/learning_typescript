type BookInstance = {
  title?: string;
  price?: number;
  baseCode?: string;
  author?: string;
  publishYear?: number;
};

class BookClass {
  static bookArr: BookInstance;
  constructor() {}

  create(book: BookInstance) {
    BookClass.bookArr = book;
  }

  edit(editBook: BookInstance) {
    // let main = Object.keys(BookClass.bookArr);
    // let change = Object.keys(editBook);
    // main.forEach((mainKeys) => {
    //   change.forEach((changeKey) => {
    //     if (mainKeys == changeKey) {
    //       BookClass.bookArr[changeKey] = editBook[changeKey];
    //     }
    //   });
    // });

    let main = Object.keys(BookClass.bookArr);
    let change = Object.keys(editBook);

    main.forEach((mainKeys) => {
      change.forEach((changeKey) => {
        if (mainKeys == changeKey) {
          BookClass.bookArr[changeKey] = editBook[changeKey];
        }
      });
    });
  }
}

let book1 = new BookClass();
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
