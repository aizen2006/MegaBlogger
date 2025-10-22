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
                className='inline-block mb-2 pl-1 font-medium text-gray-700'
                htmlFor={id}>
                    {label}
                </label>
            )}
            <input
                ref={ref}
                type={type || 'text'}
                className={`${className} px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input