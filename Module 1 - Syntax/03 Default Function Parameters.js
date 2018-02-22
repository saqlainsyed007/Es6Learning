==========================================
Default function(){} parameters
==========================================


'use strict;'
// Default value can be specified by simply assigning a value to the parameter
// as shown below.
var getProduct = function(productId = 1000) {
  console.log(productId)
}
// If parameters are not passed to the function, it would assign default values.
getProduct()

// Output: 1000


===================================================================================================================================================


'use strict;'
// Default value can be specified by simply assigning a value to the parameter
// as shown below.
var getProduct = function(productId = 1000, type = "software") {
  console.log(productId + ", " + type)
}
// If any of the parameters are passed as undefined, it would assign default values.
// In this way we can choose the parameters for which we want to pass values and the
// parameters for which we would want defaults to be applied.
getProduct(undefined, "hardware")

// Output: 1000, hardware


===================================================================================================================================================


'use strict;'
// We can set default values for a parameter using other paramaters that are specified
// BEFORE this parameter. We could consider the parameter listing as a block of code
// with declarations and assignments.
var getTotal = function(price, tax = price * 0.07) {
  console.log(price + tax)
}
getTotal(5.00)

// Output: 5.35

==========================================

'use strict;'
// This will not work as we are trying to access price to set default for tax and price
// comes AFTER tax in argument list.
var getTotal = function(tax = price * 0.07, price = 5.00) {
  console.log(price + tax)
}
getTotal(undefined, 5.00)

// Output: Uncaught ReferenceError: price is not defined

==========================================

'use strict;'
// We do not get an error for this code because javascript wouldn't 
var getTotal = function(tax = price * 0.07, price = 5.00) {
  console.log(price + tax)
}
getTotal(0.35, 5.00)

// Output: 5.35

===================================================================================================================================================


'use strict;'
// We can set default values for a parameter using other variables in the current scope.
var baseTax = 0.07
var getTotal = function(price, tax = price * baseTax) {
  console.log(price + tax)
}
getTotal(5.00)

// Output: 5.35


===================================================================================================================================================


'use strict;'
// We can set default values for a parameter using other functions in the current scope.
var generateBaseTax = () => 0.07
var getTotal = function(price, tax = price * generateBaseTax()) {
  console.log(price + tax)
}
getTotal(5.00)

// Output: 5.35


===================================================================================================================================================


'use strict;'
var getTotal = function(price, tax = price * 0.07) {
  // 'arguments' keyword will only hold the arguments that were passed by the caller. It will
  // not store the defaults that were set.
  console.log(arguments)
  console.log(arguments.length)
}
getTotal(5.00)

// Output:
// [5.00, ...]
// 1

==========================================

'use strict;'
var getTotal = function(price, tax = price * 0.07) {
  // 'arguments' keyword will only hold the arguments that were passed by the caller. It will
  // not store the defaults that were set. So even if the default value was set for a parameter
  // that was passed as undefined, arguements would still hold undefined.
  console.log(arguments)
  console.log(arguments.length)
}
getTotal(5.00, undefined)

// Output:
// [5.00, undefined, ...]
// 2


===================================================================================================================================================


'use strict;'
// Default paramaters also work for dynamic functions. Dynamic functions are created as shown
// below. All arguments upto the last one are the parameters and the last argument is the function
// body.
var getTotal = new Function("price = 20", "tax = price * 0.07", "return price + tax")
console.log(getTotal())
