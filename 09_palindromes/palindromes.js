const palindromes = function (str) {
  const cleanString = str.replaceAll(/(\p{P}|\p{Z})/gu, '').toLowerCase();
  return cleanString === cleanString.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
