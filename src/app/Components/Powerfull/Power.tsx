import React from 'react'
import style from './power.module.css'
import Image from 'next/image'
import { TiPointOfInterestOutline } from "react-icons/ti";


export default function Power() {
    return (
        <div className={style.container}>
        <div className={style.textSection}>
          <div className={style.textContainer}>
            <h3 className={style.heading}>
              Light, Fast and Powerful
            </h3>
            <p className={style.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quas iste deleniti sapiente nisi placeat sint sed ullam. Adipisci maiores debitis illum harum, vitae eligendi soluta at atque aperiam molestiae.
              <br /> <br />

              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, perspiciatis voluptatum, commodi ratione sequi maiores possimus et ut repudiandae pariatur voluptates distinctio maxime veritatis, odio dolorem eligendi sit explicabo porro.
            </p>
            <div className={style.iconSection}>
              <div className={style.iconContainer}>
              <TiPointOfInterestOutline className={style.icon}/>
                <h4 className={style.iconTitle}>Title goes here</h4>
                <p className={style.iconDescription}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, maiores!</p>
              </div>
              <div className={style.iconContainer}>
              <TiPointOfInterestOutline className={style.icon}/>
                <h4 className={style.iconTitle}>Title goes here</h4>
                <p className={style.iconDescription}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, maiores!</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.imageSection}>
          <Image src={'/girl.jpg'} alt={'girl'} className={style.image} width={400} height={500} />
        </div>
      </div>
      
    )
}
