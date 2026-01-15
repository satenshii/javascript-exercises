const findTheOldest = function (people) {
    return people.reduce((prev, current) => {
        const prevAge = getAge(prev);
        const currentAge = getAge(current);
        if (prevAge > currentAge) {
            return prev;
        } else {
            return current;
        }
    })
};

const getAge = (person) => {
    const yearOfDeath = person.yearOfDeath ? person.yearOfDeath : new Date().getFullYear();
    return yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
