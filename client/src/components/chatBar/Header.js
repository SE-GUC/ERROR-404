import React from 'react';
function Header() {
  return (
    <header style={headerStyle}>
      <h1>LET'S DEBATE LIVE !</h1>
    </header>
  )
}

const headerStyle = {
  background: '#8F1814',
  color: '#E2A325',
  textAlign: 'center',
  padding: '10px'
}


export default Header;