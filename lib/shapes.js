// Using the class constructor from Activity 8 to define Shape.
class Shape {
    constructor() {
      this.color = "";
    }
    setColor(colorVariable) {
      this.color = colorVariable;
    }
  }
  
  // Triangle class inherits structure and properties defined in the Shape class constructor.
  class Triangle extends Shape {
    render() {
      // Using the polygon properties from the example given in the Acceptance Criteria.
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  // Square class inherits structure and properties defined in the Shape class constructor.
  class Square extends Shape {
    render() {
      // Using the square properties from the index.js page.
      return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
  }
  
  // Circle class inherits structure and properties defined in the Shape class constructor.
  class Circle extends Shape {
    render() {
      // Using the circle properties from the index.js page.
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
  }
  
  // Exports classes (Square, Triangle, Circle)
  module.exports = { Triangle, Square, Circle };