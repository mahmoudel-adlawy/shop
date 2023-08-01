import React from 'react'
import bg from '../../images/slider-image-1.jpeg'
import sty from './Header.module.css'

export default function Header() {
  return (
    <>
      <div className='container'>
        <header >

          <div className={sty.ll}>
            <img className={sty.im} src={bg} alt="" />
          </div>

        </header>
      </div>
    </>
  )
}
