// Copied from http://robertdunawaypro.blogspot.ch/2016/01/021-typescript-callbacks.html


// create another callback function whose job is to output whatever it's 
// passed back to display.  If nothing is passed back then output a default value.
var myConsoleLog = function (output: string = 'Nothing was passed back to output') {
    console.log(output);
}

// create a function and pass in the callback method.
function add(cb: (string) => void, a: number, b: number) {
    var c = a + b;
    cb('a + b = ' + c);
}

// call the new add function and pass in the callback function and two numbers.
add(myConsoleLog, 2, 3);