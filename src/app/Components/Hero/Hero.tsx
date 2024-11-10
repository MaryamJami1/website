import React from 'react'
import style from './hero.module.css'
import Image from 'next/image'

export default function Hero() {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.textContainer}>
                    <h3 className={style.heading}>
                        Introducing your product quickly and effectively
                    </h3>
                    <p className={style.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quas iste deleniti sapiente nisi placeat sint sed ullam. Adipisci maiores debitis illum harum, vitae eligendi soluta at atque aperiam molestiae.
                    </p>
                    <div className={style.buttonContainer}>
                        <button className={style.btnPrimary}>Purchase UI Kit</button>
                        <button className={style.btnSecondary}>Learn More</button>
                    </div>
                </div>
                <div className={style.imageContainer}>
                    <Image src={'/Group.png'} alt={'designer'} className={style.image} width={400} height={500} />
                </div>
            </div>
        </header>

    )
}
