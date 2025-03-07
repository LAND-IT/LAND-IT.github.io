import styles from "./presentation.module.css"
import {useTranslations, useMessages} from "next-intl";
import React from "react";

export const Presentation = () => {

    const t = useTranslations();
    const messages = useMessages();
    const items = messages?.presentation as unknown as string[];

    return (
        <div className={styles.mainPresentation}>
            <span className={styles.text}>
               {items && items.map((item: string, index: number) => {
                    return <React.Fragment key={index}>{item}<br/></React.Fragment>
                })}
            </span>
            <img className={styles.image} src={"images/fire.jpg"} alt={"LAND IT"}/>
        </div>
    )
}