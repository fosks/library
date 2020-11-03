import React, { Component } from "react";
import BookDataService from "../services/book.service";

export default class AddBook extends Component {
    
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeSummary = this.onChangeSummary.bind(this);
        this.saveBook = this.saveBook.bind(this);
        this.newBook = this.newBook.bind(this);

        this.state = {
            id: null,
            title: "",
            author: "",
            publisher: "",
            summary: "",
            release_date: "",
            category: "",

            submitted: false,
        };
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeSummary(e) {
        this.setState({
            summary: e.target.value
        });
    }

    saveBook() {
        var data = {
            title: this.state.title,
            summary: this.state.summary
        };

        BookDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    title: response.data.title,
                    author: response.data.author,
                    publisher: response.data.publisher,
                    summary: response.data.summary,
                    release_date: response.data.release_date,
                    category: response.data.category,

                    submitted: true,
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newBook() {
        this.setState({
            id: null,
            title: "",
            author: "",
            publisher: "",
            summary: "",
            release_date: "",
            category: "",

            submitted: false,
        });
    }

    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={this.newBook}>
                            Add
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                required
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                                name="title"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="summary">Summary</label>
                            <input
                                type="text"
                                className="form-control"
                                id="summary"
                                required
                                value={this.state.summary}
                                onChange={this.onChangeSummary}
                                name="summary"
                            />
                        </div>

                        <button onClick={this.saveBook} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}
            </div>
        );
    }
}