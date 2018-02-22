==========================================
Arrow functions basic syntax
==========================================


// consider the following code snippet
'use strict';
var getPrice = function() {
  return 5.99;
};
console.log(typeof getPrice);
console.log(getPrice());

==========================================
// The above code can be rewritten as:
==========================================

'use strict';
// We can skip function keyword and use arrow operator
var getPrice = () => {
  return 5.99;
};
console.log(typeof getPrice);
console.log(getPrice());

==========================================

'use strict';
// We can also skip braces and return keyword if the function returns a single expression
var getPrice = () => 5.99;
console.log(typeof getPrice);
console.log(getPrice());

// Output:
// function
// 5.99


===================================================================================================================================================


/*
  Arrrow function arguments
*/

'use strict';
// Arguments can be passed as follows
var getPrice = (count) => count * 5.99;
console.log(getPrice(2));

// Output: 11.98

==========================================

'use strict';
// Arguments can be passed as follows
var getPrice = (count) => count * 5.99;
console.log(getPrice(2));

// Output: 11.98

==========================================

'use strict';
// We may skip paranthesis around the arguements if there is only one arguement.
var getPrice = count => count * 5.99;
console.log(getPrice(2));

// Output: 11.98

==========================================

'use strict';
// Paranthesis must be present for zero or more than one agruements.
var getPrice = (count, tax) => count * 5.99 * (1 + tax);
console.log(getPrice(2, 0.072));

// Output: 12.84256


===================================================================================================================================================


'use strict';
var getPrice = (count, tax) => count * 5.99 * (1 + tax);
// Arrow functions do not have the prototype property
console.log(getPrice.hasOwnProperty('prototype'));

// Output: False
