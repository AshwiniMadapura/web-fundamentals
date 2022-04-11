const names=["Naza","Gazal","Ashish","Fer","Conner"];
// name uppercase
// call back function- passing a function as an argument

names.forEach((name)=>{
    console.log(name.toUpperCase());
    // method chaining
    console.log(name.substring(1,4).toUpperCase);
    // slice and splice are same 
})
// converting to upper case
const nameInCap=names.map((name)=>{
    return name.toUpperCase();
})
console.log(names)
console.log(nameInCap);

// print only more than 4 letters
const longIsName=names.filter((name)=>{
    return name.length>4;
})
console.log(longIsName);

// above in one line
const longIsNam=names.filter((name)=>name.length>4);
console.log(longIsNam);
// make supermarket keys lloping through objects
const supermarketItems = {
    "Shampoo": 3.99,
    "Toothbrush": 2.99,
    "Toilet Roll": 8.99,
    "Beer Crate": 10.99,
    "Cereal": 2.99,
    "Soap": 3.99,
    "Book": 6.99,
    "Paper": 5.99,
    "Wine": 14.99
  }
  const supermarketKeys=Object.keys(supermarketItems);
  console.log(supermarketKeys);
  const itemValues=Object.values(supermarketItems)
  console.log(itemValues);
  let sum=0;
  itemValues.forEach(item=>{
      sum+=item;  
  })
  console.log(sum);

//   looping through jason
const companies = [
    {name: "Company One", industry: "Finance", start: 1981, end: 2004},
    {name: "Company Two", industry: "Retail", start: 1992, end: 2008},
    {name: "Company Three", industry: "Auto", start: 1999, end: 2007},
    {name: "Company Four", industry: "Retail", start: 1989, end: 2010},
    {name: "Company Five", industry: "Technology", start: 2009, end: 2014},
    {name: "Company Six", industry: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", industry: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", industry: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", industry: "Retail", start: 1981, end: 1989}
  ];

  companies.forEach(company=>{
    //   only start date
      console.log(company.start);
  })

  // challenge 1
// loop through companies to make a new array containing only the companies that started in the 80's

    const CompStarted=companies.filter(eighty=>{
        // can work if we use push
        // if (CompStarted>=1980 && CompStarted<=1990)
        // {
            // const eightComp=[];
        //     eightComp=CompStaarted.push();
        // }

        return eighty.start>=1980 && eighty.start<1990
    })
    console.log(CompStarted);
// loop through the array and create an array for each object with all the Objects values in it

const compValues=companies.map(comp=>{
    return Object.values(comp)
})
console.log(compValues);

// const payer=(bill_total,number_bill,tip)=>{
//     bill_total=number_bill+tip;

// }
// function totalbill(total){
//     let tax=
// }

const calcualteBillTotal = (totalBill, tipPercentage, billPayers) => {
    let tip = (tipPercentage/100) * totalBill;
    let total = (totalBill + tip)/billPayers;
    total = Math.round(total);
    console.log(total)
    return total;
}
calcualteBillTotal(15,20,6)


// let a=[];
// a=a+"1"+"2";
// console.log(a)

// let numArr=[1]
// numArr=[numArr+Number(2)];
// console.log(numArr);
// numArr.push(3);
// console.log(numArr);


let a=12.
console.log(Number( a))
