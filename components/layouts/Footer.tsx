"use client"
import styles from './footer.module.css'
import { Icon } from "@iconify/react";
import { useTranslations } from 'next-intl';
export const Footer = () => {
    const t = useTranslations();
    return (
        <div className={styles.footer}>
            <div className={styles.footerSec}>
                <h4>{t('footer.contacts')}</h4>
                <a href="mailto:land.it.web.app@gmail.com" target="_blank">
                    <Icon className={styles.contact} icon={"iconamoon:email"} height={"30px"}/>
                </a>
            </div>
            <div style={{gap: "10px"}} className={styles.footerSec}>
                <h4>{t('footer.links')}</h4>
                <a target="_blank" 
                   href={"https://landit.di.fct.unl.pt"}>
                    {t('footer.LAND-IT')}</a>

                <a target="_blank" 
                   href={"https://unlpt-my.sharepoint.com/:u:/g/personal/jmp_fct_unl_pt/EfkJ9O0u7zRPvt7qNX0pTVgBCDuobVnMHszYTmiBebe14Q?e=wWrw6U"}>
                    {t('footer.podcast')}</a>

                <a target="_blank" 
                   href={"https://unlpt-my.sharepoint.com/:f:/g/personal/jmp_fct_unl_pt/Es3k_9jC_3dKsAOtJTs8ISgB0BzOVPmMNncgLXNrhS_CNg?e=N5O614"}>
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