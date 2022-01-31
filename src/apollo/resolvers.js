const persons = [
    {
        name: "Midu",
        city: "Barcelona"
    },
    {
        name: "Youseff",
        city: "Mataro"
    },
    {
        name: "Itzi",
        city: "Ibiza"
    }
  ];

export const resolvers = {
    Query: {
      allPersons: () => persons,
      findPerson: (root, args) => {
        const {name} = args
        return persons.find(person => person.name === name)
        }
    },
    
}