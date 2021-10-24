const initialize = require("../initializer");

describe("initializer library", () => {
  test("Crazy Joe Davola should return Crazy J. Davola", () => {
    const expectedOutput = "Crazy J. Davola";
    const actualOutput = initialize("Crazy Joe Davola");
    expect(actualOutput).toBe(expectedOutput);
  });
  test("Ethan Hawke should return the same", () => {
    const expectedOutput = "Ethan Hawke";
    const actualOutput = initialize("Ethan Hawke");
    expect(actualOutput).toBe(expectedOutput);
  });
  test("This should also capitalize the middle name", () => {
    const expectedOutput = "Winnie T. Pooh";
    const actualOutput = initialize("Winnie the Pooh");
    expect(actualOutput).toBe(expectedOutput);
  });
  test("This should initialize and capitalize when there is more than 1 middle name", () => {
    const expectedOutput = "Johann C. W. A. Mozart";
    const actualOutput = initialize(
      "Johann chrysostom wolfgang amadeus Mozart"
    );
    expect(actualOutput).toBe(expectedOutput);
  });
  test("This should also trim the whitespace from both its beginning and end", () => {
    const expectedOutput = "Edward L. Seversen";
    const actualOutput = initialize(" Edward louis Seversen ");
    expect(actualOutput).toBe(expectedOutput);
  });
});
