

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Put your code here...
    let result = "";
    for(let i=1; i<=100; i++) {
        let str = "";
        if (i%3 === 0) str += "Fizz";
        if (i%5 === 0) str += "Buzz";
        if (i%3 !== 0 && i%5!==0) str += i.toString();
        result += str + " ";
    }

    console.log(result);
}

// Now we run the main function...
fizzbuzz();
