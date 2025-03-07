import {Card} from "primereact/card";
import {Button} from "primereact/button";
import {Timeline} from "primereact/timeline";
import {Icon} from "@iconify/react";
import './projects.css';
import {TimelineEvent} from "../../Definitions";
import useProjects from "../../hooks/useProjects";
import {useTranslations} from "next-intl";
import { useState, useEffect } from 'react';

export default function RelatedProjects() {
    const t = useTranslations();
    const events: TimelineEvent[] = useProjects();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);
        
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const customizedMarker = (item: TimelineEvent) => {
        return (
            <Icon style={{color: item.color}} height={"40px"} icon={item.icon}/>
        );
    };

    const customizedContent = (item: TimelineEvent) => {
        return (
            <Card header={isMobile &&
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
            {!isMobile &&
                <Timeline value={events} align="alternate" className="customized-timeline" marker={customizedMarker}
                          content={customizedContent}/>}
            {isMobile && <div className={"cards"}>
                {events.map((event, index) => (
                    <div key={event.title || index}>
                        {customizedContent(event)}
                    </div>
                ))}
            </div>}
        </div>
    );
} 