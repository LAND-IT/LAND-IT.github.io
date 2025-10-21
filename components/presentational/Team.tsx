import "./team.css"
import {User} from "lucide-react";

type Person = { name: string, job: string };

const people: Person[] = [
    { name: "Eng. António Louro", job: '' },
    { name: "Prof. João Moura Pires", job: '' },
    { name: "Márcia Matias", job: 'Tech Lead' },
    { name: "Francisco Freire", job: 'Full-Stack Engineer' },
    { name: "Prof. Cristina Henriques", job: '' },
];

export const Team = () => {
    const mid = Math.ceil(people.length / 2);
    const firstRow = people.slice(0, mid);
    const secondRow = people.slice(mid);


    return (
        <div className="avatars-container">
            <div className="avatars-row">
                {firstRow.map((p, i) => (
                    <div key={i} className="avatar-item">
                        <div className="avatar-circle"><User size={38} /></div>
                        <div className="avatar-name">{p.name}</div>
                        <div className="avatar-job">{p.job}</div>
                    </div>
                ))}
            </div>
            <div className="avatars-row">
                {secondRow.map((p, i) => (
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