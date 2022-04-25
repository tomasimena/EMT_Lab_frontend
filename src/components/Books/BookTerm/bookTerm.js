import React from "react";
import {Link} from "react-router-dom";
const BookTerm = (props) => {
    return (
        <tr>
            <td >{props.term.name}</td>
            <td >{props.term.category}</td>
            <td >{props.term.availableCopies}</td>
            {props.authors.map((author) => {
                if (author.id === props.term.authorIdValue) {
                    return(<td key={author.id} >{author.name}</td>)
                } else return null
            })}
            {props.term.isInGoodCondition === true ? <td >In good condition</td>
            : <td >In bad condition</td>}
            <td  className={"text-right"}>
                <button title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </button>
                <Link className={"btn btn-info ml-2"}
                      onClick={() => {
                          props.onEdit(props.term.id)
                          console.log(props.term)
                          console.log("id: "+props.term.id)
                      }}
                      to={`/books/edit/${props.term.id}`}>
                    Edit
                </Link>
            </td>
        </tr>
    )
}

export default BookTerm;