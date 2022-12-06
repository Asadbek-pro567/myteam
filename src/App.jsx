import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';
import Rasm from './assets/image/myteam-logo.png';
import Circle from './assets/image/left.png'
import Down from './assets/image/down.png'
import Rectangle from './assets/image/rectangle__group.png'
import User from './assets/image/user.png'
import Settings from './assets/image/settings.png'
import Sxema from './assets/image/sxema.png'
import Right from './assets/image/right.png'
import Liniya from './assets/image/liniya.svg'
// import Tirnoq from './assets/image/tirnoq.png'
import Odam1 from './assets/image/odam1.png'
import Odam2 from './assets/image/odam2.png'
import Odam3 from './assets/image/odam3.png'
import Oval from './assets/image/oval.png'
import Ddown from './assets/image/left_down.svg'
import Insta from './assets/image/insta.png'

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={Rasm} alt=""/>
        <img className='header__circle' src={Circle} alt="" />
        <img className='header__down' src={Down} alt="" />
        <img src={Rectangle} alt="" className="rectangle" />
        <img className='user__foto' src={User} alt="" />
        <img className='settings__foto' src={Settings} alt="" />
        <img className='sxema__foto' src={Sxema} alt="" />
        <img src={Right} alt="" className="header__right" />
        <img src={Liniya} alt="" className="liniya" />
        {/* <img src={Tirnoq} alt="" className="tirnoq1" />
        <img src={Tirnoq} alt="" className="tirnoq2" />
        <img src={Tirnoq} alt="" className="tirnoq3" /> */}
        <img src={Odam1} alt="" className="odam1" />
        
        <img src={Odam2} alt="" className="odam2" />
        <img src={Odam3} alt="" className="odam3" />
        <img src={Oval} alt="" className="oval" />
        <img src={Ddown} alt="" className="ddown" />

        <img src={Rasm} alt="" className='footer__logo'/>
        <img src={Insta} alt="" className="insta" />
        <Header/>
        <Hero/>
        <Footer/>
      </div>

    </div>

  );
}

export default App;
