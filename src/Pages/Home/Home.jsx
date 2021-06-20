import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import Sidebar from "../../Components/Sidebar/Sidebar"
import classes from './Home.module.css'

function Home() {
    return (
        <div className={classes.Home}>
            <Sidebar/>
            <HeroSection/>
        </div>
    )
}

export default Home
