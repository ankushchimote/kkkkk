import { GrStatusUnknown } from "react-icons/gr";
import { RxAvatar } from "react-icons/rx";
import { useState, useEffect } from "react";
import React from 'react';

function Right() {

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 800);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1400);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const [showDiv, setShowDiv] = useState(false);

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };

  return (
    <>
    {isDesktop ? ( <div style={{width: '25%', marginTop: '15vh' }}>
    <p>profile <b>statistics</b></p>
    <p>status <b style={{color: 'green'}}>online</b></p>
    <p>146 Countries, 2759 Cities</p>
    <h3>Classical</h3>
    <p>Top 65.9%</p>
    <div style={{width: '80%', backgroundColor: '#ddd'}}>
    <div style={{ width: '10%', height: '5px', backgroundColor: '#04AA6D', textAlign: 'center', lineHeight: '30px', color: 'white' }}></div>
    </div>
    <h3>Rapid</h3>
    <p>Top 65.9%</p>
    <div style={{width: '80%', backgroundColor: '#ddd'}}>
    <div style={{ width: '65%', height: '5px', backgroundColor: '#280cc7', textAlign: 'center', lineHeight: '30px', color: 'white' }}></div>
    </div>
    <h3>Blitz</h3>
    <p>Top 65.9%</p>
    <div style={{width: '80%', backgroundColor: '#ddd'}}>
    <div style={{ width: '45%', height: '5px', backgroundColor: '#951203', textAlign: 'center', lineHeight: '30px', color: 'white' }}></div>
    </div>

   <div style={{marginTop:'8vh'}} >
   <h2 style={{marginLeft: '130px'}}>LeaderBoard</h2>
    <div style={{ marginLeft: '60px',width: '270px', margin: '10px auto', position: 'relative', borderRadius: '30px', background: '#4a10a7' }}>
    <div style={{  top: '0', position: 'absolute', width: '130px', height: '100%', background: '#e67e22', borderRadius: '30px', transition: '0.5s' }}></div>
    <button type="button" style={{ padding: '10px 40px', cursor: 'pointer', background: 'transparent', border: '0', outline: 'none', position: 'relative', textAlign: 'center' }} >Global</button>
    <button type="button" style={{ padding: '10px 40px', cursor: 'pointer', background: 'transparent', border: '0', outline: 'none', position: 'relative', textAlign: 'center' }}>friends Only</button>
    </div>
   </div>

    <div style={{display: "flex", flexDirection:'column', justifyContent:'space-evenly'}}>
    <div style={{ width: '29vh', display: 'flex', margin: '15px', marginLeft: '60px', border: '1px solid white', padding: '10px', borderRadius: '20px', backgroundColor: 'gray', gap: '9px' }}>
   <RxAvatar /> <b>Name</b>
   </div>
   <div style={{ width: '29vh', display: 'flex', margin: '15px', marginLeft: '60px', border: '1px solid white', padding: '10px', borderRadius: '20px', backgroundColor: 'gray', gap: '9px' }}>
   <RxAvatar /> <b>Name</b>
   </div>
   <div style={{ width: '29vh', display: 'flex', margin: '15px', marginLeft: '60px', border: '1px solid white', padding: '10px', borderRadius: '20px', backgroundColor: 'gray', gap: '9px' }}>
   <RxAvatar /> <b>Name</b>
   </div>
    </div>
  </div>): (<GrStatusUnknown onClick={toggleDiv} style={{ textAlign: 'center', fontSize: '30px'}} />)}

  {showDiv && (
        <div style={{ backgroundColor: 'lightgray', padding: '10px', marginTop: '10px' }}>
          This is the div content.
        </div>
      )}
    
   </>
  );
}

export default Right;
