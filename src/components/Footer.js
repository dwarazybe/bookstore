import React from 'react';
import {Link} from "react-router-dom";
import "./Footer.css";

function Footer () {
    return (
        <div className="footer">
            <p>&copy; {new Date().getFullYear()} Wszelkie prawa zastrzeżone: Bartłomiej Kudła, Paweł Kusztal, Bartosz Bukowski || <Link to="/admin">Panel administratora</Link></p>
        </div>
    );
}

export default Footer