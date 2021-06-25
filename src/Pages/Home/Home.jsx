import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Sidebar from "../../components/Sidebar/Sidebar"
import useWindowSize from '../../hooks/useWindowSize'
import classes from './Home.module.css'

function Home() {
    const windowSize=useWindowSize();
    let mobile=windowSize.width<500;
    return (
        <div className={classes.Home}>
            {!mobile && <Sidebar/>}
            <HeroSection/>
        </div>
    )
}

export default Home
