// Write your solution in this file!

//Create an employee object with name and streetAddress keys

const employee = {
    name: "John Doe",
    streetAddress: "123 Main ST"
};


//Function to update employee object with  a key and value

function  destructiivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
//Update the value for the given key in the original  employee object
employee[key] = value;
return employee;
}

//Function to destructively update employee object with a key and value

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the value for the given key in the original employee object
    employee[key] = value;
    return employee;
}

//Function to delete a property from the employee object 
function destructivelyDeleteFromEmployeeByKey(employee,key) {
    // Create a new object using the spread operator and 
    const newEmployee = { ...employee};
    delete newEMployee[key];
    return newEmployee;

}

//Function to destructively delete a property from the employee object
function destructiivelyDeleteFromEmployeeByKey(employee, key)  {
   // Delete the key-value pair from the orignal employee  object
   dekete employee[key];
   return employee;

}



////Let's say we are working on a program that will keep track of a company's employees. We want to store each employee as an Object. We're starting small, so to begin with we'll only keep track of the employee's name and street address.
//To start, assign an employee variable to an Object containing name and streetAddress keys; you can use whatever values you like. Use literal syntax to create your Object. Various updates will be applied to this variable (destructively and non-destructively) in this lab.
////Once you've initialized the employee Object, you'll need to create the following four functions:
//updateEmployeeWithKeyAndValue(): this function should take in three arguments: an employee Object, a key and a value. This function should not mutate the employee; it should return a new Object that has an updated value for the key passed in. Hint: use the spread operator!
///destructivelyUpdateEmployeeWithKeyAndValue(): this function should work the same as updateEmployeeWithKeyAndValue() but it should mutate the employee Object passed in.
//deleteFromEmployeeByKey(): this function should take in a employee Object and a key. It should delete the property with that key from the employee Object. This should not mutate the original employee Object; it should return a new Object that doesn't include the identified key-value pair. Hint: use the spread operator!
//destructivelyDeleteFromEmployeeByKey(): this function should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object.
//As you work on your functions, be sure to think about when to use dot notation vs. bracket notation.