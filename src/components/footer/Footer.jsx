import React from 'react';
import style from './Footer.module.css';
import logo from '../../assets/images/logo.png';

const Footer = () => {
    return (

        <footer>
            <div className={style.container}>

              <div className={style.logo}>
                <img src={logo} alt='logo'/>
                <p>Our site presents you the most trendy and new movies,
                   you can watch the movies in good quality on our website.</p>
              </div>

              <div className={style.contact}>
                 <ul>
                     <li><h4>Our Contacts</h4></li>
                     <li><span><i class='far fa-paper-plane'/> Email: </span> areng4518@gmail.com</li>
                     <li><span><i class='fas fa-phone-square-alt'/> Phone number: </span>(+374) 94 03-34-56</li>
                 </ul>
              </div>
            </div>
        </footer>
    )
}

export default Footer;