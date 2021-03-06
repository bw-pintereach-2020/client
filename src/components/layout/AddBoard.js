import React, { useState } from 'react'
import { connect } from 'react-redux'
import addBoard from '../../actions/addBoard'
import getBoards from '../../actions/getBoards'
import styled from 'styled-components'

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    .button-container {
        display: flex;
        justify-content: space-evenly;
        width: 100%;

        button {
            margin: 1%;
        }
    }
`

const initialValues = {
    name: '',
    description: '',
    private: false,  
}

function AddBoard(props) {
    const {len} = props
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
        setIsEditing(false)
        setValues(initialValues)
    }

    const closeForm = (e) => {
        e.preventDefault()
        setIsEditing(false)
        setValues(initialValues)
    }

    return (
        <div className='add-article'>
            <h2>My Pintereach Boards</h2>
            <h3>Save your articles, here</h3>
    {!isEditing ? <button onClick={() => {setIsEditing(true)}}>{len === 0 ? 'Create Your First Board': 'Add Another Board'}</button> : null }
            {isEditing ?
            <StyledForm>
                <label>Name</label>
                <input 
                    type='text'
                    name='name'
                    placeholder='Thesis'
                    value={values.name}
                    onChange={handleChanges}
                />
                <label>Description</label>
                <input 
                    type='text'
                    name='description'
                    placeholder='Articles pertaining to...'
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
                <div className='button-container'>
                    <button onClick={handleSubmit}>Save</button>
                    <button onClick={closeForm}>Close</button>
                </div>
            </StyledForm>
            : null
            }
        </div>
    )
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps, { addBoard, getBoards })(AddBoard)