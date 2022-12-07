import React from 'react'
import LogoFacebook from './facebook-logo-black.webp';
import './Footer.css';
import LogoInstagram from './instagram.png';

const Footer = () => {
    return (
        <footer className='footerLogos  text-light'>
            <div className='parrafo'>
                <p>  Maquinas opticas</p>
                <p>  Salon de venta:  argentina</p>
                <p>tel: 10000000</p>
            </div>
            <div className='linksFooter'>
                <a href='https://www.facebook.com' className='btn btn-primary bg-light logo'>
                    <img src={LogoFacebook} className='logoFk' alt='ir a facebook' />
                </a>
                <a href='https://www.instagram.com/' className='btn btn-primary bg-light logo'>
                    <img src={LogoInstagram} className='logoIg' alt='ir a instagram' />
                </a>
                <div className='IconsFa'>      
            </div>
            <p> by . . . GNQ devops</p>
            </div>
        </footer >
    )
}

export default Footer;