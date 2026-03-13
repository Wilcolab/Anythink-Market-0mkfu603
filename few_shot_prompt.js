// Few-shot prompt example
// Input: "hello world" -> Output: "helloWorld"
// Input: "test-case" -> Output: "testCase"
function toCamelCase(str) {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}
