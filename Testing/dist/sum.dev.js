"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterEmployeesByLocation = void 0;

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
var filterEmployeesByLocation = function filterEmployeesByLocation(name, location) {
  var teamLocation = team.filter(function (employee) {
    return employee.location.toLowerCase() == location.toLowerCase();
  });
  return teamLocation;
};

exports.filterEmployeesByLocation = filterEmployeesByLocation;