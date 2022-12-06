'use strict';
/*
// at the start of each script. ALWAYS. u can add comment before strict, but no code.
// it shows more errors and forbids us to do certain things. also activates a reserved words list.
// ex. 'interface'.

let hasDriversLicense = false;
const passTest = true;

// use strict will throw reference error if variable is misspelled.
// And will be silence if there is no 'use strict';.
// But I have eslint installed.

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log('He has drivers license');

// const interface = 'a';

// 33. Functions

function logger() {
  // function body.
  console.log('My name is Antoan');
}

logger(); // invoking the function / running the function / calling the function.
logger();
logger();

// fruit here is a parameter.
function fruitProcessor(fruit) {
  return `${fruit} juice`;
}

const juiceMade = fruitProcessor('apple'); // here 'apple' is an argument.

console.log(juiceMade);

console.log(fruitProcessor('banana')); // here 'banana' is an argument.

// 34. Function Declarations vs. Function Expressions

// THIS IS CALLED FUNCTION DECLARATION.
// because we simply use the function keyword to declare a function,
// similar to declaring a variable. const foo = 42; / function foo() {}
function calcAge1(birthYear) {
  return 2022 - birthYear;
}

console.log(calcAge1(2000));

// FUNCTION EXPRESSION -> function with no name(anonymous function),
// ALL THIS
// function (birthYear) {
//  return 2022 - birthYear;
// }

// IS EXPRESSION, and an expression produces value. This way we can store the value.
// in this case we store it in calcAge2, which then this will be the function.
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

// calcAge2 -> is a variable which HOLDS/CONTAINS THE FUNCTION VALUE FROM THE EXPRESSION.

const age2 = calcAge2(1994);
console.log(age2);

// Important to know that we have these two types of functions in JS.

// In some places we will actually need to write the functions like an expression.
// Through the course we will see it.

// !!! In JS functions are actually JUST VALUES. just like a number or a string, or a boolean value.
// So function is NOT a type, it's NOT like a number type or string type. It's just a value. like the number 3.
// So if it's a value, we can store it in a variable, just like 'const a = 3' the number.

// KEEP THIS IN MIND.

// CHECK THIS: Immediately invoked function expression

// The main difference between function declarations and functions expressions is that
// we can call function declarations BEFORE they are defined in the code.

console.log(sumNums(2, 3));

function sumNums(a, b) {
  return a + b;
}
// This happens because of a process called 'hoisting'. - future section/lecture.
// It's not such a good idea in many cases,
// But do we use it that way?

// Which way should I use (declaration or expression) ?
// Often times is just a matter of personal preference.
// He prefers function expressions, because,
// this then forces him into a nice structure,
// where he has to define all the functions first, at the top of the code,
// And only then he can call them, this makes the code a bit nicer and more structured.
// Also he likes having everything stored in variables, both values and functions
// that's his personal preference. Many devs dont agree with it.
// And they prefer to use function declarations instead.
// If I prefer function declarations, just use it then.
// No problem at all.
// But I still need to know both of them(expression and declaration functions).
// Both have place in JS.


// 35. Arrow Functions

// Third type of function, it was added to JS in ES6.
// That's the arrow function.

// An arrow function is simply a special form of function expression,
//  that is shorter and therefore faster to write.
// BUT IT'S STILL FUNCTION EXPRESSION.

// Function expression
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

console.log(calcAge2(2000));

// Arrow expression -> my way
const calcAge3 = (birthYear) => {
  return 2022 - birthYear;
};

console.log(calcAge3(2001));

// Arrow expression -> his way
// ctrl + , -> search -> arrow parens || prettier.
// https://hudochenkov.com/posts/arrow-function-parentheses/ !!!!
// https://arcticicestudio.github.io/styleguide-javascript/rules/arrow_functions.html#single-argument-parentheses !
// when we want one parameter, we can OMIT the oval brackets ().
// https://eslint.org/docs/latest/rules/arrow-parens !!
// when function body(the code block) is one line, we can OMIT 'return' and the curly brackets.
// the return happens implicitly. Quietly. So, the value will be automatically returned.
const calcAge4 = (birthYear) => 2022 - birthYear;
// Excellent for simple one-liner functions. This is gonna be extremely helpful in certain situations.

console.log(calcAge4(2002));

// when more than 1 lines of code is needed, we put it in code block with curly braces.
// Also we need the return keyword.
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  return `${firstName} has ${65 - age} until retirement`;
};

console.log(yearsUntilRetirement(2000, 'Antoan'));

// What type of funtion should I use ?
// Arrow function for everything since they are so easy to write? - NO, but it's also complicated!
// It's complicated because there is another fundamental difference,
// between the arrow function and the more traditional functions(function declarations and function expressions).
// It's the fact that arrow functions do NOT get a so-called 'this' keyword. (in further lecture).
// We'll keep using mainly the traditional functions(probably the function expressions most),
// except for very simple one - liner functions(arrow functions).
// that does not mean Arrow functions are not important. They are important!

// He even loves them and use them all the time. Sometimes he doesn't write regular functions at all.


// 36. Functions Calling Other Functions
// Calling a function from inside another function.
// DRY PRINCIPLE -> functions.
// If we wanted to cut the fruit in 3 pieces,
// we would JUST CHANGE THE number in the cutFruitPieces function.
// And not observing everywhere that we cut the pieces if we didn't have a function.
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(applesNumber, orangesNumber) {
  const applePieces = cutFruitPieces(applesNumber);
  const orangePieces = cutFruitPieces(orangesNumber);
  return `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
}

console.log(fruitProcessor(2, 3));


// 37. Reviewing Functions

// regular function expression.
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  // WE RETURN NUMBERS, and not a string, as we did before, because,
  // that's usually what we DO.
  // Especially when we actually recieve a number as an input.(birthYear)!
  // Good Practice -> When we take a number as argument, we also return a number.
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement; // return will IMMEDIATELY exit the function. https://eslint.org/docs/latest/rules/no-unreachable
  }
  console.log(`${firstName} has already retired.`);
  return -1; // -1 is standard number in programming. It's shows us clearly that this has no meaning.
};

console.log(yearsUntilRetirement(2000, 'Antoan'));
console.log(yearsUntilRetirement(1920, 'Roy'));

// function declaration -> function that can be used before it's declared/defined.
function calcAgeReview(birthYear) {
  return 2022 - birthYear;
}

// function expression -> essentially a function value stored in a variable.
const calcAgeReview2 = function (birthYear) {
  return 2022 - birthYear;
};

// arrow function(they are also function expressions, but special ones),
// -> great for a quick one-line function. Has no 'this' keyword(more later).
// no return, no curly braces {} => if one line.
const calcAgeReview3 = (birthYear) => 2022 - birthYear;

console.log(calcAgeReview(2000), calcAgeReview2(2000), calcAgeReview3(2000));


// 39. Introduction to Arrays.
// Our first data structure.

// What if we want to store friends' names, so I could use them later in the program.

// const friend1 = 'Josh';
// const friend2 = 'Jo';
// const friend3 = 'Jeff';

// Not fun . imagine we want to represent 10 friends ?

// It would be great if we could bundle all these names together.
// INTO SOME BIGGER CONTAINER ?
// Well, that's why we have data structures in JS.
// And Arrays are such a data structure.

// An Array is like a big container into which we can throw variables/values,
// and then later, reference them.

// Super Important, programming most of the time is all about DATA.

// We get data from somewhere, we store(data structures -> in case we have more than 1 single values)
// and process it,
// And then we give some data back.

// The two most important data structures(at least in JS) are Arrays and Objects.

// we can put different values into the array.
// one way of creating a new array, this way is most used.
const friends = ['Josh', 'Jo', 'Jeff'];
console.log(friends);

// Another way of creating a new array
const years = new Array(1995, 2000, 2001, 2020);
// Array here he says that is a FUNCTION, because we called it with () and args ?
console.log(years);

// Array can hold as many items/values as we want,
// And also values of any type, that we would like.
// Mixed.

// More usual is using brackets like this. (called liteal syntax).
// const friends = ['Josh', 'Jo', 'Jeff'];

// Now we know how to create an Array, then how to put elements in it ?
// But ofc we need to have a way to get them out.
// And for that we use the square brackets syntax again.

// Logging the first element of the friends array.
console.log(friends[0]);
// ARRAYS ARE ZERO-BASED. which means first element is the element number zero(0).
console.log(friends);

console.log(friends.length); // property, check box info after writing friends for any method/property u need.

// we can use this to automatically get the last element of ANY array.
// useful so that, we don't have to count the number of elements
// -1 bcs length is not zero-based.
console.log(friends[friends.length - 1]);
// friends[any expression] -> it's not needed to be just a number, like friends[0].
// friends[friends.length - 1] -> expression in [].
// remember that expression is something that produces a value.
// first the expression will be calculated, then it will get the element in friends arr at position 2.
// We can't put a statement in the [] , UNDERSTAND THE STATEMENT vs. EXPRESSION differences.

// More stuff:
// the square brackets (friends[0]) it's not only for retrieving elements from the Array.
// We can also change it to ADD elements to the Array.

// replacing element
friends[friends.length - 1] = 'Tony';
console.log(friends);

// WAIT! Didn't he say that we can't mutate/change variables declared with const ?!
// friends is declared with const, but still able to change one of the elements.
// Isn't that a contradiction?

// Well, the answer is: ONLY PRIMITIVE VALUES are UNCHANGABLE/IMMUTABLE,
// but an Array is not a primitive value, bcs
// The Non-Primitive data type has only one member i.e. the Object. !!!!!!

// We can mutate/change an Array, bcs of the way that JS stores things in memory.
// More, later about that in section "How JS works behind the scenes".

// for now remember that we can mutate arrays even though they are declared with const.
// Now what we can't do is to actually replace the entire Array.
// friends = ['Bob', 'John', 'Maria']; -> error (friends is constant).

// adding element at the end (my thought!)
friends[friends.length] = 'Bob';
console.log(friends);

// !!!!!!!!!!!!
// Another thing, an Array can actually hold values with different types.
// const tony = ['Antoan', 'Stefanov', 22];

// we can calculate the age (22) from other values,
// that works, because in each position, JS simply expects expression.
const tony = ['Antoan', 'Stefanov', 2022 - 2000];
// 2022 - 2000 is an expression, and an expression produces a value, which will be stored in the new Array.
console.log(tony);

// this works for variables too.

const bestDay = 'Friday';

const days = [bestDay, 'Saturday', 'Sunday'];
// bestDay will be replaced with the actual string(the value of the variable).

console.log(days);

// Out of context but important!
// !!!!! Either way, the program can store that data in variables.
//  Each variable has a name, a value, and a type.
// The value might change over time, and that's why its “variable.”

// we can put array in the array.
const firstName = 'Antoan';

// with this we have all the relevant data about Antoan, in one handy data structure.
// Really convenient, bcs we don't have to create one variable for each of the data points.
const antoan = [firstName, 'Stefanov', 2022 - 2000, 'learner', friends];

// checking all the expressions (firstName, 2022 - 2000, friends) being replaced with the VALUES that they produce.s
console.log(antoan);

// Small Array Exercise. So we see, why arrays are so useful.

// func expression
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

// let's say we have an array of birth years, and we want to calculate the ages for some of them.

const birthYears = [2000, 2001, 2002, 2003];

// now we will be able to use the calcAge function and then
// store the results of calculating the ages for some of the birth years into a new array.

// Since we started with an array it's usualyy a good idea, to also end up with a new array.
const ages = [
  calcAge(birthYears[0]), // that line is an expression (an element of an array expects an expression).
  calcAge(birthYears[birthYears.length - 1]), // that line is an expression (an element of an array expects an expression)
  // birthYears.length - 1 -> this is also an expression. 
  // birthYears[any expression] -> it's not needed to be just a number, like birthYears[0].
];
// we can place function calls into an Array just fine, because they will produce a value.
// The function will be executed, and the result of them will be placed in the array.
console.log(ages);


// 40. Basic Array Operations(Methods)

// JS has some built-in methods that we can directly apply on arrays.
// Let's see some useful array methods.

const friends = ['Jeff', 'Joe', 'Jo'];

// Adding an element to the end of the array
const returnedPushValue = friends.push('J.J.');

console.log(returnedPushValue); // returns the mutated length of the array.
// not used ver often, after the push we call it a day,
// bcs we dont need immediately the length of the mutated array, but if we do we need it, we can use it.

// push is a method, which technically is a function,
// but any function attach to an object is called method.
console.log(friends);

// method that adds element to the front of the array.
friends.unshift('Jonathan'); // it also returns the length of the mutated array, like the push method.

console.log(friends);

// methods to remove element from arrays.

// remove last element from array.
const removedElement = friends.pop(); // returns the removed element.
// useful sometimes.
console.log(friends);
console.log(removedElement);

// remove first element from array
const shiftedElement = friends.shift();
console.log(friends);
console.log(shiftedElement);

// checking position of an element
console.log(friends.indexOf('Joe'));
console.log(friends);

// similar method to indexOf, but which is a bit more modern
// and in his opinion also more useful.
// this one is an ES6 method , called includes.

// this method uses STRICT EQUALITY for the check!
console.log(friends.includes('Joe')); // returns boolean -> check it's docs. WTF, r u commenting?

// so we can use for conditionals, very useful application of this method


// 42. Introduction to Objects.
// Object is another data structure. (also known as map, dictionary, hash-table in other languages).

// We used array(data structure) to store multiple related values in the same variable.
const antoanArray = [
  'Antoan',
  'Stefanov',
  2022 - 2000,
  'Learner',
  ['Mike', 'Roy'],
];
console.log(antoanArray);

// In array there is no way of giving these elements a name, ex. firstName: 'Antoan', etc...
// So we can't reference the values by name, but only by their order number. ex. antoanArray[0]

// To solve that problem, we have another data structure in JS, called Object.
// In object we define key-value pairs. So we can give each value a name. ex. firstName: 'Antoan'
// These keys are also called PROPERTY.

// const obj = {}; -> an object. (curly brackets/braces).

const antoanObject = {
  firstName: 'Antoan', // key(variable name)-value pair.
  secondName: 'Stefanov', // key-value pair...
  age: 2022 - 2000, // key(variable name) - value(expression).
  // (property) friends: string[] || (property) friends: (string | number)[] /hold mouse pointer on the key.
  // which means that variableName: T[] -> means the key holds value of an array with a generic (T)ype ?
  friends: ['Mike', 1],
};
// Now we have an object which contains 5 key-value pairs.
// These keys are also called PROPERTY.
// We say that this object, called antoanObject, has 5 properties.
// we say, property firstName with the value of 'Antoan', and so on...

// Objects are probably the most fundamental concept in the whole JS language.
// There are many ways of creating objects.
// And simply writing an object in the code like this is probably the simplest way of creating an object.
// with the {curly braces}.
// creating an object with the {curly braces} it's the easiest,
// and it's called the object literal Syntax.
// because we are LITERALLY writing down the entire object content.

// ********************
// const arr = []; is array literal syntax. ->
// https://www.google.com/search?q=array+literal+js&oq=array+literal+js&aqs=chrome..69i57j0i512l2j0i22i30l7.3015j0j7&sourceid=chrome&ie=UTF-8
// ********************

// We use objects to essentially group together different variables that really belong together.
// such as the properties of antoanObject

// the big difference between objects and arrays is that,
// in objects the order of these values does NOT matter AT ALL,
// when we want to retrieve them.
// KEEP THAT IN MIND.

// So, in arrays the order of which we specify the elements MATTERS a lot,
// because that's how we access these items.
// so, we can only access array items using their order number.

// This means,we should use arrays for more ordered data,
// and objects for more unstructured data, and data that,
// we actually want to name, and then retrieve from the object,
// based on that name/property/key.

// How do we get data from object -> in next lecture.
// my guess ... ->
console.log(antoanObject.firstName); // firstName is property of the antoanObject.


// 43. Dot vs. Bracket Notation

const antoanObject = {
  firstName: 'Antoan',
  lastName: 'Stefanov',
  age: 2022 - 2000,
  friends: ['Mike', 'John'],
};

console.log(antoanObject);
// in browser console, the object's properties could be ordered alphabetically.

// the order of properties does NOT matter.,
// bcs we simply get the properties from the object using the key itself.
// there is 2 ways to do that.

// first way of getting a property from an object is by using the dot notation
console.log(antoanObject.age);
// the dot(.) is actually an operator, which will go to the object(antoanObject),
// and then retrieve property with the name that we specify.

// !!!!!!!!!!!!! A property is a “key: value” pair

// We can do the same thing with the brackets notation.
console.log(antoanObject['age']); // [string with the key]

// DIFFERENCE between the 2 ways:
// In the brackets notation obj[here] we can actually put any expression that we'd like.
// So, we don't have to explicitly write the string obj[here], but instead we can
// compute it from some operation. /operations is basically an expression/.

// give it a try. Imagine a variable in which we store the repeating part in,
// firstName and lastName, which is Name.

const nameKey = 'Name';

console.log(antoanObject['first' + nameKey]); // [expression] used.
console.log(antoanObject['last' + nameKey]); // [expression] used.

// doing something like this is more common than you think.
// important to understand that,
// obj[here] WE COULD PUT ANY EXPRESSION.

// this above does not work with the dot notation/operator.
// console.log(antoanObject.`first` + nameKey);

// that's the reason we need the [] notation.
// in . notation we have to use the real final property key.
// not a computed one.
console.log(antoanObject.age); // like this one (age).

// When we use the dot notation and the brackets notation ?
// When we need to first compute the property key, we use [] notation.
// In any other case just use the dot notation. /looks cleaner and easier to use/.

// now, to make the need for brackets notation clearer, let's see another example.

// Let's say we don't know yet what property we want to show,
// and instead we get this information from some user interface(UI).

// LEt's use the prompt function for that.
// prompt is yet another built in function in JS.
const userInterestedIn = prompt(
  'What do you want to know about Antoan? Choose between firstName, lastName, age, friends'
); // returns string.

console.log(antoanObject.userInterestedIn); // why ESLINT don't throw error ? .userInterestedIn is ANY ?
// we get undefined when we try to access a property on object which doesn't exist.
// so antoanObject does NOT have a property called 'userInterestedIn'.

console.log(userInterestedIn); // string.
console.log(antoanObject[userInterestedIn]); // brackets notation in useful way [expression].

// If not existing property is given from prompt, make a check ?
antoanObject[userInterestedIn]
  ? console.log('Existing property: ' + antoanObject[userInterestedIn])
  : console.log('No such property: ' + userInterestedIn);

// Now that u know how to access properties from object,
// le's also learn how to use both the dot/brackets notation,
// TO ADD new properties to the object.
// pretty straightforward

antoanObject.location = 'Levski';
antoanObject['twitter'] = '@antoanstefanov'; // [ any expression ]

console.log(antoanObject);

// small challenge

// "Antoan has 2 friends, and his best friends is called Mike/0 index/"

console.log(
  `${antoanObject.firstName} has ${antoanObject.friends.length} friends and his best friend is called ${antoanObject.friends[0]}`
);

// in terms of operator precedence, lets check why it actually works this way,
// the .(dot) is an operator AND the [](brackets) are operator !!!!
// google -> mdn operator precedence (the table one)
// IN MDN .(DOT) operator is called 'Member Access'
// and [] is called 'Computed Member Access'.
// it's computed because, as he mentioned multiple times,
// we can compute the property keys that we want to access. /expression/

// both have really high priority and,
//  both are left - to - right and that's why all of the string log works.
// we have 2 dots /antoanObject.friends.length/ and they are executed left-to-right.
// antoanObject.friends => ['Mike', 'John'] -> ['Mike', 'John'].length -> 2.

// same this for antoanObject.friends[0] :
// antoanObject.friends -> ['Mike', 'John'] -> ['Mike', 'John'][0] -> 'Mike'


// 44. Object Methods

// Objects can hold properties of any type, just like arrays.
// They can hold even arrays, and in fact, they could even hold objects.

// Let's take it further
// remember, he said that functions are really just another type of value.
// If a function is just a value, then that means that we can create a key-value pair(property),
// In which the value is a function.

// So we can add functions to objects.

const antoanObject = {
  firstName: 'Antoan',
  lastName: 'Stefanov',
  birthYear: 2000,
  job: 'learner',
  friends: ['Mike', 'John'],
  hasDriversLicense: true,

  // challenge chech last notes for the lecture.
  getSummary: function () {
    return `${this.firstName} is a ${
      this.age ? this.age : this.calcAge()
    }-years-old ${this.job}, and he has ${
      this.hasDriversLicense ? 'a' : 'no'
    } driver's license.`;
  },

  // function name(key) => function as expression (expression produces a value).
  // calcAge: function (birthYear) {
  //   return 2022 - birthYear;
  // },
  // now calcAge is a method(method is a function attached to an object).

  // a function declaration wouldn't work here. we need an expression.
  // calcAge key holds a function value.

  // calcAge: function () {
  // console.log(this);
  // return 2022 - this.birthYear;
  // if we write antoanObject.birthYear, we will still violate the DRY principle.
  // let's say if we want to change the name of the object? Then it will not work.
  // And we will have to change it here also, so u know why, now.
  // },

  // check line 692.
  calcAge: function () {
    // we can use the 'this' keyword also to store a new property.
    this.age = 2022 - this.birthYear;
    // we calculate the age  and then we create a new property on the current object,
    // in this case on the antoanObject
    return this.age;
    // of course we don't even need to return anything if we dont want to,
    // we could make this method only calc the age, but not even return it.
    // but I think it's a good practice to actually also return it.
  },
};

// accessing the objet method. /dot(.) notation/
// console.log(antoanObject.calcAge(antoanObject.birthYear));

// we have access using the [brackets] notation.
// console.log(antoanObject['calcAge'](antoanObject.birthYear)); // [expression]

// We can actually access the birthYear property directly from the antoanObject,
// instead of having to pass it in.

// !! We can because in every method JS gives us access to a special variable called 'this'.
// we can change the calcAge function, so that we read the birthYear directly from the object itself.
// without having to pass it in as a parameter in the function (this one ->):

// ****************************************************************
// calcAge: function (birthYear) {
// return 2022 - birthYear;
// }
// ****************************************************************

// reformed bcs of the 'this' use.
// ****************************************************************
// calcAge: function () {
// return 2022 - this.birthYear;
// }
// ****************************************************************

// !!! 'this' keyword/object is basially equal to the object ON which the method is called.
// In other words, it is equal to the object calling the method.

// which object is calling the method ?
// console.log(antoanObject.calcAge());
// the object that is calling the method is 'antoanObject'.
// that means that inside this method(calcAge) the 'this' variable will point to antoanObject object.
// whatever appears before the dot(.) is the one who is calling the method.
// therefore in the method, 'this' points to antoanObject.
// And if 'this' points to antoanObject, then 'this.birthYear' is 2000. /check the object/

// really useful 'this' keyword.

// now, let's say that we need to access the age multiple times in the program.
// it will look something like this:
// console.log(antoanObject.calcAge());
// console.log(antoanObject.calcAge());
// console.log(antoanObject.calcAge());

// that will work, of course, but the computation in the method will be done 3 times,
// return 2022 - this.birthYear;
// No big deal in this case, but  it might be a heavier computation.
// that takes some more time.
// it would be a bad practice to do this multiple times,
// instead what we can do, is to calculate the age ONCE, then store it in the object.
// and then when we need it at later point, we can then just retrieve the age as a property from the object.

console.log(antoanObject.calcAge());
console.log(antoanObject.age);
console.log(antoanObject.age);

// we only needed to calculate the age just once.
// and from there we simply retrieve the age as a property from the object that we calculated.
// most efficient solution, let's say.

// another small challenge.

// write a method 'getSummary' -> retuns a string, data about antoanObject.
// 'firstName is a {age}-years-old learner, and he has a/no driver's license.'

console.log(antoanObject.getSummary());

// array.push(1); -> means that arrays are also objects, push is a method of that object.


// 46. Iteration: The for Loop

// when we learned about if/else statement, we mentioned that
// !! if/else statement is a control structure.
// And that there are more control structures.

// One of the other control structures are LOOPS /for loop & while loop/.

// Loops are a fundamental aspect of every programming language.
// They allow us to automate repetitive tasks.
// Tasks that we have to perfom over and over again.

// Analogy -> lifting 10 times a dumbell.

// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// till repetition 10 !!!
// DRY VIOLATION !!!

// (For) Loop -> Loop that has a counter.
// for statement
// thee parts ->
// initial value of a counter,
// conditional (evaluated before each iteration of the loop -> if false => loop stops),
// for loop keeps running while condition is TRUE.
// increment the counter after each iteration of the loop.
for (let rep = 1; rep <= 10; rep++) {
  // rep is available in this code block.
  console.log(`Lifting weights repetition ${rep}.`);
}


// 47. Looping Arrays, Breaking and Continuing

// One of the most used applications of for loops is to loop through arrays.

const antoanArray = [
  'Antoan',
  'Stefanov',
  2022 - 2000,
  'learner',
  ['Mike', 'Roy', 'John'],
];

// Let's log every item of the array.
// note -> array is an object. 7 primitives and 1 non primitive called 'object'.

for (let i = 0; i < antoanArray.length; i++) {
  console.log(antoanArray[i]);
}

// let's create a new array which will contain the types of the antoanArray array/ type is object /.

const antoanArrayTypes = []; // empty array.

for (let i = 0; i < antoanArray.length; i++) {
  // One way of filling an array.
  // antoanArrayTypes[i] = typeof antoanArray[i];

  // Another way of filling an array.
  antoanArrayTypes.push(typeof antoanArray[i]);
  // that's kinda cleaner
}

console.log(antoanArrayTypes);
// antoanArrayTypes[10] = 'a';
// console.log(antoanArrayTypes);

// Let's see more practical example.

const birthYears = [2000, 2005, 2010, 2015];
const ages = [];

for (let i = 0; i < birthYears.length; i++) {
  ages.push(2022 - birthYears[i]);
}

console.log(birthYears);
console.log(ages);

// To finish, let's learn about two important statements for loops.
// break / continue.

// continue -> exit the CURRENT iteration of the loop and CONTINUE to the next one.
// break -> completely terminate the whole loop, NOT just the current iteration.

// continue statement
for (let i = 0; i < antoanArray.length; i++) {
  // let's log only items that are strings.
  const currentItem = antoanArray[i];

  // use ternary operator when u assign a value(true:false), but in this case, if.
  // ternary when u use the both expressions for true/false.
  if (typeof currentItem !== 'string') continue;
  console.log(currentItem);
}

// break statement
for (let i = 0; i < antoanArray.length; i++) {
  // let's log no other items after we found a number.
  const currentItem = antoanArray[i];
  if (typeof currentItem === 'number') break;
  console.log(currentItem);
}


// 48. Looping Backwards and Loops in Loops.

const antoanArray = [
  'Antoan',
  'Stefanov',
  2022 - 2000,
  'learner',
  ['Mike', 'Roy', 'John'],
];

// Loop it backwards.
// 4, 3, 2, 1, 0

// for (let i = antoanArray.length - 1; i >= 0; i--) console.log(antoanArray[i]); -> One line ?

// https://stackoverflow.com/questions/22876341/is-it-correct-to-use-one-line-for-loop-in-javascript-without-curly-brackets
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements

// All Javascript cares about is what is immediately after the for statement.
// It can be a statement block(multiple statements in curly brackets) or a single statement.

// This is true for nearly every control statement in Javascript. (if/else, for loop, while loop?)
// check the control statements ?

for (let i = antoanArray.length - 1; i >= 0; i--) {
  const currentItem = antoanArray[i];
  console.log(currentItem);
}

// Loop in Loop / Nested Loop /.

for (let exerciseNumber = 1; exerciseNumber <= 3; exerciseNumber++) {
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exerciseNumber}: Repetition ${rep}`);
  }
}

*/

