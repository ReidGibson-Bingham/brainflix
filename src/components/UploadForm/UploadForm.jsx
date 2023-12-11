import './UploadForm.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


const UploadForm = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const postVideo = async () => {
        const baseURL = 'http://localhost:8080';
        try {
            const response = await axios.post(`${baseURL}/videos`, {
                title: title,
                description: description
            })
            alert(`${title} Uploaded successfully, redirecting you to the home page.`);
            navigate('/');
        } catch (error) {
            console.log("500 status error: ", error);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!title.trim() || !description.trim()) {
            alert("All fields are necessary to upload.");
        } else {
            postVideo();
        }
        
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleCancel = () => {
        alert("Upload canceled.");
        setTitle('');
        setDescription('')
        navigate('/');
    }
    
    return (

        <form className="upload-form" onSubmit={handleSubmit}>

            <h4 className="upload-form__title-title">TITLE YOUR VIDEO</h4>
            <input type="text" name="title" className="upload-form__title-input" placeholder='Add a title to your video' onChange={handleTitleChange} value={title}></input>
            
            <h4 className="upload-form__description-title">ADD A VIDEO DESCRIPTION</h4>
            <input type="text" name="description" className="upload-form__description-input" placeholder='Add a description to your video' onChange={handleDescriptionChange} value={description}></input>

            <div className='upload-form--tablet-div'>
                <button className="upload-form__publish"> PUBLISH</button>
                <button className="upload-form__cancel" type="button" onClick={handleCancel}>CANCEL</button>
            </div>

        </form>
        
    )
}

export default UploadForm;