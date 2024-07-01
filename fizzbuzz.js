

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Put your code here...
   let result = "";
    for(let i=1; i<=100; i++) {
        let str = [];
        if (i%3 === 0) str.push("Fizz");
        if (i%5 === 0) str.push("Buzz");
        if (i%7 === 0) str.push("Bang");
        if (i%11 === 0) {
            str = [];
            str.push("Bong");
        }
        if (i%13 === 0) {
            let ind=0;

            if (i%5 ===0) ind=str.indexOf("Buzz");
            else if (i%7 ===0) ind=str.indexOf("Bang");
            else if (i%11 ===0) ind=str.indexOf("Bong");
            else str.push("Fezz");

            if (ind>0) str.splice(ind-1,0,"Fezz");
        }
        if (
            i%3 !== 0 && 
            i%5!==0 && 
            i%7!==0 && 
            i%11!==0 &&
            i%13!==0
        ) 
            str.push(i.toString());
        result += str.join("") + " ";
    }

    console.log(result);
}

// Now we run the main function...
fizzbuzz();
