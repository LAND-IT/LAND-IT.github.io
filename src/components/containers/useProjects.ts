import {Status} from "../../Definitions.ts";
import {useTranslation} from "react-i18next";

export default function useProjects() {

    const {t} = useTranslation();

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
            description: t(`projects.list.${1}.description`)
        },
        {
            status: Status.ONGOING,
            date: t(`projects.list.${2}.date`),
            icon: 'pepicons-pop:arrows-spin-circle-filled',
            color: '#607D8B',
            title: t(`projects.list.${2}.title`),
            author: "Francisco Freire",
            description: t(`projects.list.${2}.description`)
        },
        {
            status: Status.ONGOING,
            date: t(`projects.list.${3}.date`),
            icon: 'pepicons-pop:arrows-spin-circle-filled',
            color: '#607D8B',
            title: t(`projects.list.${3}.title`),
            author: "Pedro Grilo",
            description: t(`projects.list.${3}.description`)
        },
        {
            status: Status.ONGOING,
            date: t(`projects.list.${4}.date`),
            icon: 'pepicons-pop:arrows-spin-circle-filled',
            color: '#607D8B',
            title: t(`projects.list.${4}.title`),
            author: "Carolina Salazar",
            description: t(`projects.list.${4}.description`)
        },
        {
            status: Status.ONGOING,
            date: t(`projects.list.${5}.date`),
            icon: 'pepicons-pop:arrows-spin-circle-filled',
            color: '#607D8B',
            title: t(`projects.list.${5}.title`),
            author: "Diogo Moreira",
            description: t(`projects.list.${5}.description`)
        }
    ];
}