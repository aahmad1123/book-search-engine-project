import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($username: String, $email: String, $password: String){
        addUser(username: $username, email:$email, password:$password ){
            token
            user {
                _id
                username
              }
        }
    }
`;

export const LOGIN = gql`
    mutation login($email: String, $password: String){
        login(email: $email, password: $password){
            token
            user{
                _id
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($bookData: SaveBookInput){
        saveBook(bookData:$bookData){
            _id
            username
            email
            savedBooks{
                bookId
                authors
                image
                description
                link
                title
            }
        }
    }
`   

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID){
        removeBook(bookId:$bookId){
            _id
            username
            email
            savedBooks{
                bookId
                authors
                image
                description
                link
                title
            }
        }
    }
`   
