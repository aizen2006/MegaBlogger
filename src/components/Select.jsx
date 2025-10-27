import React ,{useId} from 'react'

function Select({
  options,
  label,
  className = '',
  ...props
}, ref) {
  const id=useId();
  return (
    <div className='w-full mb-4'>
      {label && (
        <label 
          htmlFor={id} 
          className='inline-block mb-2 pl-1 font-semibold' 
          style={{ color: '#4A4A4A' }}
        >
          {label}
        </label>
      )}
      <select 
        {...props} 
        id={id} 
        ref={ref} 
        className={`w-full px-4 py-3 rounded-lg outline-none transition-all duration-200 ${className}`}
        style={{
          backgroundColor: '#FDF0DA',
          border: '2px solid #FADDA3',
          color: '#4A4A4A'
        }}
        onFocus={(e) => {
          e.target.style.borderColor = '#FA9A91';
          e.target.style.boxShadow = '0 0 0 3px rgba(250, 154, 145, 0.1)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = '#FADDA3';
          e.target.style.boxShadow = 'none';
        }}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default React.forwardRef(Select)