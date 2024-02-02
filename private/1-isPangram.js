// const isPangram = string => [...new Set(string.split(" ").join("").replace(/[\W\d]/g, "").toLowerCase().split(""))].length == 26;

console.log(isPangram("This is not a pangram."));
