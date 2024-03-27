export const saveDataToLocalStorage = (singleBook) => {
  const savedData = JSON.parse(localStorage.getItem("books")) || [];
  const isExesist = savedData.find((book) => book.bookId === singleBook.bookId);
  if (!isExesist) {
    savedData.push(singleBook);
    localStorage.setItem("books", JSON.stringify(savedData));
  }
};

export const getDataFromLocalStorage = () => {
  const defaultData = JSON.parse(localStorage.getItem("books"));
  return defaultData;
};

export const saveWishBookToLocalStorage = (singleBook) => {
  const savedData = JSON.parse(localStorage.getItem("wishbooks")) || [];
  const isExesist = savedData.find((book) => book.bookId === singleBook.bookId);
  if (!isExesist) {
    savedData.push(singleBook);
    localStorage.setItem("wishbooks", JSON.stringify(savedData));
  }
};

export const getWishBookFromLocalStorage = () => {
  const defaultData = JSON.parse(localStorage.getItem("wishbooks"));
  return defaultData;
};
