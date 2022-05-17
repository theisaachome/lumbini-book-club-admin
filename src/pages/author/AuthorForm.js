import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { addAuthor } from "../../actions/author";

const AuthorForm = ({addAuthor}) => {
    const [formData, setFormData] = useState({
        name: '',
        bio: '',
        gender: ''
    });
    const { name, bio, gender } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = (e)=>{
        e.preventDefault();
        const authorForm = {name,bio,gender};
        addAuthor(authorForm);
    }
    return (
        <>
            <h3>New Author</h3>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Author name"
                    name="name"
                    value={name}
                    onChange={onChange}
                />
                <input
                    type="text"
                    placeholder="Author gender"
                    name="gender"
                    value={gender}
                    onChange={onChange}
                />
                <textarea
                    name='bio'
                    cols='30'
                    rows='5'
                    placeholder='Biography '
                    
                    value={bio}
                    onChange={onChange}
                    required
                />
                <button type='submit'>Create</button>
            </form>
        </>

    )
}

AuthorForm.propTypes = {
    addAuthor:PropTypes.func.isRequired
}

const mapStateToProps=state =>({
    author:state.author
})
export default connect(mapStateToProps,{addAuthor})(AuthorForm)