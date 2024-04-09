const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
      let currentElement = array[i];
      let lastIndex = i - 1;
  
      while (lastIndex >= 0 && array[lastIndex] > currentElement) {
        array[lastIndex + 1] = array[lastIndex];
        lastIndex--;
      }
      array[lastIndex + 1] = currentElement;
    }
  
    return array;
  };

  console.log(insertionSort([8,5,6,10,2,3,9])); // output [2, 3, 5, 6, 8, 9, 10]