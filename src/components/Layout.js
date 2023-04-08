import React from 'react'

const Layout = ({ children, className = '' }) => {
  return (
    <div className={` w-full h-full inline-block z-0 bg-light p-28 dark:bg-dark xl:p-24 lg:p-16 md:p-6 ${className}`}>
      {children}
    </div>
  )
}
 
export default Layout