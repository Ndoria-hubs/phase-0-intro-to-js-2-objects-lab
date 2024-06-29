// Write your solution in this file!
const employee = {
    name: "Kihoto",
    streetAddress: "Ongata Rongai",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
    ...obj,
    [key]: value
    }
}
oldEmployee = updateEmployeeWithKeyAndValue(employee, "hobby", "Skating")
console.log(oldEmployee)


newEmployee = updateEmployeeWithKeyAndValue(employee, "skinColor", "brown");
console.log(newEmployee)

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value
    return obj;
}
ragEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'aura', "fantastic")
console.log(ragEmployee)

console.log(employee)

function deleteFromEmployeeByKey(obj, key) {
    delete obj.key;
    return {
        obj,
    }
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]
    return obj
}

