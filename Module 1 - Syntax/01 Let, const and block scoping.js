==========================================
Variable Scoping: let and const
==========================================

// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope.
// (to the top of the current script or the current function).
// For example, consider the following code.

'use strict';
console.log(productId);
var productId = 12;

// Output: undefined
// This code is interpreted by Javascript as

==========================================

'use strict';
var productId;
console.log(productId);
productId = 12;

// Hence we see undefined as output


===================================================================================================================================================


// 'let' keyword
// No Hoisting takes place for let keyword

'use strict';
console.log(productId);
let productId = 12;

// Output: Uncaught ReferenceError: productId is not defined

==========================================

// By using let, we make sure variable declaration happens before we use the variable
'use strict';
let productId = 12;
console.log(productId);

// Output: 12


===================================================================================================================================================


// 'let' keyword
// default value is undefined just like it is for var

'use strict';
let productId;
console.log(productId);

// Output: undefined


===================================================================================================================================================


// Block scope
'use strict';
// productId defined as 12. Consider this as productId_1.
let productId = 12;
// New Block. This could be an if block, for loop block etc
{
  // productId defined as 12. Consider this as productId_2. Note that this is not a redifination of productId
  // defined outside of this block (productId_1).
  // Here, a new variable 'productId' is added to memory whose scope is only within this block.
  let productId = 2000; // At this instance there are 2 productId variables. One valid within this block and
                        // one outside this block
  // Approaching the end of the block. productId defined within this block(productId_2) is going to be destroyed.
}
// productId inside the above block(productId_2) was destroyed. Now the below log would access the value of
// productId defined initially(productId_1)
console.log(productId);

// Output: 12


===================================================================================================================================================


// Block scope
'use strict';
{
  let productId = 2000;
}
// We get a ReferenceError here as the productId was defined only within the above. So it got created within that
// block and got destroyed after the cursor came out of the block. At this point, productId does not exist.
console.log(productId);

// Output: Uncaught ReferenceError: productId is not defined


===================================================================================================================================================


'use strict';
function updateProductId() {
  // Here we are not redeclaring 'productId'. Hence the function will access 'productId' declared in the calling
  // block/function scope. 
  //! Note that a varibale declared using 'let' in a parent block is available in the child block.
  productId = 12;
}
let productId = null;
updateProductId();
console.log(productId);

// Output: 12


===================================================================================================================================================


'use strict';
let productId = 42;
for(let productId=1; productId < 10; productId++) {
}
// We get 42 as output because the productId that was initialized to 1 and incremented all the way to 10 in the
// above loop was terminated with the end of that loop.
console.log(productId);

// Output: 42


===================================================================================================================================================


/*
  In the below code snippet, we updateFunctions is a list of functions. We iterate over the variable i from
  1 to 3 and in each iteration we create a function that returns current value of i and append this function
  to the updateFunctions list.
  Simply by looking at the code, one would assume that 'updateFunctions[0]()' would return 0,
  updateFunctions[1]() would return 1 and so on. But this is not the case. Each function only holds a reference
  to i so each function call would return the latest value of i. That is 3
*/
'use strict';
let updateFunctions = [];
for(var i=0; i<3; i++) {
  updateFunctions.push(function() {return i});
}
console.log(updateFunctions[0]());
console.log(updateFunctions[1]());
console.log(updateFunctions[2]());

// Output:
// 3
// 3
// 3

==========================================

/*
  To testify that it is in fact a reference to i, have a look at the below example
*/
'use strict';
let updateFunctions = [];
for(var i=0; i<3; i++) {
  updateFunctions.push(function() {return i});
}
console.log(updateFunctions[0]());
console.log(updateFunctions[1]());
console.log(updateFunctions[2]());
i = 45;
console.log(updateFunctions[0]());
console.log(updateFunctions[1]());
console.log(updateFunctions[2]());
i = 33;
console.log(updateFunctions[0]());
console.log(updateFunctions[1]());
console.log(updateFunctions[2]());

// Output:
// 3
// 3
// 3
// 45
// 45
// 45
// 33
// 33
// 33


===================================================================================================================================================


/* 
  The above issue can be solved using let keyword. If we use let keyword instead of var, each iteration of the
  loop will have it's own blocked scoped variable 'i' and hence functions created in each iteration will point
  to different references and our code will work as expected. However, the problem with this approach is that
  each iteration will require a new location in the memory and hence the amount of memory required is multiplied
  by the number of iterations in the loop.
*/

'use strict';
let updateFunctions = [];
for(let i=0; i<3; i++) {
  updateFunctions.push(function() {return i});
}
console.log(updateFunctions[0]());
console.log(updateFunctions[1]());
console.log(updateFunctions[2]());

// Output:
// 0
// 1
// 2

==========================================

// Example 2
'use strict';
let updateFunctions = [];
for(let i=0; i<3; i++) {
  updateFunctions.push(function() {return i});
}
console.log(updateFunctions[0]());
console.log(updateFunctions[1]());
console.log(updateFunctions[2]());
// Reference Error. i is not defined. i was only valid within each iteration of the loop. Outside of the loop
// block, i does not exist.
i = 45;
console.log(updateFunctions[0]());
console.log(updateFunctions[1]());
console.log(updateFunctions[2]());

// Output:
// 0
// 1
// 2
// Uncaught ReferenceError: i is not defined


===================================================================================================================================================


// const keyword
'use strict';
const MARKUP_CONST = 100;
console.log(MARKUP_CONST);

// Output: 100

==========================================

// When we use a const variable we must initialize it
'use strict';
const MARKUP_CONST;
console.log(MARKUP_CONST);

// Output: Uncaught SyntaxError: Missing initializer in const declaration

==========================================

// const variables cannot be reinitialized
'use strict';
const MARKUP_CONST = 100;
MARKUP_CONST = 10;
console.log(MARKUP_CONST);

// Output: Uncaught TypeError: Assignment to constant variable.


===================================================================================================================================================


/* 
  const also has block scoping similar to 'let'
*/
'use strict';
const MARKUP_CONST = 100;
if (MARKUP_CONST > 0) {
  const MARKUP_CONST = 10;
}
console.log(MARKUP_CONST);

// Output: 100

==========================================

'use strict';
const MARKUP_CONST = 100;
if (MARKUP_CONST > 0) {
  MARKUP_CONST = 10;
}
console.log(MARKUP_CONST);

// Output: Uncaught TypeError: Assignment to constant variable.
