import React from 'react'
import Feed from '../Feed/Feed'
import classes from "./HeroSection.module.css"
import Widgets from "../Widgets/Widgets"

function HeroSection() {
    return (
        <main className={classes.HeroSection}>   
            <Feed/>
            <Widgets/>
        </main>
    )
}

export default HeroSection
