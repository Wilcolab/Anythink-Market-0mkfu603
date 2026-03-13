// Refined prompt with error handling
function toCamelCase(str) {
  if (typeof str !== 'string') throw new TypeError('Input must be a string');
  if (str === "") return "";
  return str.replace(/[-_ ]+(.)/g, (match, group1) => group1.toUpperCase());
}
