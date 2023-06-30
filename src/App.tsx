
import { useEffect, useState } from 'react';
import './App.css'
import bg2 from "./assets/background1.jpg"
import bg1 from "./assets/background2.jpg"
import bg3 from "./assets/background3.jpg"
import bg4 from "./assets/background4.jpg"
import bg5 from "./assets/background5.jpg"
import bg6 from "./assets/background6.jpg"
import bg7 from "./assets/background7.jpg"
import bg8 from "./assets/background8.jpg"
import bg9 from "./assets/background9.jpg"
import bg10 from "./assets/background10.jpg"
import bg11 from "./assets/background11.jpg"
import bg12 from "./assets/background12.jpg"
import bg13 from "./assets/background13.jpg"
import {Routes,Route} from 'react-router-dom'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import Taskbar from './components/Taskbar';
import Twitter from './Routes/twitter/Twitter';
// import Add from './Routes/Add';
// import Discord from './Routes/discord/Discord';
// import Github from './Routes/github/Github';
import Instagram from './Routes/insta/Instagram';
import TwitterProvider from './Context';


const bgArray = [bg1, bg2, bg3,bg4,bg5,bg6,bg7,bg8,bg8,bg9,bg10,bg11,bg12,bg13];
function App() {
  const [clicked, setClicked] = useState(false);
  const [bg, setBg] = useState(bg1);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { width, height } = windowSize;

  return (
    <div className='container'>
      <button className='btn' onClick={() => setClicked(!clicked)}>{!clicked ? <BsThreeDotsVertical /> : <CgClose />}</button>
      {clicked && (
        <div className='bg-box'>{bgArray.map((loc) => {
          return <img src={loc} key={loc} onClick={() => setBg(loc)} />
        })}</div>
      )}
      <img src={bg} alt="" className='main-bg' style={{ width: width, height: height }} />
      <Taskbar />
      <TwitterProvider>
      <Routes>
        <Route path='/twitter' element= {<Twitter/>}/>
        <Route path='/insta' element= {<Instagram/>}/>
        <Route path='/github' element= {<Instagram/>}/>
        <Route path='/discord' element= {<Instagram/>}/>
        <Route path='/add' element= {<Instagram/>}/>
      </Routes>
      </TwitterProvider>
    </div>
  )
}

export default App
