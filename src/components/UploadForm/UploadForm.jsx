import './UploadForm.scss';

const UploadForm = () => {
    
    return (
        <section className="upload-form">
            
            <h4 className="upload-form__title-title">TITLE YOUR VIDEO</h4>
            <input className="upload-form__title-input" placeholder='Add a title to your video'></input>
            
            <h4 className="upload-form__description-title">ADD A VIDEO DESCRIPTION</h4>
            <input className="upload-form__description-input" placeholder='Add a description to your video'></input>

            <div className='upload-form--tablet-div'>

                <button className="upload-form__publish">PUBLISH</button>

                <button className="upload-form__cancel">CANCEL</button>

            </div>

        </section>
    )
}

export default UploadForm;