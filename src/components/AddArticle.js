import React, { useState } from 'react'
import { connect } from 'react-redux'
import addArticle from '../actions/addArticle'
import getArticles from '../actions/getArticles'

const initialValues = {
    title: '',
    url: '',
    image: '',
    description: '',
    notes: '', 
}

function AddArticle(props) {
    const [values, setValues] = useState(initialValues)

    const handleChanges = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newArticle = { url: values.url, board_id: props.id, notes: values.notes }
        props.addArticle(newArticle)
        props.getArticles()
        props.setIsEditing(false)
        setValues(initialValues)
    }

    const closeForm = (e) => {
        e.preventDefault()
        props.setIsEditing(false)
        setValues(initialValues)
    }

    return (
        <form>
            <label>Title</label>
            <input
                type='text'
                name='title'
                value={values.title}
                onChange={handleChanges}
            />
            <label>Article Link</label>
            <input
                type='text'
                name='url'
                value={values.url}
                onChange={handleChanges}
            />
            <label>Image Link</label>
            <input
                type='text'
                name='image'
                value={values.image}
                onChange={handleChanges}
            />
            <label>Description</label>
            <input
                type='text'
                name='description'
                value={values.description}
                onChange={handleChanges}
            />
            <label>Notes</label>
            <input
                type='text'
                name='notes'
                value={values.notes}
                onChange={handleChanges}
            />
            <button onClick={handleSubmit}>Save</button>
            <button onClick={closeForm}>Cancel</button>
        </form>
    )
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps, { addArticle, getArticles })(AddArticle)