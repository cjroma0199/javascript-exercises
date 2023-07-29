const findTheOldest = function (array) {
  const currentYear = new Date().getFullYear();
  return array
    .sort((personOne, personTwo) => {
      if (!personOne.yearOfDeath) personOne.yearOfDeath = currentYear;
      if (!personTwo.yearOfDeath) personTwo.yearOfDeath = currentYear;

      return (
        personOne.yearOfDeath -
        personOne.yearOfBirth -
        (personTwo.yearOfDeath - personTwo.yearOfBirth)
      );
    })
    .pop();
};

// Do not edit below this line
module.exports = findTheOldest;
