// you have an array of people
const people = [
    {
        name: "George",
        age: 25,
    },
    {
        name: "Michael",
        age: 26,
    },
    {
        name: "Anna",
        age: 25,
    },
    {
        name: "Kate",
        age: 27,
    },
    {
        name: "James",
        age: 27,
    },
    {
        name: "Peter",
        age: 32,
    },
    {
        name: "Jacob",
        age: 27,
    },
];
// write function groupBy(array, key), which will group people by the given key

function groupBy(array, key) {
    const keys = {}
    array.forEach(item => {
        if (keys[item[key]]) {
            keys[item[key]].push(item)
        }
        else {
            keys[item[key]] = [item]
        }

    })

    console.log(keys)
}
groupBy(people, "age")

// for 'people' array, if I group by 'age', this function must
// return the following object
// const grouped = groupBy(people, 'age')
// =>
// {
//     '25': [{ name: 'George', age: 25 }, { name: 'Anna', age: 25 }],
//         '26': [{ name: 'Michael', age: 26 }],
//             '27': [
//                 { name: 'Kate', age: 27 },
//                 { name: 'James', age: 27 },
//                 { name: 'Jacob', age: 27 }
//             ],
//                 '32': [{ name: 'Peter', age: 32 }]
// }\




