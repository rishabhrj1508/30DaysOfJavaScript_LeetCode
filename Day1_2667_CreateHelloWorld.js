/**
 * @return {Function}
 */
var createHelloWorld = function () {

    // Approach 1
    // function helloworld(){
    //     return "Hello World";
    // }
    // return helloworld;

    //Approach 2
    // return function(){
    //     return "Hello World";
    // }

    //Approach 3
    return () => "Hello World";

}

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */