import React from 'react'

const Menu = ({menuName,classname}) => {
  return (
    <ul>
        <li className={`${classname}`}>{menuName}</li>
    </ul>
  )
}

export default Menu
