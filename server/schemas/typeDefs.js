const typeDefs = `
type User{
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
}

type Book{
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
}

type Auth{
    token: ID
    user: User
}

type Query {
    me: User
}

type Mutation {
    addUser(username: String, email: String, password: String):Auth
}
`