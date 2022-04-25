import React from "react";
import {useHistory} from 'react-router-dom'

const BookAdd = (props) => {
    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name : '',
        category : '',
        availableCopies : 0,
        authorId : 1,
        isInGoodCondition : true
    })
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
        console.log(e.target.name+" "+e.target.value.trim())
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const category = formData.category;
        const availableCopies = formData.availableCopies;
        const authorId = formData.authorId;
        const isInGoodCondition = formData.isInGoodCondition;

        props.onAddBook(name, category, availableCopies, authorId, isInGoodCondition);
        history.push("/books");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter book name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Category</label>
                        <input type="text"
                               className="form-control"
                               id="category"
                               name="category"
                               placeholder="Category"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">Available copies</label>
                        <input type="text"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder="Available Copies"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        {/*<label htmlFor="quantity">Is in good condition</label>*/}
                        {/*<input type="text"*/}
                        {/*       className="form-control"*/}
                        {/*       id="isInGoodCondition"*/}
                        {/*       name="isInGoodCondition"*/}
                        {/*       placeholder="Is in good condition"*/}
                        {/*       required*/}
                        {/*       onChange={handleChange}*/}
                        {/*/>*/}
                        <label>Is in good condition</label>
                        <select name="isInGoodCondition" defaultValue={"true"}
                                className="form-control" onChange={handleChange}>
                            <option value="true">Is in GOOD condition</option>
                            <option value="false">Is in BAD condition</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <select name="authorId" className="form-control" onChange={handleChange}>
                            {props.authors.map((author) =>
                                <option key={author.id} value={author.id}>{author.name}</option>
                            )}
                        </select>
                    </div>

                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )

}

export default BookAdd;