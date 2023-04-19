import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import resumePDF from '../pages/about/NewResume.pdf';

function Resume() {
  const handleDownload = () => {
    window.open(resumePDF);
  };

  return (
    <button className="btn downloadCV" onClick={handleDownload}>
      Download Resume
    </button>
  );
}

export default Resume;
