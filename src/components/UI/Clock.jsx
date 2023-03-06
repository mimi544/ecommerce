import React from 'react'

const Clock = () => {
  return (
    <div className='clock_wrapper d-flex align-items-center gap-5'>
      <div className='clock_data d-flex align-items-center gap-5'>
        <div>
            <h1 className='text-white fs-1'>10</h1>
            <h5 className='text-white fs-5'>Days</h5>
        </div>
        <span className='text-white fs-1'>:</span>
      </div>
    </div>
  )
}

export default Clock
