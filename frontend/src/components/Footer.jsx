import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Footer(){
    return(
        <footer className="footerCSS fixedFooter">
            <p className="footerTextCSS">Copyright &copy; HGU TeamCC Service 2023</p>
        </footer>
    )
}

export default Footer;