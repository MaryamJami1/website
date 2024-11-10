import React from 'react'
import style from './connect.module.css'
import Image from 'next/image'

export default function Connect() {
    return (
        <div className={style.container}>
            <div className={style.imageSection}>
                <Image src={'/connect.png'} alt={'girl'} className={style.image} width={400} height={500} />
            </div>

            <div className={style.textSection}>
                <div className={style.textContainer}>
                    <h3 className={style.heading}>
                       Connect with us
                    </h3>
                    <p className={style.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quas iste deleniti sapiente nisi placeat sint sed ullam. Adipisci maiores debitis illum harum, vitae eligendi soluta at atque aperiam molestiae.
                        <br /> <br />

                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, perspiciatis voluptatum, commodi ratione sequi maiores possimus et ut repudiandae pariatur voluptates distinctio maxime veritatis, odio dolorem eligendi sit explicabo porro.
                    </p>
                    <div>
                        <button className={style.btnPrimary}>Contact us</button>
                    </div>

                </div>
            </div>

        </div>
    )
}
