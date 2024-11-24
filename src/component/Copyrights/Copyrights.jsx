import React from 'react'
import './Copyrights.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Copyrights() {
  return (
    <div className='copyright-container'>
        <div className='copyright-socials'>
            <div className='social-media-handles facebook'><FontAwesomeIcon icon={faFacebookF} /></div>
            <div className='social-media-handles'><FontAwesomeIcon icon={faInstagram} /></div>
            <div className='social-media-handles'><FontAwesomeIcon icon={faTwitter} /></div>
            <div className='social-media-handles'><FontAwesomeIcon icon={faYoutube} /></div>
        </div>
        <div className='copyright-text'>
            <p>Copyright       2023 Dscode | All rights reserved</p>
        </div>
    </div>
  )
}

export default Copyrights