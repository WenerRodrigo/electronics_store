import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
   <footer className={styles.footer}>
    <div>
        <FaFacebook {...iconesProps}/>
        <FaTwitter {...iconesProps}/>
        <FaInstagram {...iconesProps}/>
    </div>
    <span>Desenvolvido por WenerRodrigo@</span>
   </footer>
  )
}

export default Footer