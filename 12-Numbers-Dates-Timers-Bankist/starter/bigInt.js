'use strict';

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

console.log(Number.MAX_VALUE);
