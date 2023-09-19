import React, {useEffect, useState} from 'react';
import cl from "./ArrowUp.module.css"
import classnames from "classnames";


const ArrowUp = ({inView}) => {
    const [arrowUp, setArrowUp] = useState(false)

    useEffect(() => {
        inView ? setArrowUp(false) : setArrowUp(true)
    }, [inView])

    return (
        <a href={"#start"} className={arrowUp ? cl.arrowUp : classnames(cl.arrowUp, cl.hideArrow)}>
            <i className="fa-solid fa-arrow-up"></i>
        </a>
    );
};

export default ArrowUp;