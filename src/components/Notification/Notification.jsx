import React from 'react';
import classNames from "classnames";
import {useTranslation} from "i18nano";
import cl from "./Notification.module.css"


const Notification = ({notification, setNotification}) => {
    const text = useTranslation()

    return (
        <div onAnimationEnd={() => setNotification(false)}
             className={notification ? classNames(cl.notification, cl.slide) : cl.notification}>
            <p>{text('product.notification')} ✅</p>
        </div>
    );
};

export default Notification;