import { translate } from "@docusaurus/Translate";
import {Status} from "../Definitions";

export default function useProjects() {

    return [
        {
            status: Status.CONCLUDED,
            date: translate({id: "projects.1.date"}),
            author: "Márcia Matias",
            icon: "pepicons-pop:checkmark-circle-filled",
            color: 'var(--primary-color)',
            title: translate({id: "projects.1.title"}),
            link: "https://run.unl.pt/handle/10362/163563",
            description: translate({id: "projects.1.description"}),
        },
        {
            status: Status.CONCLUDED,
            date: translate({id: "projects.2.date"}),
            icon: "pepicons-pop:checkmark-circle-filled",
            color: 'var(--primary-color)',
            title: translate({id: "projects.2.title"}),
            author: "Lucas Almeida, Maria Catarina Pereira, Mariana Godinho, Margarida Pinto, Nuno Baptista",
            link: "https://run.unl.pt/handle/10362/181590",
            description: translate({id: "projects.2.description"}),
        },
        {
            status: Status.CONCLUDED,
            date: translate({id: "projects.3.date"}),
            icon: 'pepicons-pop:checkmark-circle-filled',
            color: 'var(--primary-color)',
            title: translate({id: "projects.3.title"}),
            author: "Márcia B. Matias, Cristina D. Henriques, Carlos Viegas Damásio, Fernando Birra, João Moura Pires",
            description: translate({id: "projects.3.description"}),
            link: 'https://agile-giss.copernicus.org/articles/6/39/2025/'
        },
        {
            status: Status.CONCLUDED,
            date: translate({id: "projects.4.date"}),
            icon: 'pepicons-pop:checkmark-circle-filled',
            color: 'var(--primary-color)',
            title: translate({id: "projects.4.title"}),
            author: "Francisco Freire",
            description: translate({id: "projects.4.description"}),
            link: 'https://drive.google.com/open?id=1hn60KutOxTpWiLOk1xnhBUHa0BQUTXBC&usp=drive_fs'
        },
        {
            status: Status.ONGOING,
            date: translate({id: "projects.5.date"}),
            icon: 'pepicons-pop:arrows-spin-circle-filled',
            color: '#607D8B',
            title: translate({id: "projects.5.title"}),
            author: "Pedro Grilo",
            description: translate({id: "projects.5.description"}),
        },
        {
            status: Status.ONGOING,
            date: translate({id: "projects.6.date"}),
            icon: 'pepicons-pop:arrows-spin-circle-filled',
            color: '#607D8B',
            title: translate({id: "projects.6.title"}),
            author: "Carolina Salazar",
            description: translate({id: "projects.6.description"}),
        },
        {
            status: Status.ONGOING,
            date: translate({id: "projects.7.date"}),
            icon: 'pepicons-pop:arrows-spin-circle-filled',
            color: '#607D8B',
            title: translate({id: "projects.7.title"}),
            author: "Diogo Moreira",
            description: translate({id: "projects.7.description"}),
        }
    ];
}