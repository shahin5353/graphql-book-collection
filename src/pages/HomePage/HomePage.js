import React, { useState } from 'react';
import BookList from '../../components/BookList/BookList';
import { Container, Col, Row } from 'react-bootstrap';
import AddBook from '../../components/AddBook/AddBook';
import BookDetails from '../../components/BookDetails/BookDetails';

const HomePage = () => {
    const [selectedBook,setSelectedBook] = useState(null);
    return (
        <Container className="mt-5">
            <h1 className="text-center mb-4 text-warning">Shahin's Book Collection</h1>
            <Row>
                <Col md={{span:6}}>
                    <BookList selectBook={setSelectedBook}/>
                </Col>
                <Col md={{span:6}} className="bg-dark text-light rounded p-3">
                    <BookDetails bookId={selectedBook}/>
                </Col>
            </Row>
            <Row>
                <Col md={{span:4}} className="bg-light mt-4 p-4 rounded">
                    <AddBook />
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;