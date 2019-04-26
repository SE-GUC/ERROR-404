import React from 'react';
function Header() {
  return (
    <header style={headerStyle}>
      <h1>LET'S DEBATE LIVE !</h1>
      Chatrooms to allow the users to share their opinions respectively...
    </header>
  )
}

const headerStyle = {
 
  color: '#E2A325',
  textAlign: 'center',
  padding: '10px',
  postion:'fixed',
  left: '0',
  width:' 100%'
 
}


export default Header;