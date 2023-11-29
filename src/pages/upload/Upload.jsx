import image from './../../assets/Images/Upload-video-preview.jpg'

import Header from './../../components/Header/Header';
import UploadHero from './../../components/UploadHero/UploadHero';
import UploadForm from '../../components/UploadForm/UploadForm';
import { useState } from 'react';

const Upload = () => {

    const [heroAddress, setHeroAddress] = useState(image);

    return (
        <>
            <Header/>
            <UploadHero
                heroAddress={heroAddress}
            />
            <UploadForm/>
        </>
    )
}

export default Upload;