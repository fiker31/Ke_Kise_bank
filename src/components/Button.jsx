import React from 'react'

const Button = ({styles}) => {
  return (
   <button type="button" className={`py-4 px-6 bg-blue-grdaient font-poppins font-medium text-[18px] text-primary outlin-none ${styles} `} >
     Get Started
   </button>
  )
}

export default Button