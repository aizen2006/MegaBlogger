import React from 'react'

function Btn({
    children,
    type = 'button',
    textColor = 'text-white',
    bgColor = '',
    onClick = () => {},
    className = '',
    ...props

}) {
  return (
    <button 
      className={`btn px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 ${className} ${textColor}`}
      style={{ 
        backgroundColor: bgColor || '#FA9A91',
        boxShadow: '0 4px 6px -1px rgba(250, 154, 145, 0.3)'
      }}
      type={type} 
      onClick={onClick} 
      {...props}
    >
        {children}
    </button>
  )
}

export default Btn