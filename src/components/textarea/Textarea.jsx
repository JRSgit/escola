import React from 'react'

const Textarea = React.forwardRef(({ name, placeholder, ...rest }, ref) => {

  return (
    <textarea
      {...rest}
      ref={ref}
      name={name}
      placeholder={placeholder}
      rows={7} style={{ padding: 10, marginBottom: 10 }}
    ></textarea>
  )
})

export default Textarea