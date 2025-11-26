import "./team.css"
import {User} from "lucide-react";
import {translate} from "@docusaurus/Translate";

type Person = { name: string, job: string };

const people: Person[] = [
    { name: "Eng. António Louro", job: translate({id:"team.member1.role"})},
    { name: "Prof. João Moura Pires", job: translate({id:"team.member2.role"}) },
    { name: "Márcia Matias", job: translate({id:"team.member3.role"}) },
    { name: "Francisco Freire", job: translate({id:"team.member4.role"}) },
    { name: "Francisca Silva", job: translate({id:"team.member5.role"}) },
    { name: "Prof. Cristina Henriques", job: translate({id:"team.member6.role"}) },
];

export const Team = () => {
    return (
        <div className="avatars-container">
            <div className="avatars-row">
                {people.map((p, i) => (
                    <div key={i} className="avatar-item">
                        <div className="avatar-circle"><User size={38} /></div>
                        <div className="avatar-name">{p.name}</div>
                        <div className="avatar-job">{p.job}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}