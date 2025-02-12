import {Card} from "primereact/card";
import {Button} from "primereact/button";
import {Timeline} from "primereact/timeline";
import {Icon} from "@iconify/react";
import './projects.css';
import {TimelineEvent} from "../../Definitions.ts";
import useProjects from "../containers/useProjects.ts";
import {useTranslation} from "react-i18next";

export default function RelatedProjects() {

    const {t} = useTranslation();

    const events: TimelineEvent[] = useProjects()

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