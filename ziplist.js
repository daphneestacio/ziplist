function zipList(arrayOne, arrayTwo) {
  const newArray = [];
  for (let iter = 0; iter < arrayOne.length; iter++) {
    newArray.push(arrayOne[iter]);
    newArray.push(arrayTwo[iter]);
  }
  return newArray;
}

function zipListTheSimpleWay(arrayOne, arrayTwo) {
  const newArray = _.zip(arrayOne, arrayTwo);
  return _.reduceRight(newArray, function (a, b) { return b.concat(a); }, []);
}

const one = ['a', 'b', 'c'];
const two = [1, 2, 3];
console.log('zipList: ', zipList(one, two));
console.log('zipListTheSimpleWay', zipListTheSimpleWay(one, two));
