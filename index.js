function callback() {
    return 'hello';
}

const receivesAFunction = (callback) => {
    callback();
}
console.log(receivesAFunction);

const returnsANamedFunction = () => {
     return function fun1() {
        console.log('Hello world');
    }

}

const returnsAnAnonymousFunction = function() {
    return function() {
        console.log('this is anonymous function');
    }
}