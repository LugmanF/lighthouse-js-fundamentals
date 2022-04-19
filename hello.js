const sayHello = function(name) {
  console.log("hello, " + name);
}

sayHello("Cali");
sayHello("Sophia");
sayHello("Sarah");

const sayHelloToConsole = function (name) {
console.log("Hello, " + name);
}
sayHelloToConsole('Jim');

const returnSayHello = function (name) {
return "Hello, " + name;
}
const greeting = returnSayHello('Jim');
console.log(greeting);

