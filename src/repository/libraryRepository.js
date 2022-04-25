import axios from "../custom-axios/axios";

const libraryService = {

    fetchAuthors: () => {
        return axios.get('authors')
    },

    fetchBooks: () => {
        return axios.get('books')
    },

    fetchCountries: () => {
        return axios.get('countries')
    },

    fetchCategories: () => {
        return axios.get('categories')
    },

    deleteBook: (id) => {
        return axios.delete(`books/delete/${id}`)
    },

    addBook: (name, category, availableCopies, authorId, isInGoodCondition) => {
        return axios.post("books/add", {
            "name" : name,
            "category" : category,
            "availableCopies" : availableCopies,
            "authorId" : authorId,
            "isInGoodCondition" : isInGoodCondition
        })
    },

    editBook: (id, name, category, availableCopies, authorId, isInGoodCondition) => {
        const book = {
            id: id,
            name: name,
            category: category,
            availableCopies: availableCopies,
            authorId: authorId,
            isInGoodCondition: isInGoodCondition
        }

        return axios.post(`books/edit/${id}`, book)
    },

    getBook: (id) => {
        return axios.get(`books/${id}`)
    }

}

export default libraryService;