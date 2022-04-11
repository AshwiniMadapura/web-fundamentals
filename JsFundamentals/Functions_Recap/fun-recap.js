const names=["sam","josie","dan","stu"];

const moreName=names;
console.log(moreName[3]);

names[3]="andy";

console.log(names[3]);
console.log(moreName[3]);

console.log(names===moreName);
// returns true

const getFullName=(firstname, lastname)=>{
    return firstname+" "+lastname;
}
const arthur=getFullName("ash","div");
console.log(arthur)

const getFullNameAgain=getFullName;

const xapod=getFullNameAgain("zapod","bee");
console.log(xapod);
console.log(arthur);

// create new arry and turn to uppercase

// const toUpperCase=(str)=>{
//     return str;
// }
//     const names=toUpperCase("ashwini");
//     console.log(names)

//     const UppercaseName=names;
//     const Upper=UppercaseName(names.toUpperCase());
//     console.log(Upper);

    // const arr = ['apple', 'banana', 'cereal'];

    // const toUpperCase=(str)=>{
    //     return str.map(st);

//     

const arr = ['apple', 'banana', 'cereal'];

const upper = [];

arr.forEach(element => {
  upper.push(element.toUpperCase());
});
console.log(upper);


const VAT=0.20;
// not a pure funcion bcz depends on vat
const calculateTotal=price=>{
    return price+(price*VAT);
}
console.log(calculateTotal(20));

// using pure function for above
const calculateTotalpure=(price,vat)=>{
    return price+(price*vat);
}
console.log(calculateTotalpure(20,0.15));

// to uppercase in pure form

const toUppercasePure=strings=>{
    return strings.map(s=>s.toUpperCase())
    // above is same as below
    // return strings.map((string)=>{
//         return strings.toUpperCase()
//     })
}
console.log(toUppercasePure(arr));

// prints out price nicely
const printNicely=(price1)=>{
    console.log(`The price is ${price1}`);
}
printNicely(32.5);

// perform calculatons for the above
const performPriceCal=(price1,tax,outputFunc)=>{
    const total=calculateTotalpure(price1,tax);
    outputFunc(total);
}
performPriceCal(15,0.20,printNicely);

const addNumber1 = 12;
const addNumber2 = 24;

const addNumbers = () => {
  // Write your code here
//   console.log(addNumber1+addNumber2)
//   return parseInt(addNumber1+addNumber2);
const sum = addNumber1 + addNumber2;
console.log(sum +"sum is ");
  return sum;
  
};

console.log(addNumbers());

const nameTagOption = "Timothy";

const getIsValidOnNameTag = () => {
  // Write your code here
  let isNametag=false;
  let firstString=nameTagOption.substring(0,1);
  if(nameTagOption.length<=8 && firstString===firstString.toUpperCase()){
    isNametag=true;
  }else{
    isNametag=false;
  }
  return isNametag;
};
console.log(getIsValidOnNameTag())

const stringToConvert = "14.45";

const convertStringToNumber = () => {
  // Write your code here
  const convertStr=Number(stringToConvert)
  return console.log("The number converted from the string is"+ convertStr+typeof(convertStr));
};
convertStringToNumber();



