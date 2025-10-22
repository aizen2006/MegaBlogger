import React from 'react'

function Btn({
    children,
    type = 'button',
    textColor = 'text-white',
    bgColor = 'bg-blue-600',
    onClick = () => {},
    className = '',
    ...props

}) {
  return (
    <button className={`btn px-4 py-2 rounded-lg ${className} ${textColor} ${bgColor}`} type={type} onClick={onClick} {...props}>
        {children}
    </button>
  )
}

export default Btn