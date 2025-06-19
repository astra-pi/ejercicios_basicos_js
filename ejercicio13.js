function finderName(list, value) {
    const index = list.indexOf(value);
    if (index !== -1) {
      console.log(true, index);
    } else {
      console.log(false);
    }
  }