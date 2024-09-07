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
//-------------------------- ----------------------------------------
//-------------------------- ----------------------------------------
//-------------------------- ----------------------------------------
//-------------------------- ----------------------------------------
//-------------------------- ----------------------------------------