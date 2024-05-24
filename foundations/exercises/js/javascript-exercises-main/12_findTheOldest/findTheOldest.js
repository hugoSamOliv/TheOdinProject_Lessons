const findTheOldest = function(arrayOfPersons) {
    let arrayOfYears = arrayOfPersons.map(person => {
        if (person.yearOfDeath === undefined) {
            const actualYear = new Date().getFullYear();
            
            return parseInt(actualYear) - person.yearOfBirth;
        }

        return person.yearOfDeath - person.yearOfBirth;
    });

    let largest = arrayOfYears[0];
    let index = 0;
    for (let i = 0; i < arrayOfYears.length; i++) {
        if (largest < arrayOfYears[i]) {
            largest = arrayOfYears[i];
            index = i; 
        }
    }

    return arrayOfPersons[index];
};

// Do not edit below this line
module.exports = findTheOldest;
