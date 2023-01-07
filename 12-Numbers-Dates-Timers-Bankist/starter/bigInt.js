'use strict';

console.log(Number.MAX_VALUE); // just u know that, this prop exists.

// we learned that numbers are represented internally as 64 bits.
// That means that there are exactly 64 ZEROS & ONES (0 & 1)
// to represent any given number. Now, of these 64 bits,
// only 53 are used to actually store the digits themselves.
// The rest is for storing the position of the decimal point and the sign.

// Now, if there are only 53 bits to store the number.
// That means that there is a limit of how big numbers can be.

// We can calculate that number:
console.log(2 ** 53 - 1); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9 007 199 254 740 991
// 11111111111111111111111111111111111111111111111111111 -> num in BINARY
// 53 times of 1. rest of the 64 is for position of the decimal point and sign.

// These above is the biggest number that JS can safely represent.
// Any integer larger than the above is NOT SAFE.
// Which means, that it cannot be represented accurately. NOT PRECISE AFTER THAT

// So, this can be a problem sometimes, bcs in some situations we might need
// really, really big numbers.

// Example: DATABASE IDs.
// Other example: interacting with real 60 bit numbers
// and these numbers are actually used in other languages.
// meaning of real 60 bit -> which use real 60 bits instead of 53 like JS!
// interacting through API, getting a num that is larger than our SAFE int.
// then we have no way of storing that in JS, until ES2020.

// A new primitive was added, called BigInt (big integer)
// can be used to store numbers as large as we want.

console.log(231231293812381288128821812821);
// output: 2.312312938123813e+29, probably does NOT have precision. NOT SAFE INT

// but if we use 'n' at the end. (BIG INT)
console.log(231231293812381288128821812821n); // BIG INT (n)
// n transforms a regular number into a BigInt number.
// ACCURATE INTEGER.

// Operations with these numbers. All usual operators still work the same.

console.log(10_000n + 10_000n); // no need for BigInt, just a demonstration.
console.log(10_000n * 10_000n); // no need for BigInt, just a demonstration.
// Same goes on for the other operators. + * - % **

// NOT POSSIBLE TO MIX BIGINT WITH REGULAR NUMBER. !!
// console.log(2132132141231231231283981238912388n + 23); // ERROR
// to solve this we convert 23 to a BigInt. /23n/ or BigInt(23)

// NOTE: We can compare & string concatenation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#comparisons
console.log(2n >= 2);
console.log(2n > 1);
// but
console.log(20n === 20); // false, it makes sense tho.
// === does NOT do type coercion!!! these values have different primitive types!
// BigInt === number // FALSE OF COURSE.
console.log(typeof 20n, typeof 20);

console.log(21312312312312312n + ' is big integer');
// the num is converted to string

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#usage_recommendations
