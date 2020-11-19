// write a function that takes the input string and reverses it
// example
// argument: Hello
// return: olleH
function reverseThisString(string){
    let retString = '';
    for (let i = string.length - 1; i >= 0; i--) 
    { 
        retString += string[i];
    }
    return retString;
}


// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
// example:
// argument: Hello World
// return: hELLO wORLD
function swapCase(string) {
    let retString = '';
    for(let i = 0; i < string.length; i++)
    {
        if(string[i] === string[i].toUpperCase())
        {
            retString += string[i].toLowerCase();
        }
        else
        {
            retString += string[i].toUpperCase();

        }
    }
    return retString;
}

//convert array of numbers from farenheit to celcius
// example:
// argument: [23, 32, 41, 50, 59]
// return: [-5, 0, 5, 10, 15]
// hint: use Array.map
function toCelcius(array){
    const celArray = array.map(function(num){
        return (num-32) / 1.8;
    })
    return celArray;
}


//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
// example:
// argument: [20, 30, 50, 80, 90, 100]
// return: [false, false, false, true, true, true]
// hint: use Array.map
function passOrFail(array){
        const retArray = array.map(function(num){
            if(num >= 75)
            {
                return 'true';
            }
            else
            {
                return 'false';
            }
        })
        return retArray;

}


//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// example:
// return: ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// hint: use Array.forEach, Array.map or a for loop
function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    const retArray = [];
    for(let i = 0; i < cardinalNumbers.length; i++)
    {
        
            retArray.push(cardinalNumbers[i] + ' is ' + germanNumbers[i]);
    } 
    return retArray;


}


// write code that returns an array of ONLY prime numbers that are in the array numbers
// example: 
// return [2, 3, 5, 7, 11, 13]
// hint use: Array.filter
function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    const primeN = numbers.filter(function(num)
    {
        for (var i = 2; i <= Math.sqrt(num); i++) 
        {
            if (num % i === 0) 
            {
                return false;
            }
        }
        return num > 1;
        
    }
    );
    return primeN;
}

//Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT" 
function loop1to100(){
    for(let i = 1; i <= 100; i++)
    {
        if(i % 3 === 0 && i % 5 === 0)
        {
            console.log('CSC225 RULES I LOVE JAVASCRIPT' + '\n');

        }
        else if(i % 3 === 0)
        {
            console.log('CSC225 RULES' + '\n');

        }
        else if(i % 5 === 0)
        {
            console.log('I LOVE JAVASCRIPT' + '\n');

        }
        else
        {
            console.log(i + "\n");
        }
    }
}