function average(numberList) {
    let sum = 0;
    for (let num of numberList) {
      sum += num;
    }
    console.log(sum / numberList.length);
  }