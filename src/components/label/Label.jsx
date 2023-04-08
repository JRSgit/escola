import React from 'react'

function Label({ htmlFor, text, status }) {
  let style = {}
  if (status === 'error') {
    style = {
      color: 'red',
      fontSize: 18,
      marginTop: -10,
      textAlign: 'center'

    }
  }
  return (
    <label style={style} htmlFor={htmlFor}>{text}</label>
  )
}

export default Label