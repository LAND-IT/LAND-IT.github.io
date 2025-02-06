import {Card} from "primereact/card";
import {Button} from "primereact/button";
import {Timeline} from "primereact/timeline";
import {Icon} from "@iconify/react";
import './projects.css';
import {useTranslation} from "react-i18next";

enum Status {
    CONCLUDED, ONGOING
}

interface TimelineEvent {
    status: Status;
    date: string;
    icon: string;
    color: string;
    title: string;
    author: string;
    description: string;
    link?: string;
}

export default function RelatedProjects() {

    const {t} = useTranslation();

    const events: TimelineEvent[] = [
        {
            status: Status.CONCLUDED,
            date: t(`projects.list.${0}.date`),
            author: "Márcia Matias",
            icon: "pepicons-pop:checkmark-circle-filled",
            color: '#1fa216',
            title: t(`projects.list.${0}.title`),
            link: "https://run.unl.pt/handle/10362/163563",
            description: t(`projects.list.${0}.description`)
        },
        {
            status: Status.CONCLUDED,
            date: t(`projects.list.${1}.date`),
            icon: "pepicons-pop:checkmark-circle-filled",
            color: '#1fa216',
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
        }
    ];

    const customizedMarker = (item: TimelineEvent) => {
        return (
            <Icon style={{color: item.color}} height={"40px"} icon={item.icon}/>
        );
    };

    const customizedContent = (item: TimelineEvent) => {
        return (
            <Card header={window.innerWidth <= 768 &&
                <Icon style={{color: item.color}} height={"30px"} icon={item.icon}/>}
                  title={item.title} subTitle={<span>{item.author} <br/> {item.date} </span>}>
                <p>{item.description}</p>
                {item.link && <Button label={t(`projects.access`)} onClick={() => window.open(item.link, '_blank')}
                                      className="p-button-text"></Button>}
            </Card>
        );
    };

    return (
        <div className="card">
            {window.innerWidth > 768 &&
                <Timeline value={events} align="alternate" className="customized-timeline" marker={customizedMarker}
                          content={customizedContent}/>}
            {window.innerWidth <= 768 && <div className={"cards"}>
                {events.map((event) => customizedContent(event))} </div>}
        </div>
    )
}