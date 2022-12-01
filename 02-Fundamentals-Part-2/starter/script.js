'use strict';
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
