// DownloadFile.js

import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Fade } from 'react-awesome-reveal';;
import '../styles/DownloadFile.css';
import pdfUrl from '../PDF/Well-companyProfile.pdf'

function DownloadFile() {
 

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'company-brochure.pdf';
    link.click();
  };

  return (
    <div className="download-file-container">
      <Parallax y={[-20, 20]} className='Parallax'>
        <Fade up  duration={2000}>
        <h2> ดาวน์โหลดโบรชัวร์บริษัท</h2>
      <button className="download-button" onClick={handleDownload}>
        DOWNLOAD
      </button>

        </Fade>
      </Parallax>

    </div>
  );
}

export default DownloadFile;
