import './footer.css'
import {useTranslation} from "react-i18next";
import {Icon} from "@iconify/react";

export const Footer = () => {

    const {t} = useTranslation();

    return (
        <div className={"footer"}>
            <div className={"footer-sec"}>
                <h4>{t("footer.contacts")}</h4>
                <Icon icon={"iconamoon:email"} height={"30px"} onClick={() => window.open('mailto:land.it.web.app@gmail.com', '_blank')}/>
            </div>
            <div className={"footer-sec"}>
                <h4>{t("footer.links")}</h4>
                <a target="_blank"
                   href={"https://unlpt-my.sharepoint.com/:u:/g/personal/jmp_fct_unl_pt/EfkJ9O0u7zRPvt7qNX0pTVgBCDuobVnMHszYTmiBebe14Q?e=wWrw6U"}> {t("footer.podcast")}</a>
            </div>
            <div className={"footer-sec"}>
                <h4>{t("footer.entities")}</h4>
                <div className={"logos-row"}>
                    <img className={"logo"} src={"public/aflomacao.png"}/>
                    <img className={"logo"} src={"public/azr.png"}/>
                </div>
                <div className={"logos-row"}>
                    <img className={"logo"} src={"public/fct.png"}/>
                </div>
            </div>
        </div>
    )
}