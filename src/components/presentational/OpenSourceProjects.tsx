import useProjects from "@site/src/hooks/useProjects";
import { Card } from "primereact/card";
import styles from "./projects.module.css"
import {Button} from "primereact/button";
import { translate } from "@docusaurus/Translate";

export default function OpenSourceProjects() {

    const projects = useProjects();

    return (<>
        {projects.map((project, index) => (
            <Card className={styles.card} title={project.title}
                  header={<img alt="Card" height={"120vh"} src={project.logo} />}>
                <p className="m-0">
                    {project.description}
                </p>
                <Button label={translate({id:"publications.access"})} onClick={() =>
                    window.open(project.page, '_blank')} className="p-button-text"></Button>
            </Card>
    ))}
</>)

}