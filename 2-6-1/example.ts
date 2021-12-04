class Creature {
  numberOfHands: number;
  numberOfFeet: number;
  constructor(numberOfHands: number, numberOfFeet: number) {
    this.numberOfHands = numberOfHands;
    this.numberOfFeet = numberOfFeet;
  }
}

class Dog extends Creature {
  bark: string;
  constructor(bark: string) {
    super(0, 4);
    this.bark = bark;
  }
  barking() {
    return `${this.bark}! ${this.bark}!`;
  }
  shakeTail() {
    console.log(this.barking());
  }
}

class Human extends Creature {
  name: string;
  constructor(name: string) {
    super(2, 2);
    this.name = name;
  }
  greet() {
    return `Hello! I'm ${this.name}`;
  }
  shakeHands() {
    console.log(this.greet());
  }
}

const dog = new Dog("bow-bow");
const human = new Human("Hanako");

dog.shakeTail();
human.shakeHands();
