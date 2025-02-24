function details(person){
// console.log(person)
return 'my name is ' + person.name + ' and i live in ' +person.city;

}

const personDetails = {
    name: "Tamanna Akter",
    age: 22,
    city: "Sylhet"
};

console.log(details(personDetails))