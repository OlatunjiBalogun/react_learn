import React from 'react'

const Button = (btn) => {
  return (
    <button onClick={btn.onClick} className={`${btn.btnStyle} h-10 w-fit px-4 flex items-center`}>{btn.btnText}</button>
  )
}

export default Button