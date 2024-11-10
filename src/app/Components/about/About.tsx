import React from 'react'
import style from './about.module.css'
import Image from 'next/image'

export default function About() {
    return (
        <div className={style.container}>


            <div className={style.textSection}>
                <div className={style.textContainer}>
                    <h3 className={style.heading}>
                        About us
                    </h3>
                    <p className={style.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quas iste deleniti sapiente nisi placeat sint sed ullam. Adipisci maiores debitis illum harum, vitae eligendi soluta at atque aperiam molestiae.
                        <br /> <br />

                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, perspiciatis voluptatum, commodi ratione sequi maiores possimus et ut repudiandae pariatur voluptates distinctio maxime veritatis, odio dolorem eligendi sit explicabo porro.
                    </p>
                 

                </div>
            </div>
            <div className={style.imageSection}>
                <Image src={'/about.png'} alt={'girl'} className={style.image} width={400} height={500} />
            </div>

        </div>
    )
}
