import Header from './../../components/Header/Header';
import UploadHero from './../../components/UploadHero/UploadHero';
import UploadForm from '../../components/UploadForm/UploadForm';
import { useState } from 'react';
import './Upload.scss';

const Upload = () => {

    const [heroAddress, setHeroAddress] = useState("http://localhost:8080/public/images/Upload-video-preview.jpg");

    return (
        <>

            <Header/>

            <section className='desktop--switch'>

                <h1 className="desktop__hero--switch">Upload Video</h1>

                <div className='desktop__content--switch'>
                    <UploadHero
                        heroAddress={heroAddress}
                    />
                    <UploadForm/>
                </div>

            </section>

        </>
    )
}

export default Upload;