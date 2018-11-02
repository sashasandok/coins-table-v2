export const divideToPages = (items, pageCount) => {
  const pages = {};
  let pageNumber = 1;
  while (items.length) {
    pages[pageNumber] = items.splice(0, pageCount);
    pageNumber++;
  }

  return pages;
};
