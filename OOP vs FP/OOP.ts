// OOP.ts

// Abstraction using abstract class
abstract class Shape {
  public name: string;
  constructor(name: string) {
    this.name = name; 
  }
  // Abstract method 
  abstract getArea(): number;
}

// Inheritance: Circle extends Shape
class Circle extends Shape {
  public radius: number;
  constructor( radius: number) {
    super("Circle");
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Inheritance: Rectangle extends Shape
class Rectangle extends Shape {
  public width: number; 
  public height: number;
  constructor( width: number, height: number) {
    super("Rectangle");
    this.width = width;  
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

// Using the classes
const circle = new Circle(5);
const rectangle = new Rectangle(10, 4);

console.log(`${circle.name} Area:`, circle.getArea());
console.log(`${rectangle.name} Area:`, rectangle.getArea());
