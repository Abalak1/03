const people = [
    {
        name: 'Ben',
        age: 30,
        occupation: 'Banker',
        salary: 3000,
        pets: []
    },
    {
        name: 'Jane',
        age: 26,
        occupation: 'Teacher',
        salary: 1200,
        pets: ['dog']
    },
    {
        name: 'John',
        age: 31,
        occupation: 'Developer',
        salary: 4000,
        pets: ['dog', 'cat']
    },
    {
        name: 'Mike',
        age: 26,
        occupation: 'Developer',
        salary: 5000,
        pets: []
    },
    {
        name: 'Tom',
        age: 34,
        occupation: 'Teacher',
        salary: 3400,
        pets: ['dog', 'parrot']
    }];

// 1. Calculate sum of all teacher salaries
const sum = people.reduce((sum, person) => sum + person.salary, 0)

// 2. Create a new array with the same people but double salaries of developers
const happyDeveloper = people.map(person => {
    const happyDeveloper = { ...person }
    if (happyDeveloper.occupation === "Developer") {
        happyDeveloper.salary = happyDeveloper.salary * 2
    } return happyDeveloper
})

// 3. Filter people who has a dog
const filteredPeople2 = people.filter(person => person.pets && person.pets.includes('dog'))

// 4. Figure out if all the people have pets or not
const allHavePets = people.every(person => person.pets && person.pets.length > 0)

// 5. Figure out if any of the people are above age 30
const isAbove = people.some(person => person.age > 30)