"use client"
import styles from './footer.module.css'
import {Icon} from "@iconify/react";
import {useTranslations} from 'next-intl';

export const Footer = () => {
    const t = useTranslations();
    return (
        <div className={styles.footer}>
            <div className={styles.footerSec}>
                <h4>{t('footer.contacts')}</h4>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "60%" }}>
                    <a href="mailto:land.it.web.app@gmail.com" target="_blank">
                        <Icon className={styles.contact} icon={"iconamoon:email"} height={"30px"}/>
                    </a>
                    <span>{t('footer.design')} <a href="https://www.linkedin.com/in/mariaines-gomes" target="_blank">
                        <span>Maria Inês Gomes</span>
                    </a></span>
                </div>
            </div>
            <div style={{gap: "10px"}} className={styles.footerSec}>
                <h4>{t('footer.links')}</h4>
                <a target="_blank"
                   href={"https://landit.pt"}>
                    {t('footer.LAND-IT')}</a>

                <a target="_blank"
                   href={"https://drive.google.com/file/d/1VwBF_oKHChhNPTup_Fa1dikuQQEUek_x/view?usp=sharing"}>
                    {t('footer.podcast')}</a>

                <a target="_blank"
                   href={"https://drive.google.com/drive/folders/1A9KU2nZ6xXibhZnzlcDErIp21YEacsZF?usp=sharing"}>
                    {t('footer.oigp')}</a>

                <a target="_blank"
                   href={"https://www.dgterritorio.gov.pt/paisagem/ptp/oigp/consulta-publica-OIGP"}>
                    {t('footer.consultation')}</a>

            </div>
            <div className={styles.footerSec}>
                <h4>{t('footer.entities')}</h4>
                <div className={styles.logosRow}>
                    <img className={styles.logo} src={"/images/aflomacao.png"} alt="Aflomação logo"/>
                    <img className={styles.logo} src={"/images/azr.png"} alt="AZR logo"/>
                </div>
                <div className={styles.logosRow}>
                    <img className={styles.logo} src={"/images/fct.png"} alt="FCT logo"/>
                    <img className={styles.logo} src={"/images/macao.png"} alt="Mação logo"/>
                </div>
            </div>
        </div>
    )
}