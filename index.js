function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = Object.assign({}, employee);
    delete newEmployee[key];
    return newEmployee;
  }
  
  const employee = {
    name: "Sam",
    streetAddress: "123 Main St."
  };
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "email", "sam@company.com");
  console.log(updatedEmployee); // { name: "Sam", streetAddress: "123 Main St.", email: "sam@company.com" }
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "email", "sam@company.com");
  console.log(employee); // { name: "Sam", streetAddress: "123 Main St.", email: "sam@company.com" }
  
  const newEmployee = deleteFromEmployeeByKey(employee, "streetAddress");
  console.log(newEmployee); // { name: "Sam", email: "sam@company.com" }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }