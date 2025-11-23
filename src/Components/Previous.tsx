import React from 'react'

const Previous = ({All}:any) => {
  return (
    <div className='w-4xl bg-white h-40'>
        <h1>{All.FullName || (<div><p>Your Name</p></div>)}</h1>
     {/* <h1>{All.PhoneNumber && (<div className='flex'>
        <p>x</p>
        <p>{All.PhoneNumber}</p>
     </div>)} </h1> */}
    </div>
  )
}

export default Previous