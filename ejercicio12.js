function removeDuplicates(list) {
    const unique = [];
    for (let item of list) {
      if (!unique.includes(item)) {
        unique.push(item);
      }
    }
    console.log(unique);
  }