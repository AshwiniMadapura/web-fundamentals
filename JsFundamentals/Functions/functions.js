// let width=10;
// let height=2;

// const calculateArea=()=>{
//     const areaOfRect=width*height;
//     console.log(areaOfRect);
// }

// calculateArea();

// const coaches = ["Ash", "Andy", "Sam", "Dan", "Jake"];
// for(let i=0;i<5;i++){
//     console.log(i+". "+coaches[i]+" is a coach")
// }
//CHALLENGE 3 - RECAP ARRAY ITERATORS A
//1. Using forEach, add together all the values in the numbers in the array and update the total variable with that value. 
// const numbers = [1, 3, 5, 7, 9];  
// let total = 0;
// numbers.forEach((number)=>{
//     total+=number;
    
// })
// console.log(total);
//2. Using map, put the square of each age in the ages array into a new array called agesSqrd.
// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61];
// const agesSqrd=ages.map((age)=>{
//     return age*age;
// })
// console.log(agesSqrd);

//CHALLENGE 3 - RECAP ARRAY ITERATORS B
// Use the numbers and ages arrays from ARRAY ITERATORS CHALLENGE B
//1. Filter out the ages over 20. 
// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61];
// const over20=ages.filter((age)=>{
//     return age>20;
// })
// console.log(over20);

//2. Find the total of the ages array, using reduce instead of a forEach
// const totalages=ages.reduce((one,two)=>{
//     return one+two;
// })
// console.log(totalages);

const scoreArr =[1,2,3];
    let total=0;
    for(let i=0;i<scoreArr.length;i++){
      total +=scoreArr[i]; 
    }
    console.log(total);
    // return total;


   const ingredientsArr =["Bacon","Lettuce","Tomato"];
    let newArr="";
  for(let i=0;i<ingredientsArr.length;i++){
    if(i==ingredientsArr.length-1){
      newArr=newArr+ingredientsArr[i];
    }
    else{
    newArr=newArr+ingredientsArr[i]+"+";
    // console.log(ingredientsArr[i]+"+");
    }
  }
  console.log(newArr);
//   return ingredientsArr;
  
  