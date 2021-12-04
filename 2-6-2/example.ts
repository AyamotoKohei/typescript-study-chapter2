class Creature {
  numberOfHands: number;
  numberOfFeet: number;
  constructor(numberOfHands: number, numberOfFeet: number) {
    this.numberOfHands = numberOfHands;
    this.numberOfFeet = numberOfFeet;
  }
}

class Human extends Creature {
  protected name: string;
  constructor(name: string) {
    super(2, 2);
    this.name = name;
  }
  protected greet() {
    return `Hello! I'm ${this.name}`;
  }
  public shakeHands() {
    console.log(this.greet());
  }
}

class Taro extends Human {
  constructor() {
    super("Taro");
  }
  public greeting() {
    console.log(this.greet()); // 継承関係では protected メンバーを実行可能です
  }
}

const taro = new Taro();

taro.greeting(); // public メンバーは実行可能
// taro.greet(); // protected メンバーは実行不可
taro.shakeHands(); // 親クラスの public メンバーは実行可能
