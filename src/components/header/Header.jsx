import React from "react"

const Header = ({name}) => {
  return (
    <div id="header" className='panel'>
      <h1>{name}</h1>
    </div>
  )
}

export default Header