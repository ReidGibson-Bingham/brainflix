import './UploadForm.scss';

const UploadForm = () => {
    
    return (
        <section className="upload-form">
            <h4 className="upload-form__title-title">TITLE YOUR VIDEO</h4>
            <input className="upload-form__title-input" placeholder='add a title to your video'></input>
            
            <h4 className="upload-form__description-title">ADD A VIDEO DESCRIPTION</h4>
            <input className="upload-form__description-input" placeholder='add a description'></input>

            <button className="upload-form__publish">PUBLISH</button>

            <button className="upload-form__cancel">CANCEL</button>

        </section>
    )
}

export default UploadForm;