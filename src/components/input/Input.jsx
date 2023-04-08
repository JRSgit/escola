import React from 'react'

const Input = React.forwardRef(({ type, name, placeholder, ...rest }, ref) => {
  return (
    <input type={type} name={name} placeholder={placeholder} {...rest} ref={ref} />
  )
})

export default Input