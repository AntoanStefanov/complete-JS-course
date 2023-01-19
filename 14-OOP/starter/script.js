'use strict';

// 206. What is Object-Oriented Programming?

// A class itself is not an object.
// chertej za kushta -> realna kushta.
// Shablon(class) -> Obekt(instance/real object/)
// blueprint -> instance

// The beauty of this, is that we can use this blueprint
// to create as many instances/objects/ as we want.

// these instances/objects/ can have different data/properties/,
// but they share the same functionality/methods/.

// How do we actually design a class?
// How do we model real-world data into classes?

// Like an architecture student, asking:
// "How do we actually plan and design a house?"

// The answer is NOT straightforward.
// There is NO single correct way of designing classes.

// There are, however, 4 fundamental principles of OOP()
// There are, however, 4 fundamental principles that
// can guide us towards a good class implementation.

// Abstraction | Encapsulation | Inheritance | Polymorphism

// These techniques can actually be used outside of OOP,
// but they are especially relevant in this context.

// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649033#questions/13444264
// 9:49.

// 207. OOP in JavaScript

// 1. Prototypes.

// Prototype.

// All objects in JS are linked to a certain prototype object. We say:
// Each object has a prototype.

// The prototype object contains methods and properties,
// that all the objects that are linked to that prototype can access and use.

// This behavior is usually called 'prototypal inheritance'.

// All methods and properties of the prototype object/образец/ are accessible to
// all objects that (have/are linked to) that prototype/образец/.

// Objects inherit methods and properties from that prototype. /образец/

// const test = {};
// test.__proto__ -> Object
// test.__proto__.__proto__ -> null
