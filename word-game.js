export function longestWord(sentence) {
  let senty = sentence.split(" ");
  let longestWord = senty[0];
  console.log(senty);
  for (let i in senty) {
    if (senty[i].length >= longestWord.length) {
      longestWord = senty[i];
    }
  }
  return longestWord;
}
console.log(longestWord("The dog jumped over the shipyard fence"));
export function shortestWord(sentence) {
let senty = sentence.split(" ");
let shortestWord = senty[0];
console.log(senty);
for (let i in senty) {
    if (senty[i].length <= shortestWord.length) {
        shortestWord = senty[i];
    }
}
 return shortestWord;
}
console.log(shortestWord("The dog barked loudly at the cat up the tree"));


export function wordLengths(sentence) {
let sum = 0;
let senty = sentence.split(" ");
console.log(senty);
for (let i in senty) {
    sum += senty[i].length;
}
return sum;
}
console.log(wordLengths("The dog barked loudly"))