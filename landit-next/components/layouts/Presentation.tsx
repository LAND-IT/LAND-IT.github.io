"use client"
import styles from "./presentation.module.css"
import {useTranslation} from "react-i18next";
import React from "react";

export const Presentation = () => {

    const {t} = useTranslation();

    const items = t(`presentation`, { returnObjects: true }) as string[];

    return (
        <div className={styles.mainPresentation}>
            <span className={styles.text}>
                {items.map((item, index) => {
                    return <React.Fragment key={index}>{item}<br/></React.Fragment>
                })}
            </span>
            <img className={styles.image} src={"images/fire.jpg"} alt={"LAND IT"}/>
        </div>
    )
}