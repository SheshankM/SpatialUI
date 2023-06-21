
import { useEffect, useState } from 'react';
import './App.css'
import bg2 from "./assets/background1.jpg"
import bg1 from "./assets/background2.jpg"
import bg3 from "./assets/background3.jpg"
import {Routes,Route} from 'react-router-dom'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import Taskbar from './components/Taskbar';
import Twitter from './Routes/twitter/Twitter';
// import Add from './Routes/Add';
// import Discord from './Routes/discord/Discord';
// import Github from './Routes/github/Github';
import Instagram from './Routes/insta/Instagram';


const bgArray = [bg1, bg2, bg3];
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
      <Routes>
        <Route path='/twitter' element= {<Twitter/>}/>
        <Route path='/insta' element= {<Instagram/>}/>
        <Route path='/github' element= {<Instagram/>}/>
        <Route path='/discord' element= {<Instagram/>}/>
        <Route path='/add' element= {<Instagram/>}/>
      </Routes>
    </div>
  )
}

export default App
