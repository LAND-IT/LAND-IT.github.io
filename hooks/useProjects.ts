
import {Status} from "../Definitions";
import {useTranslations} from "next-intl";

export default function useProjects() {

    const t = useTranslations();

    return [
        {
            status: Status.CONCLUDED,
            date: t(`projects.list.${0}.date`),
            author: "Márcia Matias",
            icon: "pepicons-pop:checkmark-circle-filled",
            color: 'var(--primary-color)',
            title: t(`projects.list.${0}.title`),
            link: "https://run.unl.pt/handle/10362/163563",
            description: t(`projects.list.${0}.description`)
        },
        {
            status: Status.CONCLUDED,
            date: t(`projects.list.${1}.date`),
            icon: "pepicons-pop:checkmark-circle-filled",
            color: 'var(--primary-color)',
            title: t(`projects.list.${1}.title`),
            author: "Lucas Almeida, Maria Catarina Pereira, Mariana Godinho, Margarida Pinto, Nuno Baptista",
            link: "https://run.unl.pt/handle/10362/181590",
            description: t(`projects.list.${1}.description`)
        },
        {
            status: Status.CONCLUDED,
            date: t(`projects.list.${2}.date`),
            icon: 'pepicons-pop:checkmark-circle-filled',
            color: 'var(--primary-color)',
            title: t(`projects.list.${2}.title`),
            author: "Márcia B. Matias, Cristina D. Henriques, Carlos Viegas Damásio, Fernando Birra, João Moura Pires",
            description: t(`projects.list.${2}.description`),
            link: 'https://agile-giss.copernicus.org/articles/6/39/2025/'
        },
        {
            status: Status.CONCLUDED,
            date: t(`projects.list.${3}.date`),
            icon: 'pepicons-pop:checkmark-circle-filled',
            color: 'var(--primary-color)',
            title: t(`projects.list.${3}.title`),
            author: "Francisco Freire",
            description: t(`projects.list.${3}.description`),
            link: 'https://drive.google.com/open?id=1hn60KutOxTpWiLOk1xnhBUHa0BQUTXBC&usp=drive_fs'
        },
        {
            status: Status.ONGOING,
            date: t(`projects.list.${4}.date`),
            icon: 'pepicons-pop:arrows-spin-circle-filled',
            color: '#607D8B',
            title: t(`projects.list.${4}.title`),
            author: "Pedro Grilo",
            description: t(`projects.list.${4}.description`)
        },
        {
            status: Status.ONGOING,
            date: t(`projects.list.${5}.date`),
            icon: 'pepicons-pop:arrows-spin-circle-filled',
            color: '#607D8B',
            title: t(`projects.list.${5}.title`),
            author: "Carolina Salazar",
            description: t(`projects.list.${5}.description`)
        },
        {
            status: Status.ONGOING,
            date: t(`projects.list.${6}.date`),
            icon: 'pepicons-pop:arrows-spin-circle-filled',
            color: '#607D8B',
            title: t(`projects.list.${6}.title`),
            author: "Diogo Moreira",
            description: t(`projects.list.${6}.description`)
        }
    ];
}