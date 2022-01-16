// implement polyfill functions for map, filter, every, reduce

//map
let garden = ["carrot", "apple", "pear", "onion", "cabage"]

Array.prototype.polyMap = function (callback) {
    let arr = [];
    for (i = 0; i < garden.length; i++) {
        arr.push(callback(garden[i]))
    }
    return arr;
}
let newGarden = garden.polyMap(function (element) {
    return element
})
console.log(newGarden)

//filter

let store = [
    { name: "carrot", condition: "new" },
    { name: "apple", condition: "rotten" },
    { name: "pear", condition: "new" },
    { name: "onion", condition: "rotten" },
    { name: "cabage", condition: "new" }
]

Array.prototype.polyFilter = function (callback, context) {
    var arr = [];
    for (i = 0; i < store.length; i++) {
        if (callback.call(context, store[i], i, store)) {
            arr.push(store[i])
        }
    }
    return arr
}

store.polyFilter(function (element) {
    if (element.condition === "new") {
        console.log(element)
    }
})

//every
//reduce

