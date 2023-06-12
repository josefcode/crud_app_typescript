import React, {useState} from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './styleAbout.css'

const AboutPage = () => {
  

  return (
    <div className='about-page'>
        <div className='about-container'>
        <div className='about-title-side'>
            <h1 className='about-title'>
            Quem somos
            </h1>
        </div>
        <div className='about-desc-side'>
            <div>
            <h1>Quem somos</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae enim hendrerit, accumsan dolor ac, tincidunt nunc. Nunc non commodo nisi. Pellentesque a rhoncus lorem. Nam ac convallis orci, posuere dictum est. Donec dapibus imperdiet pharetra. Nam eu odio at metus semper efficitur eu ac nisi. Vivamus cursus risus mauris, sed molestie mi hendrerit a. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae enim hendrerit, accumsan dolor ac, tincidunt nunc. Nunc non commodo nisi. Pellentesque a rhoncus lorem. Nam ac convallis orci, posuere dictum est. Donec dapibus imperdiet pharetra. Nam eu odio at metus semper efficitur eu ac nisi. Vivamus cursus risus mauris, sed molestie mi hendrerit a. </p>
            <div className='about-icons'>
                <LinkedInIcon fontSize = "large"/>
                <FacebookIcon fontSize = "large" />
            </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default AboutPage;
