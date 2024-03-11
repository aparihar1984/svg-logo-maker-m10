// The constructor is imported.
const { Triangle, Square, Circle } = require("./shapes.js");

// A testing suite is generated (similar to Activites 11 - 17 in Module 10) to test for a triangle with a blue background.
describe("Triangle test", () => {
  test("test for a triangle with a blue background", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

// A testing suite is generated (similar to Activites 11 - 17 in Module 10) to test for a square with a purple background.
describe("Square test", () => {
  test("test for a square with a purple background", () => {
    const shape = new Square();
    shape.setColor("purple");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="purple" />'
    );
  });
});

// A testing suite is generated (similar to Activites 11 - 17 in Module 10) to test for a circle with a red background.
describe("Circle test", () => {
  test("test for a circle with a red background", () => {
    const shape = new Circle();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="red" />'
    );
  });
});