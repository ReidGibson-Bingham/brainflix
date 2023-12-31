import './UploadHero.scss';

const UploadHero = (props) => {

    return (
        <section className="upload-hero">
            <h1 className="upload-hero__title">Upload Video</h1>

            <h4 className="upload-hero__thumbnail-title">VIDEO THUMBNAIL</h4>

            <img className="upload-hero__thumbnail" src={props.heroAddress} alt="thumbnail image"/>
        </section>
    )
}

export default UploadHero;