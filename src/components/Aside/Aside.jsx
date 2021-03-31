import React from 'react';
import Navbar from "./Navbar";
import classes from './Aside.module.css';

const Aside = () => {
    return <aside className={classes.aside}>
        <Navbar />
    </aside>

}

export default Aside