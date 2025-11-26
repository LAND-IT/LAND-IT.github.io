import {Card} from "primereact/card";
import {Button} from "primereact/button";
import {Timeline} from "primereact/timeline";
import {Icon} from "@iconify/react";
import styles from './projects.module.css';
import {TimelineEvent} from "../../Definitions";
import useProjects from "../../hooks/useProjects";
import { useState, useEffect } from 'react';
import { translate } from "@docusaurus/Translate";

export default function RelatedProjects() {
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
                {item.link && <Button label={translate({id:"projects.access"})} onClick={() => window.open(item.link, '_blank')}
                                      className="p-button-text"></Button>}
            </Card>
        );
    };

    return (
        <div className="card" style={{padding: "30px 5px 30px 5px"}}>
            {!isMobile &&
                <Timeline value={events} align="alternate" className="customized-timeline" marker={customizedMarker}
                          content={customizedContent}/>}
            {isMobile && <div className={styles.cards}>
                {events.map((event, index) => (
                    <div key={event.title || index}>
                        {customizedContent(event)}
                    </div>
                ))}
            </div>}
        </div>
    );
} 