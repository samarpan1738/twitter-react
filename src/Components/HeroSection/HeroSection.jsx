import React from 'react'
import Feed from '../Feed/Feed'
import classes from "./HeroSection.module.css"
import Widgets from "../Widgets/Widgets"
import useWindowSize from '../../hooks/useWindowSize'

function HeroSection() {
    const windowSize=useWindowSize();
    let mobile=windowSize.width<1000;
    return (
        <main className={classes.HeroSection}>   
            <Feed/>
            {!mobile && <Widgets/>}
        </main>
    )
}

export default HeroSection
