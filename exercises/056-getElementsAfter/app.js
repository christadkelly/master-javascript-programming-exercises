function getElementsAfter(array, n) {
  // your code here
  let length = array.length;
  let after = n+1;
  return array.slice(after, length);
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
