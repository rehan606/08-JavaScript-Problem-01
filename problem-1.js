//--------------------------Unit Convert ----------------------------
//--------------------------Inch To Feet Convert --------------------

function inchToFeet(inch){
    const feet = inch / 12;
    return feet
}
const feets = inchToFeet(75)
console.log('Feet =', feets)

//Output: Feet = 6.25


//Method-2: inch to feet convert, like 6 feet 3 inch
function inchToFeet2(inch){
    const feetFraction = inch /12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' Feet ' + inchRemaining + ' inch';
    return result
}

const inchIs = inchToFeet2(75)
console.log(inchIs)

//Output: 6 Feet 3 inch

//--------------------------Miles To Kilometer Convert --------------

function milesTokilo(miles){
    const kilometer = miles * 1.60934 ;
    return kilometer
}
const mileis = milesTokilo(20)
console.log('kilometer =',  mileis)

//Output: kilometer = 32.1868

//--------------------------Leap Year -------------------------------

//Hints: Year will be a Leap year if the year is divisible y 4.

function leapYear(year){
    if (year % 4 ===0){
        return true
    }
    else{
        return false
    }
}
const year = leapYear(2032)
console.log('This Year is Leap Year:', year);

//Output: This Year is Leap Year: true


//--------------------------Leap Year Advance Method ----------------
/**
 * Hints:
 * 01 - Those Year that is not divisible by 100 and 
 *      if The year is divisible by 4: then it will be a leap Year.
 * 02 - If the year is divisible by 400, Then is is a leap year.
 * 03 - else it is not a leap year.
 */

function isLeapYear(year){
    if(year % 100 !==0 && year % 4 ===0 ){
        return true
    } else if(year % 400 ===0){
        return true
    } else {
        return false
    }
}
const years = isLeapYear(2069)
console.log( 'this year is leap year?' , years)

//Output: this year is leap year? false 

//--------------------------Average odd number From Array -----------

function oddAverage(numbers){
    const odds = [];

    for (const number of numbers){
        if(number % 2 ===1){
            odds.push(number);
        }
    }

    let sum = 0;
    for (const number of odds){
        sum = sum + number
    }
    const count = odds.length ;
    console.log(`Sum is: ${sum} and Length is: ${count}`);
    const avg = sum / count
    return avg;
}
const numArray = [1,2,3,4,5,6,7,8,9]
const average = oddAverage(numArray)
console.log( 'Avarage is:', average)

//Output: Avarage is: 5


//--------------------------Remove Duplicate Item From Array --------

function noDuplicate(array){
    const unique = []
    for(const item of array){
        if(unique.includes(item.toLowerCase()) === false){
            unique.push(item.toLowerCase());
        }
    }
    return unique;
}
const nameArray = ['Rehan', 'Hassan', 'Rehan', 'jahid', 'jihad', 'Jahid']

const duplicate = noDuplicate(nameArray)
console.log(duplicate)

//Output: [ 'rehan', 'hassan', 'jahid', 'jihad' ]

//--------------------------Math,Abs,Round,Ceil,Floor And Random ----

//Find Minimum Value 
const min = Math.min(20,13,24,712,42,12)
console.log(min)

    //Output: 12

//Find Maximum value
const max = Math.max(20,13,24,712,42,12)
console.log(max)
    //Output: 712

//Find value of PI
console.log(Math.PI)
    //Output: 3.141592653589793

//Defference Between two Number
console.log(Math.abs(20-5))
    //Output: 15

//Round Figure
console.log('Round Figure is:',Math.round(2.49))
    //Output: Round Figure is: 2
console.log('Round Figure is:', Math.round(2.50))
    //Output: Round Figure is: 3

//Floor
console.log( 'FLoor figure is:', Math.floor(2.99))
    //Output: FLoor figure is: 2

//Ceil
console.log('Ceil Figure is:', Math.ceil(2.002))
    //Output: Ceil Figure is: 3

//Random
const rand = Math.round(Math.random( 4 * 10))
console.log(rand)
//-------------------------- ----------------------------------------
//-------------------------- ----------------------------------------
//-------------------------- ----------------------------------------
//-------------------------- ----------------------------------------