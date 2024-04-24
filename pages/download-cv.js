import router from 'next/router';
import React, { useEffect, useState } from 'react';

const CvDownload = () => {

  const [download , isDownload] = useState(false);

  const handleDownload = () => {
    isDownload(true);
    // CV dosyasının yolu
    const cvFilePath = '/resume.pdf';

    // CV dosyasını indirmek için bir bağlantı oluşturun
    const link = document.createElement('a');
    link.href = cvFilePath;
    link.download = 'emirhan-dogru-resume.pdf'; // İndirilen dosyanın adı
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (!download) {
      handleDownload();
    }
    
    router.back();
  }, [])

  return <></>
};

export default CvDownload;