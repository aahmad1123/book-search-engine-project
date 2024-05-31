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
    bookId: ID
    image: String
    link: String
    title: String
}

type Auth{
    token: ID
    user: User
}

input SaveBookInput {
    authors: [String]
    description: String
    title: String
    bookId: String
    image: String
    link: String
}

type Query {
    me: User
}

type Mutation {
    addUser(username: String, email: String, password: String):Auth
    login(email: String, password: String):Auth
    saveBook(bookData: SaveBookInput):User
    removeBook(bookId: ID):User
}
`

module.exports = typeDefs;