import React from 'react'

const Button = ({btnName,className}) => {
  return (
    <button className={`font-pop font-semibold text-2xl ${className}`}>{btnName}</button>
  )
}

export default Button
