// OOP.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstraction using abstract class
var Shape = /** @class */ (function () {
    function Shape(name) {
        this.name = name;
    }
    return Shape;
}());
// Inheritance: Circle extends Shape
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this, "Circle") || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
// Inheritance: Rectangle extends Shape
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this, "Rectangle") || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
// Using the classes
var circle = new Circle(5);
var rectangle = new Rectangle(10, 4);
console.log("".concat(circle.name, " Area:"), circle.getArea());
console.log("".concat(rectangle.name, " Area:"), rectangle.getArea());
