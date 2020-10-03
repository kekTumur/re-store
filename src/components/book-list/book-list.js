import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BookListItem from '../book-list-item';
import { withBookstoreService } from '../hoc'; 
import { fetchBooks, onAddedToCart } from '../../actions';
import compose from '../../utils';
import './book-list.css';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const BookList = ({ books, onAddedToCart }) => {
    return (
        <ul className="book-list">
            {
                books.map(book => {
                    return (
                        <li key={book.id}>
                            <BookListItem
                            onAddedToCart={() => onAddedToCart(book.id)} 
                            book={book}/>
                        </li>
                    );
                })
            }
        </ul>
    );
}

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error, onAddedToCart } = this.props;
        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <BookList onAddedToCart={onAddedToCart} books={books}/>
    }
}


const mapStateToProps = ({ books, loading, error}) => {
    return { books, loading, error };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;  
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (id) => dispatch(onAddedToCart(id))
    }
};


export default withBookstoreService()(
    connect(mapStateToProps, mapDispatchToProps)(BookListContainer)); // mapStateToProps читает из redux-store

// export default compose(
//     withBookstoreService(),
//     connect(mapStateToProps, mapDispatchToProps)
// )(BookList); // NEW
