class Foo {
    constructor(x){
      this.x = x;
    }
    static addFooBar(f, b){
      return f.x + b.x + b.y;
    }
  }
  class Bar extends Foo {
    constructor(x, y){
      super(x);
      this.y = y;
    }
  }
  let f = new Foo(5);
  let b = new Bar(10, 1);
  console.log(Bar.addFooBar(f, b));