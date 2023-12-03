import image from './../../assets/Images/Upload-video-preview.jpg'

import Header from './../../components/Header/Header';
import UploadHero from './../../components/UploadHero/UploadHero';
import UploadForm from '../../components/UploadForm/UploadForm';
import { useState } from 'react';
import './Upload.scss';

const Upload = () => {

    const [heroAddress, setHeroAddress] = useState(image);

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