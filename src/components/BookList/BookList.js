import React from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../../queries/queries';

const BookList = (props) => {
    var data = props.data;
    return (
        <div>
            <ul className="book-list list-unstyled">
                {
                    data.loading ?
                        <div>
                            Loading books...
                            </div>
                        :
                        data.books.map(book => {
                            return (
                                <li className="btn btn-outline-success mx-3 my-2 font-weight-bold text-capitalize" key={book.id} onClick={(e)=>{props.selectBook(book.id)}}>{book.name}</li>
                            )
                        })
                }
            </ul>
        </div>
    );
};

export default graphql(getBooksQuery)(BookList);