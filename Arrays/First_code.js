const strings = ['a', 'b', 'c', 'd']

//This array stores 4*4 =16 bytes of memory sequentially in RAM

console.log(strings[2])

//Push and pop operation--> both O(1) function

strings.push('e');
strings.pop(); //Removes last item

//unshift --> adds items at 0th index

strings.unshift('x'); //O(n)--> adds and then loops through array to rearrange the indices
console.log(strings)

//splice--> adds item at given index

strings.splice(2, 0 ,'alien') //O(n)
console.log(strings)