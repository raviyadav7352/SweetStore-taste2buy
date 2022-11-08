import classes from './Modal.module.css';
import ReactDOM from "react-dom";
import { Fragment } from 'react';


    const BackDrop =(props )=>{
        return(
            <div className={classes.backdrop} onClick={props.onHideCart}></div>
        )
    }
    const ModalOverlay = (props) =>{
        return (
            <div className={classes.modal}>
                <div className={classes.content}>{props.children}</div>
            </div>
        )
    }
    const locationModal = document.getElementById("overlay");
    const Modal =(props) =>{
        console.log(props)
        return(
            <Fragment>
                <BackDrop onHideCart={props.onHideCart}/>
                <ModalOverlay>{props.children}</ModalOverlay>
            </Fragment>
        )
        
    }
export default Modal;