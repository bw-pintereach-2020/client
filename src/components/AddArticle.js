import React, { useState } from 'react'

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
        props.setArticles([...props.articles, values])
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

export default AddArticle