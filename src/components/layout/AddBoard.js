import React, { useState } from 'react'
import { connect } from 'react-redux'
import addBoard from '../../actions/addBoard'
import getBoards from '../../actions/getBoards'

const initialValues = {
    name: '',
    description: '',
    private: false,  
}

function AddBoard(props) {
    const [isEditing, setIsEditing] = useState(false)
    const [values, setValues] = useState(initialValues)

    const handleChanges = (e) => {
        const { name, value, type, checked } = e.target
        const valueToUse = type === 'checkbox' ? checked : value
        setValues({ ...values, [name]: valueToUse})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addBoard(values)
        props.getBoards()
        setIsEditing(false)
        setValues(initialValues)
    }

    const closeForm = (e) => {
        e.preventDefault()
        setIsEditing(false)
        setValues(initialValues)
    }

    return (
        <div>
            <button onClick={() => {setIsEditing(true)}}>New Board</button>
            {isEditing ?
            <form>
                <label>Name</label>
                <input 
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={handleChanges}
                />
                <label>Description</label>
                <input 
                    type='text'
                    name='description'
                    value={values.description}
                    onChange={handleChanges}
                />
                <label>
                    Private
                <input 
                    type='checkbox'
                    name='private'
                    checked={values.private}
                    onChange={handleChanges}
                />
                </label>
                <button onClick={handleSubmit}>Save</button>
                <button onClick={closeForm}>Close</button>
            </form>
            : null
            }
        </div>
    )
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps, { addBoard, getBoards })(AddBoard)