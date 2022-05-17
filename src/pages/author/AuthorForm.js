import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Form from '../../components/form/AppForm'

const AuthorForm = props => {
    const [formData, setFormData] = useState({
        name: '',
        bio: '',
        gender: ''
    });
    const { name, bio, gender } = formData;
    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
    return (
        <>
            <h3>New Author</h3>
            <form>
                <input
                    type="text"
                    placeholder="Author name"
                    name="name"
                    value={name}
                    onChange={onChange}
                />
                <input
                    type="text"
                    placeholder="Author name"
                    name="name"
                    value={name}
                    onChange={onChange}
                />
                <textarea
                    name='text'
                    cols='30'
                    rows='5'
                    placeholder='Biography '
                    value={bio}
                    onChange={onChange}
                    required
                />
            </form>
        </>

    )
}

AuthorForm.propTypes = {}

export default AuthorForm