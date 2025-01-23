import Image from 'next/image';
import React from 'react';

export default function Logo() {
  function RenderLogoImage() {
    // Get dark mode from local storage
    const darkMode = localStorage.getItem('darkMode');
    // If dark mode is enabled, return the dark mode logo
    if (darkMode === 'enabled') {
      return './logo.png';
    }
    // If dark mode is disabled, return the light mode logo
    return './logo.png';
  }
  return (
    <div className="BrandArea">
      <Image src={RenderLogoImage()} alt="Portfy Logo" />
      <h1>Portfy</h1>
    </div>
  );
}
