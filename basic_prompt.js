// Basic prompt for camelCase
function toCamelCase(str) {
  return str.replace(/[-_ ](.)/g, (_, c) => c.toUpperCase());
}
