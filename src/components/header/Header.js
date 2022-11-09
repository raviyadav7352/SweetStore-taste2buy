import React, { Fragment } from "react"
import classes from './Header.module.css'
import HeaderCartBtn from './HeaderCardBtn'

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1 >Taste2Buy</h1>
                <HeaderCartBtn onShowCart={props.onShowCart}></HeaderCartBtn>
            </header>
            <div className={classes["main-image"]}>
                <img src="images/backimage2.jpg" alt="deliseos food" />
            </div>
        </Fragment>
    )
}
export default Header;