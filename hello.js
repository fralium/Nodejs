//run in strict mode, avoid any bug
//'use strict';

//var name = 'world';

//var s = `Hello,${name}!`;

//console.log(s);

'use strict';

var s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

function hi(name){
    console.log('Hi'+','+ name);
}

//export greet as the export of current module
module.exports = {
    greet1:greet,
    hi1: hi
};