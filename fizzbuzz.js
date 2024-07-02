
// Here, we create our main function.



function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Put your code here...
    let result = "";
    const factorMap = new Map([
        [3,"Fizz"],
        [5, "Buzz"],
        [7, "Bang"],
        [11, "Bong"]
      //  [13, "Fezz"]
    ]);

   
    for(let i=1; i<=100; i++) {
        let str = [];
        let divisble = false;

        for (const[num, word] of factorMap.entries()) {
            if (i%num === 0) {
                if (num===11) str=[];
                str.push(word);
                divisble = true;
            }
        }

        if (!divisble) str.push(i.toString());
        /*if (i%3 === 0) str.push("Fizz");
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
            str.push(i.toString());*/

        result += str.join("") + " ";
    }

    console.log(result);
}

// Now we run the main function...
fizzbuzz();
