import React from 'react'
import './Footer.css'

function footer() {
    
    return(
        <>
        <footer>
            <div className="container ctr">
                <div className='footer__list'>
                    <h1>Ready to get started?</h1>
                    <button><a href="#">Contact Us</a></button>
                </div>
                <div className="footer__inner">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <ul>
                        <li>987  Hillcrest Lane</li>
                        <li>Irvine, CA</li>
                        <li>California 92714</li>
                        <li>Call Us : +998 94 469 25 09</li>
                        <h4>Copyright</h4>
                    </ul>
                </div>
            </div>
        </footer>
        </>
    )
}
export default footer
