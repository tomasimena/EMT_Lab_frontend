import React from 'react';
import { useHistory } from 'react-router-dom';

const BookEdit = (props) => {
    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: props.book.name,
        category: props.book.category,
        availableCopies: props.book.availableCopies,
        authorId: props.book.authorId,
        isInGoodCondition: props.book.isInGoodCondition
    });

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
        console.log(e.target.name+" "+e.target.value.trim())
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.book.name;
        const category = formData.category !== 0 ? formData.category : props.book.category;
        const availableCopies = formData.availableCopies !== 0 ? formData.availableCopies : props.book.availableCopies;
        const authorId = formData.authorId !== 0 ? formData.authorId : props.book.authorId;
        const isInGoodCondition = formData.isInGoodCondition !== 0 ? formData.isInGoodCondition : props.book.isInGoodCondition;

        console.log(formData)

        console.log("Book ID: "+props.book.id)

        props.onEditBook(props.book.id, name, category, availableCopies, authorId, isInGoodCondition);
        history.push("/books");

    }

    return(
        <div key={props.book.id} className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               placeholder={props.book.name}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <input type="text"
                               className="form-control"
                               id="price"
                               name="category"
                               placeholder={props.book.category}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="availableCopies">Available Copies</label>
                        <input type="text"
                               className="form-control"
                               id="quantity"
                               name="availableCopies"
                               placeholder={props.book.availableCopies}
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Author</label>
                        <select name="authorId" className="form-control" onChange={handleChange}>
                            {props.authors.map((author) => {
                                if (author.id === props.book.authorId) {
                                    return <option selected key={author.id} value={author.id}>
                                        {author.name}
                                    </option>
                                } else {
                                    return <option key={author.id} value={author.id}>
                                        {author.name}
                                    </option>
                                }
                            })}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Is in good condition</label>
                        <select name="isInGoodCondition" defaultValue={"true"}
                                className="form-control" onChange={handleChange}>
                            <option value="true">Is in GOOD condition</option>
                            <option value="false">Is in BAD condition</option>
                        </select>
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default BookEdit;