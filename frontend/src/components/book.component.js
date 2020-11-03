import React, { Component } from "react";
import BookDataService from "../services/book.service";

export default class Book extends Component {
    constructor(props) {

        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeSummary = this.onChangeSummary.bind(this);
        this.getBook = this.getBook.bind(this);
        this.releaseBook = this.releaseBook.bind(this);
        this.updateBook = this.updateBook.bind(this);
        this.deleteBook = this.deleteBook.bind(this);

        this.state = {
            currentBook: {
                id: null,
                title: "",
                author: "",
                publisher: "",
                summary: "",
                release_date: "",
                category: "",
            },
            message: ""
        };
    }

    componentDidMount() {
        this.getBook(this.props.match.params.id);
    }

    onChangeTitle(e) {
        const title = e.target.value;

        this.setState(function(prevState) {
            return {
                currentBook: {
                    ...prevState.currentBook,
                    title: title
                }
            };
        });
    }

    onChangeSummary(e) {
        const summary = e.target.value;

        this.setState(prevState => ({
            currentBook: {
                ...prevState.currentBook,
                summary: summary
            }
        }));
    }

    getBook(id) {
        BookDataService.get(id)
            .then(response => {
                this.setState({
                    currentBook: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    stringfyDate(date) {

        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = date.getFullYear();

        date = yyyy + '-' + mm + '-' + dd;

        return date;

    }

    releaseBook() {

        const today = this.stringfyDate(new Date());

        var data = {
            id: this.state.currentBook.id,
            title: this.state.currentBook.title,
            author: this.state.currentBook.author,
            publisher: this.state.currentBook.publisher,
            summary: this.state.currentBook.summary,
            release_date: today,
            category: this.state.currentBook.category,
        };

        BookDataService.update(this.state.currentBook.id, data)
            .then(response => {
                this.setState(prevState => ({
                    currentBook: {
                        ...prevState.currentBook,
                        release_date: today,
                    }
                }));
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    updateBook() {
        BookDataService.update(
            this.state.currentBook.id,
            this.state.currentBook
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "The book was updated successfully!"
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    deleteBook() {
        BookDataService.delete(this.state.currentBook.id)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/books')
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { currentBook } = this.state;

        return (
            <div>
                {currentBook ? (
                    <div className="edit-form">
                        <h4>Book</h4>
                        <form>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    value={currentBook.title}
                                    onChange={this.onChangeTitle}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="summary">Summary</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="summary"
                                    value={currentBook.summary}
                                    onChange={this.onChangeSummary}
                                />
                            </div>

                            <div className="form-group">
                                <label>
                                    <strong>Release Date:</strong>
                                </label>
                                {currentBook.release_date}
                            </div>
                        </form>

                        {new Date() >= new Date(currentBook.release_date) ? (
                            <button
                                disabled={true}
                                className="badge badge-primary mr-2"
                            >
                                Already Published
                            </button>
                        ) : (
                            <button
                                className="badge badge-primary mr-2"
                                onClick={() => this.releaseBook()}
                            >
                                Publish
                            </button>
                        )}

                        <button
                            className="badge badge-danger mr-2"
                            onClick={this.deleteBook}
                        >
                            Delete
                        </button>

                        <button
                            type="submit"
                            className="badge badge-success"
                            onClick={this.updateBook}
                        >
                            Update
                        </button>
                        <p>{this.state.message}</p>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Please click on a Book...</p>
                    </div>
                )}
            </div>
        );
    }
}