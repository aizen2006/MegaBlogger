import React ,{useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type="text",
    className = '',
    ...props
}, ref) {
    const id=useId();
    return(
        <div className={`flex flex-col mb-4 ${className}`}>
            {label && (
                <label 
                className='inline-block mb-2 pl-1 font-semibold'
                style={{ color: '#4A4A4A' }}
                htmlFor={id}>
                    {label}
                </label>
            )}
            <input
                ref={ref}
                type={type || 'text'}
                className={`px-4 py-3 rounded-lg focus:outline-none transition-all duration-200`}
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
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input