export const sortByDate = (a, b) => {
  // Why JavaScript? Why?
  var datePartA = a.frontMatter.date.split(".");
  var datePartB = b.frontMatter.date.split(".");

  a = new Date(+datePartA[2], datePartA[1] - 1, +datePartA[0]);
  b = new Date(+datePartB[2], datePartB[1] - 1, +datePartB[0]);

  return b - a;
};
