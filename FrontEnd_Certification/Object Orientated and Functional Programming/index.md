# Object Oriented and Functional Programming


## Declare JavaScript Objects as Variables

- motorBike should have a engines attribute set to a number.
- motorBike should have a wheels attribute set to a number.
- motorBike should have a seats attribute set to a number.

```sh
var car = {
  "wheels":4,
  "engines":1,
  "seats":5
};

var motorBike = {

  // Only change code below this line.
  "engines": 1,
  "wheels":2,
  "seats": 1

};
```

## Construct JavaScript Objects with Functions

A constructor function is given a capitalized name to make it clear that it is a constructor.

- MotorBike should have a engines attribute set to a number.
- MotorBike should have a wheels attribute set to a number.
- MotorBike should have a seats attribute set to a number.

```sh

var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};

// Only change code below this line.

var MotorBike = function() {
  this.wheels = 2;
  this. engines = 1;
  this.seats = 1;
};
```
