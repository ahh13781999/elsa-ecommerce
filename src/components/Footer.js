import React from 'react'


const Footer = () => {
const d = new Date()
const year = d.getFullYear()
    return (
    <div className='bg-blackish text-gray-500 text-center py-4 pb-16 md:pb-'>
        Copyright &copy; Sick <br/> All Rights Reserved {year}
    </div>
  )
}

export default Footer