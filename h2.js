

// flatten arrays into a single array
function flatten(arr) {
    return arr.reduce((flattened, item) => [...flattened, ...item], [])
}
const arrays = [
    ['first', 'second'],
    [1, 2, 3],
    [true]
];
console.log(flatten(arrays)); // ['first', 'second', 1, 2, 3, true],

