import { GiBroadsword } from "react-icons/gi";
import { GiMaze } from "react-icons/gi";
import { PiMedalFill } from "react-icons/pi";
import { FaGlasses } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { useState, useEffect } from "react";

import React from 'react';

function Left() {

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
    <div style={{ width: '25%' }}>
  <h1 style={{color:'yellow', marginLeft:' 25px'}}>Flame</h1>
  {isDesktop ? (<div style={{ display: 'grid',fontSize: '20px', gridTemplateColumns: 'auto 1fr', alignItems: 'center', gap: '25px',marginTop: '30px',marginLeft: '30px' }}>
    <div>
      <IoMdHome />
    </div>
    <div>
      <span>Dashboard</span>
    </div>
    <div>
      <GiBroadsword />
    </div>
    <div>
      <span>Play</span>
    </div>
    <div>
      <GiMaze />
    </div>
    <div>
      <span>Tournament</span>
    </div>
    <div>
      <PiMedalFill />
    </div>
    <div>
      <span>Upcoming Contests</span>
    </div>
    <div>
      <FaGlasses />
    </div>
    <div>
      <span>Watch</span>
    </div>
    <div>
      <MdLeaderboard  />
    </div>
    <div>
      <span>Leaderboard</span>
    </div>
    <div style={{marginTop: '60px'}}>
    <RiLogoutBoxRLine />
    </div>
    <div style={{marginTop: '60px'}}>
      <span>Logout</span>
    </div>
  </div>):(<IoMdMenu onClick={toggleDiv} style={{fontSize:'50px', cursor: 'pointer'}}/>)}

  {showDiv && (
        <div style={{ backgroundColor: 'lightgray', padding: '10px', marginTop: '10px' }}>
          <div>
<IoMdHome />
</div>
<div>
<span>Dashboard</span>
</div>
<div>
<GiBroadsword />
</div>
<div>
<span>Play</span>
</div>
<div>
<GiMaze />
</div>
<div>
<span>Tournament</span>
</div>
<div>
<PiMedalFill />
</div>
<div>
<span>Upcoming Contests</span>
</div>
<div>
<FaGlasses />
</div>
<div>
<span>Watch</span>
</div>
<div>
<MdLeaderboard  />
</div>
<div>
<span>Leaderboard</span>
</div>
<div style={{marginTop: '60px'}}>
<RiLogoutBoxRLine />
</div>
<div style={{marginTop: '60px'}}>
<span>Logout</span>
</div> 
        </div>
      )}
  
</div>

  );
}

export default Left;







<div className="dorpdown" style={{position: 'absolute',left: '2rem', top: '60px', width: '300px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(15px)', overflow:'hidden'}}>
  {/* <div>
<IoMdHome />
</div>
<div>
<span>Dashboard</span>
</div>
<div>
<GiBroadsword />
</div>
<div>
<span>Play</span>
</div>
<div>
<GiMaze />
</div>
<div>
<span>Tournament</span>
</div>
<div>
<PiMedalFill />
</div>
<div>
<span>Upcoming Contests</span>
</div>
<div>
<FaGlasses />
</div>
<div>
<span>Watch</span>
</div>
<div>
<MdLeaderboard  />
</div>
<div>
<span>Leaderboard</span>
</div>
<div style={{marginTop: '60px'}}>
<RiLogoutBoxRLine />
</div>
<div style={{marginTop: '60px'}}>
<span>Logout</span>
</div> */}
</div>




