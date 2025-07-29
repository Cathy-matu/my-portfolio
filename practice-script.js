function createGreeting(greeting = "") {
  const myGreet = greeting.toUpperCase();

  return function(name) {
    return `${myGreet} ${name}`;
  };
}

const sayHello = createGreeting('hello');
const sayWelcome = createGreeting('welcome');

console.log(sayHello('Catie'));
console.log(sayHello('Jordan'));
console.log(sayWelcome('Sam'));