// 49. While Loop

// The For Loop -> now used for comparison.

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`repetition ${rep}`);
// }

// While Loop is more versatile than the For Loop.
// Which means it can be used in a larger variety of situations.
// It's because it does NOT really need a counter. While Loop only needs a condition.
// let rep = 1;
// while (rep <= 10) {
//   console.log(`repetition ${rep}`);
//   rep++;
// }

// Example without depending on a  counter. It will depend on a random variable.

// Roll a dice until we hit a 6. We don't know how many times will roll, so no counter is needed.

// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript

let dice = Math.floor(Math.random() * 6) + 1; // returns a number between 0 and 1;

// what if first dice is a 6 right away?
// the while loop will never start.
// The conclusion is that the while loop does really NOT have to depend on any counter variable.
// Whenever I need a loop without a counter, I can reach for the while loop,
// This happens whenever I do NOT know beforehand how many iterations the loop will have.
// In that situation the while loop is the right tool for the job.
// This happened with the dice, we didn't know how many iterations will the loop have.

// If we know how many iterations we will have, that means we gonna need a counter,
// for example, looping over an array. (0 -> array.length - 1 OR we know the number of items in the array).
// therefore the for loop is usually the right choice to loop over an array. 

while (dice !== 6) {
  console.log(dice);
  dice = Math.floor(Math.random() * 6) + 1;
}
