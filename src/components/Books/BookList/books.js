import React from "react";
import {Link} from 'react-router-dom'
import BookTerm from '../BookTerm/bookTerm'
import ReactPaginate from 'react-paginate'

class Books extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 5
        }
    }
    
    render() {

        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.books.length / this.state.size);

        const books = this.listBooks(offset, nextPageOffset);

        return (
            <div className={'container'}>
                <table className={'table table-hover table-striped'}>
                    <thead>
                    <tr>
                        <th scope={'col'}>Name</th>
                        <th scope={'col'}>Category</th>
                        <th scope={'col'}>Available Copies</th>
                        <th scope={'col'}>Author</th>
                        <th scope={'col'}>Is In Good Condition</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books}
                    </tbody>
                </table>
                <ReactPaginate previousLabel={"back"}
                               nextLabel={"next"}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"break-me"}
                               pageClassName={"ml-1"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination m-4 justify-content-center"}
                               activeClassName={"active"}/>
                <div className="col mb-3 mt-3">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <Link className={"btn btn-block btn-dark"} to={"/books/add"}>Add a new book</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({
            page: selected
        })
    }

    listBooks = (offset, nextPageOffset) => {
        return this.props.books.map((term, index) => {
            return (
                <BookTerm key={term.id} term={term} authors={this.props.authors} onDelete={this.props.onDelete} onEdit={this.props.onEdit}/>
            );
        }).filter((book, index) => {
            return index >= offset && index < nextPageOffset;
        })

    }

}



// const books = (props) => {
//     return(
//         <div className={'container'}>
//             <table className={'table table-hover table-striped'}>
//                 <thead>
//                 <tr>
//                     <th scope={'col'}>Name</th>
//                     <th scope={'col'}>Category</th>
//                     <th scope={'col'}>Available Copies</th>
//                     <th scope={'col'}>Author</th>
//                     <th scope={'col'}>Is In Good Condition</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {props.books.map((term) => {
//                     return (
//                         <BookTerm key={term.id} term={term} authors={props.authors} onDelete={props.onDelete} onEdit={props.onEdit}/>
//                     );
//                 })}
//                 </tbody>
//             </table>
//             <div className="col mb-3 mt-3">
//                 <div className="row">
//                     <div className="col-sm-12 col-md-12 col-lg-4">
//                         <Link className={"btn btn-block btn-dark"} to={"/books/add"}>Add a new book</Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default Books;