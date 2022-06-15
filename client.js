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

function showEmployeeBonuses(employee) {
  console.log( 'in showEmployeeBonuses' );
  const employeeInfo = {};
  for (let i = 0; i < employee.length; i++){
    if (employee[i].name) {
    employeeInfo.push(employee[i].name, employeeInfo[i].bonusPercentage, 
      employeeInfo[i].totalBonus, employeeInfo[i].totalCompensation);
    }    
  }
  return employeeInfo;
}

function calculateEmployeeBonus(employees){
  console.log( 'in calculateRemainingBudget' );
  let bonusPercentage = 0;
    if (employees.reviewRating === 1) 
    bonusPercentage = 0;
    else if(employees.reviewRating === 2)
    bonusPercentage = 0;
    else if(employees.reviewRating === 3)
    bonusPercentage = 0.04;
    else if(employees.reviewRating === 4)
    bonusPercentage = 0.06;
    else if(employees.reviewRating === 5)
    bonusPercentage = 0.1;
  console.log('Total Bonus:', bonusPercentage);
  return bonusPercentage
}

console.log(calculateEmployeeBonus(employees[0]));
console.log( employees )
