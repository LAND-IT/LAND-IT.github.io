import Translate from "@docusaurus/Translate";
import styles from "./presentation.module.css"
import React from "react";

export const Presentation = () => {

    return (
        <div className={styles.mainPresentation}>
            <span className={styles.text}>
               <Translate id="presentation.1" />
               <br />
               <Translate id="presentation.2" />
            </span>
            <img className={styles.image} src={"images/fire.jpg"} alt={"LAND IT"}/>
        </div>
    )
}