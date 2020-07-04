import React from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../../queries/queries';

const BookDetails = (props) => {
    const {book} = props.data;
    return (
        <>
          {
              book ?
              <div>
              <h2 className="text-capitalize">{book.name}</h2>
              <p className="font-weight-light">{book.genre}</p>
          <p className="font-italic mb-0">{book.author.name}</p>
          <p className="lead">All books by this author</p>
          <ul className="other-books">
              {book.author.books.map(item=>{
                  return <li className="text-capitalize" key={item.id}>{item.name}</li>
              })}
          </ul>
              </div>
              :
              <div>No book Selected...</div>
          }
          
        </>
    );
};

export default graphql(getBookQuery,{
    options:(props)=>{
        return {
            variables:{
                id: props.bookId
            }
        }
    }
})(BookDetails);