const findTheOldest = function(arr) {
    return arr.reduce((champion, current) => {
         const currentDeathYear = current.yearOfDeath? current.yearOfDeath:new Date().getFullYear()
         const championDeathYear = champion.yearOfDeath? champion.yearOfDeath:new Date().getFullYear()
         let currentAge = currentDeathYear - current.yearOfBirth
         let championAge = championDeathYear - champion.yearOfBirth
         if (currentAge > championAge) {
            return current
         } else {
            return champion
         } 
    })
};

// Do not edit below this line
module.exports = findTheOldest;
