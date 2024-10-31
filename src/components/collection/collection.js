import React from 'react'
import './collection.css'
export default function Collection() {
  return (<>
    <div className='collection-heading'>
            <h1>OUR COLLECTIONS</h1>
        </div>
    <div className='collection-section'>
        
      <div className='mens-collection'>
        <h3 className='heading'>MEN</h3>
        <button className='shopnow-button'>Shop Now</button>
      </div>
      <div className='women-collection'>
        <h3 className='heading'>WOMEN</h3>
        <button className='shopnow-button'>Shop Now</button>
      </div>
      <div className='kids-collection'>
        <h3 className='heading'>KIDS</h3>
        <button className='shopnow-button'>Shop Now</button>
      </div>
    </div>
    </>
  )
}
