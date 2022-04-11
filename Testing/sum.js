// export const multiply=(num1,num2)=>{
//     return num1*num2;
// }

// export const divide=(num1,num2)=>{
    // if(number1/number2==="infinity"){
    //     return "Can't divide by zero"
    // }
    // if(num2==0){
    //     return "can't divide by 0"
    // }
//     return num1/num2;
// }

// export const divide = (num1, num2) => {
//     if(num2==0){
//         return "Can't divide by 0";
//     }else{
//         return num1/num2;
//     }
    
//   }

export const filterEmployeesByLocation=(name,location)=>{
    const teamLocation=team.filter(employee=>{
        return employee.location.toLowerCase()==location.toLowerCase()
    })
    return teamLocation
   
}


  