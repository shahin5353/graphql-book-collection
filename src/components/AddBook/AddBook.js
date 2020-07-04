import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import compose from 'lodash.flowright';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../../queries/queries';
import { Button, Form, Col, Row } from 'react-bootstrap';

const AddBook = (props) => {
    var data = props.getAuthorsQuery;
    const [book,setBook] = useState({
        name: "",
        genre: "",
        authorId: ""
    });
    const submitForm = (e)=>{
        e.preventDefault();
        props.addBookMutation({
            variables:{
                name: book.name,
                genre: book.genre,
                authorId: book.authorId
            },
            refetchQueries: [{ query: getBooksQuery}]
        })
        
        
    }
    return (
            <Row>
                <Col>
                    <h3 className="text-success text-center">Add new book</h3>
                    <Form onSubmit={submitForm}>
                        <Form.Group>
                            <Form.Label htmlFor="bookName">Book Name</Form.Label>
                            <Form.Control id="bookName" type="text" onChange={(e)=>setBook({...book,name:e.target.value})} required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="genre">Genre</Form.Label>
                            <Form.Control id="genre" type="text" onChange={(e)=>setBook({...book,genre:e.target.value})} required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="authorName">Author Name</Form.Label>
                            <Form.Control id="authorName" as="select" onChange={(e)=>setBook({...book,authorId:e.target.value})} required>
                                {
                                    data.loading ?
                                    <option disabled>Loading Authors...</option>
                                    :
                                    data.authors.map(author=>{
                                        return  (
                                        <option key={author.id} value={author.id}>{author.name}</option>
                                        )                                    
                                    })
                                }
                                
                            </Form.Control>
                        </Form.Group>
                       <div className="text-center">
                       <Button variant="success" type="submit">Add New</Button>
                       </div>
                    </Form>
                </Col>
            </Row>
    );
};

export default compose(
    graphql(getAuthorsQuery,{name:"getAuthorsQuery"}),
    graphql(addBookMutation,{name:"addBookMutation"})
)(AddBook);