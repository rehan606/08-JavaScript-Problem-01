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
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}
const nameArray = ['Rehan', 'Hassan', 'Rehan', 'jahid', 'jihad', 'Jahid']
const duplicate = noDuplicate(nameArray)
console.log(duplicate)

//-------------------------- ----------------------------------------
//-------------------------- ----------------------------------------
//-------------------------- ----------------------------------------
//-------------------------- ----------------------------------------
//-------------------------- ----------------------------------------