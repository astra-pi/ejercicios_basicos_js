
function findLongestWord(stringList) {
    let longest = "";
    for (let word of stringList) {
      if (word.length > longest.length) {
        longest = word;
      }
    }
    console.log(longest);
  }