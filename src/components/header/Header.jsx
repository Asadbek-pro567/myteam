import './Header.css'

function Header (){
    return(
        <>
        <div className="container">
            <header>
                <div className='header'>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                    <button>Contact Us</button>
                </div>
                <div className="header__list">
                    <h1>Find the best <span>talent</span></h1>
                    <div>
                        <hr />
                        <p>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
                    </div>
                </div>
            </header>
        </div>
        
        
        


        </>
    )
}


export default Header