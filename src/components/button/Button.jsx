import React from 'react'

const Button = React.forwardRef(({ children, name, type, onclick }, ref) => {
  return (
    <button name={name} type={type} onClick={onclick} ref={ref}>{children}</button>
  )
})

export default Button