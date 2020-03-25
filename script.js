var lowerCaseArray = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
var upperCaseArray = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharactersArray = [
  ',',
  '.',
  '/',
  '<',
  '>',
  '?',
  "'",
  ':',
  ';',
  '[',
  ']',
  '{',
  '}',
  '|',
  '=',
  '+',
  '-',
  '_',
  ')',
  '(',
  '*',
  '&',
  '^',
  '%',
  '#',
  '@',
  '!',
  '~',
  '`'
];

var generateBtn = document.getElementById('generate-btn');

function getPasswordOptions() {
  var hasNumbers = parseInt(
    prompt('Would you like numbers included in your password?')
  );
  var hasLowerCase = prompt(
    'Would you like lowercase letters included in your password?'
  );
  var hasUpperCase = prompt(
    'Would you like lowercase letters included in your password?'
  );
  var hasSpecial = prompt(
    'Would you like lowercase letters included in your password?'
  );
}
