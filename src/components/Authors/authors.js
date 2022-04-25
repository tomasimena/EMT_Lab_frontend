import React from 'react'

const authors = (props) => {
    return (
        <div className={'container mm-4 mt-5'}>
            <table className={'table table-striped table-hover'}>
                <thead>
                <tr>
                    <th scope={'col'}>Name</th>
                    <th scope={'col'}>Surname</th>
                </tr>
                </thead>
                <tbody>
                {props.authors.map((term) => {
                    return (
                        <tr>
                            <td>{term.name}</td>
                            <td>{term.surname}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}
export default authors;