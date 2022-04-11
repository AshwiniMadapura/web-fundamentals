// 1st part

// import { describe,it,expect } from "@jest/globals"
// import {divide, multiply} from "./sum";

// describe("Multiply function tests", ()=>{
//     it("Multiply function multiplies 5 and 2 to be 10",()=>{
        // Arrange
        // Act
        
        // const result=multiply(5,2);
        // Assert
//         expect(result).toBe(10);
//     });
// })


// describe("divide function test", () => {
//     it("Divide function divides 10 and 2 to be 5",
//     () => {
//       let num1 = 10;
//       let num2 = 2;
//       const result = divide(num1, num2);
//       expect(result).toBe(5);
//     })
//     it("Divide function returns string when dividing by zero",
//     () => {
//       let num1 = 5;
//       let num2 = 0;
//       const result = divide(num1, num2);
//       expect(result).toBe("Can't divide by 0")
//     })
//   })

import{describe,it,expect} from "@jest/globals";
import {filterEmployeesByLocation} from "./sum";

describe("Function filters by location of employees",()=>{
    it("should return a new array of employees based in Bristol",()=>{
        const teamA=[
            {
                name: "John",
                position: "Developer", 
                location: "London",
                workingPreference: "Office"
              },
              {
                name: "Jane",
                position: "Developer", 
                location: "Bristol",
                workingPreference: "Hybrid"
              },
              {
                name: "Alice",
                position: "Product Owner", 
                location: "Bristol",
                workingPreference: "Home"
              }
        ]

        const teamABristol=[
            {
                name: "Jane",
                position: "Developer", 
                location: "Bristol",
                workingPreference: "Hybrid"
            },
            {
                name: "Alice",
                position: "Product Owner", 
                location: "Bristol",
                workingPreference: "Home"
              }
        ]
        // Act
        const result =filterEmployeesByLocation(teamA,"Bristol");
        // Assert
        expect(result).toMatchObject(teamABristol)


        const teamB = [
            {
                name: "Tom",
                position: "Manager", 
                location: "Manchester",
                workingPreference: "Hybrid"
              },
              {
                name: "Sarah",
                position: "Developer", 
                location: "London",
                workingPreference: "Hybrid"
              },
              {
                name: "Theo",
                position: "UX Designer", 
                location: "London",
                workingPreference: "Remote"
              },
        ]

        const teamC = [
            {
                name: "Ellis",
                position: "Developer", 
                location: "Manchester",
                workingPreference: "Remote"
              },
              {
                name: "Helen",
                position: "Developer", 
                location: "London",
                workingPreference: "Hybrid"
              },
              {
                name: "Layla",
                position: "Marketing Executive", 
                location: "manchester",
                workingPreference: "Remote"
              },
        ]

    })
    
    
})
  
