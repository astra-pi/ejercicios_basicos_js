function repeatCounter(list) {
    const count = {};
    for (let word of list) {
      if (!count[word]) {
        count[word] = 1;
      } else {
        count[word]++;
      }
    }
    console.log(count);
  }