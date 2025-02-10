import "./presentation.css"
import {useTranslation} from "react-i18next";

export const Presentation = () => {

    const {t} = useTranslation();

    const items = t(`presentation`, { returnObjects: true }) as string[];

    return (
        <div className={"main-presentation"}>
            <span className={"text"}>
                {items.map((item) => {
                    return <>{item}<br/></>})}
            </span>
            <img className={"image"} src={"public/images/fire.jpg"} alt={"LAND IT"}/>
        </div>
    )
}