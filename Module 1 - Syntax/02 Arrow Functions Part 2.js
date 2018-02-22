==========================================
'this' keyword in arrow functions.
==========================================

/*
  In the below code, 'this' refers to the the calling object(document).
*/
'use strict';
document.addEventListener('click', function() {
  console.log(this);
});

// Output: document object

==========================================

/*
  Arrow functions do not bind their own this. They lexically bind their context so
  'this' actually refers to the originating context. This is called Lexical Scoping.
  In the below exxample, 'this' refers to the context of document object. Since that
  is global code, we get global window object as the output.
*/

'use strict';
document.addEventListener('click', () => {
  console.log(this);
});

// Output: window object


===================================================================================================================================================


'use strict';
var invoice = {
  number: 123,
  process: function() {
    // 'this' points to the calling object(invoice) of the function(process).
    console.log(this);
  }
};
invoice.process();

// Output: {number: 123, process:f}

==========================================

'use strict';
var invoice = {
  number: 123,
  // this points to the context of the invoice object. Since that is global code,
  // we get global window object as the output.
  process: () => console.log(this)
};
invoice.process();

// Output: window object


===================================================================================================================================================


'use strict';
var invoice = {
  number: 123,
  process: function() {
    // Here this points to context of the process function. Since process was
    // invoked by the invoice object, we would get the invoice object as output.
    return () => console.log(this);
  }
};
invoice.process()();

// Output: {number: 123, process:f}

==========================================

'use strict';
var invoice = {
  number: 123,
  process: function() {
    // Here, this points to the context of the unnamed function. Since this
    // function was not invoked by any object directly it doesn't have a
    // context of it's own. Hence we get undefined as output.
    return function() {
      console.log(this);
    }
  }
};
invoice.process()();

// Output: undefined


===================================================================================================================================================


/*
  bind, call and apply methods
*/
'use strict';
var invoice = {
  number: 123,
  process: function() {
    return function() {
      console.log(this);
    }
  }
}

var newInvoice = {
  number: 456
};
// We can set context i.e., the value of 'this' for a normal function using
// bind, call or apply methods.
invoice.process().bind(newInvoice)();
invoice.process().call(newInvoice);
invoice.process().apply(newInvoice);

// Output:
// {number: 456}
// {number: 456}
// {number: 456}

==========================================

'use strict';
var invoice = {
  number: 123,
  process: function() {
    return () => console.log(this);
  }
}

var newInvoice = {
  number: 456
};
// bind, call or apply cannot change the value of this for arrow functions.
invoice.process().bind(newInvoice)();
invoice.process().call(newInvoice);
invoice.process().apply(newInvoice);

// Output:
// {number: 123, process:f}
// {number: 123, process:f}
// {number: 123, process:f}
