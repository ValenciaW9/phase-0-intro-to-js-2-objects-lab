// Write your solution in this file!

//Create an employee object with name and streetAddress keys

// Create an employee object with name and streetAddress keys
const employee = {
    name: "John Doe",
    streetAddress: "123 Main ST"
};

// Function to update the employee object with a new key-value pair
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

// Function to destructively update the employee object with a new key-value pair
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Function to delete a key-value pair from the employee object
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

// Function to destructively delete a key-value pair from the employee object
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

// Test the functions
console.log(employee); // Output: { name: 'John Doe', streetAddress: '123 Main ST' }

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Jane Smith');
console.log(updatedEmployee); // Output: { name: 'Jane Smith', streetAddress: '123 Main ST' }

const destructivelyUpdatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Elm ST');
console.log(destructivelyUpdatedEmployee); // Output: { name: 'John Doe', streetAddress: '456 Elm ST' }
console.log(employee); // Output: { name: 'John Doe', streetAddress: '456 Elm ST' }

const deletedEmployee = deleteFromEmployeeByKey(employee, 'name');
console.log(deletedEmployee); // Output: { streetAddress: '456 Elm ST' }
console.log(employee); // Output: { name: 'John Doe', streetAddress: '456 Elm ST' }

const destructivelyDeletedEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');
console.log(destructivelyDeletedEmployee); // Output: { name: 'John Doe' }
console.log(employee); // Output: { name: 'John Doe' }



////Let's say we are working on a program that will keep track of a company's employees. We want to store each employee as an Object. We're starting small, so to begin with we'll only keep track of the employee's name and street address.
//To start, assign an employee variable to an Object containing name and streetAddress keys; you can use whatever values you like. Use literal syntax to create your Object. Various updates will be applied to this variable (destructively and non-destructively) in this lab.
////Once you've initialized the employee Object, you'll need to create the following four functions:
//updateEmployeeWithKeyAndValue(): this function should take in three arguments: an employee Object, a key and a value. This function should not mutate the employee; it should return a new Object that has an updated value for the key passed in. Hint: use the spread operator!
///destructivelyUpdateEmployeeWithKeyAndValue(): this function should work the same as updateEmployeeWithKeyAndValue() but it should mutate the employee Object passed in.
//deleteFromEmployeeByKey(): this function should take in a employee Object and a key. It should delete the property with that key from the employee Object. This should not mutate the original employee Object; it should return a new Object that doesn't include the identified key-value pair. Hint: use the spread operator!
//destructivelyDeleteFromEmployeeByKey(): this function should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object.
//As you work on your functions, be sure to think about when to use dot notation vs. bracket notation.