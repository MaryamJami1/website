import React from 'react'
import style from './price.module.css'

export default function Price() {
  return (
    <div className={style.main}>
      <div className={style.text} >
        <h3 className={style.h3}>A Price Suit Everyone</h3>
        <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ab natus assumenda vero voluptatem, nesciunt numquam fuga aliquid nobis saepe laboriosam alias at perferendis cumque! Reiciendis porro nihil tempore unde?</p>
        <h3 className={style.h3 }>$40</h3>
        <p className={style.p2}>UI Design Kit</p>
      </div>
      <div className={style.main2}>
        <p className={style.p2}>See, one price simple</p>
        <button  className={style.btnPrimary}>Purchase Now</button>
      </div>
    </div>
  )
}
