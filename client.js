const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// let name = employees.name;
// let bonusPercentage = calculateEmployeeBonus(employees[i])
// let totalBonus = employees[i].annualSalary * bonusPercentage
// let totalCompensation = totalBonus + employees[i].annualSalary

// let employeeInfoObject = {
//   name: employee.name,
//   bonusPercentage: bonusPercentage,
//   totalCompensation: totalCompensation,
//   totalBonus: totalBonus,
// }

function showEmployeeBonuses(employee) {
  console.log( 'in showEmployeeBonuses' );
  // should we move equations out of object?
  let employeeInfoObject =  {
      name: employee.name, 
      bonusPercentage: calculateEmployeeBonus(employee), 
      totalBonus: Math.round(employee.annualSalary * bonusPercentage),
      totalCompensation: totalBonus + Number(employee.annualSalary)
    }
  console.log('Employee Info:', employeeInfoObject);
  return employeeInfoObject;  
}    

console.log(showEmployeeBonuses(employees[0]))


function calculateEmployeeBonus(employees){
  console.log( 'in calculateRemainingBudget' );
  let bonusPercentage = 0;
    if (employees.reviewRating === 1) { // if rating 2 add 0%
    bonusPercentage = 0;
    } else if(employees.reviewRating === 2) { // if rating 2 add 0%
    bonusPercentage = 0;
    } else if(employees.reviewRating === 3) { // if rating 3 add 4%
    bonusPercentage = 0.04;
    } else if(employees.reviewRating === 4) { // if rating 4 add 6%
    bonusPercentage = 0.06;
    } else if(employees.reviewRating === 5) // if rating 5 add 10%
    bonusPercentage = 0.1;
    if (employees.employeeNumber.length === 4) { // if employee number is 4 digits add 5%
      bonusPercentage += 0.05;
    }
    if (employees.annualIncome > 65000) { // if above 65000 lower 1%
      bonusPercentage -= 0.01;
    }
    if (bonusPercentage > 0.13) { // if above 13% make 13%
      bonusPercentage = 0.13;
    } else if (bonusPercentage < 0) { // if below 0% make 0%
      bonusPercentage = 0;
    }  
  console.log('Total Bonus:', bonusPercentage);
  return bonusPercentage
}

console.log(calculateEmployeeBonus(employees[2]));
console.log( employees )
