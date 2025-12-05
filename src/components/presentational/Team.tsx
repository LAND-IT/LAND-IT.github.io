import "./team.css"
import {User} from "lucide-react";
import {translate} from "@docusaurus/Translate";

type Person = { name: string, job: string, profilePicture?: string, extraStyle?: string };

const people: Person[] = [
    { name: "Eng. António Louro", job: translate({id:"team.member1.role"}),
        profilePicture: "/images/profile_pictures/member1.jpg",
        extraStyle: "object-position: 30% 30%; transform: scale(1.1);"
    },
    { name: "Prof. João Moura Pires", job: translate({id:"team.member2.role"}) },
    { name: "Márcia Matias", job: translate({id:"team.member3.role"}),profilePicture: "/images/profile_pictures/member3.jpg" },
    { name: "Francisco Freire", job: translate({id:"team.member4.role"}) },
    { name: "Francisca Silva", job: translate({id:"team.member5.role"}),
        profilePicture: "/images/profile_pictures/member5.jpeg",
        extraStyle: "transform: scale(1.5); object-position: center 55%; " },
    { name: "Prof. Cristina Henriques", job: translate({id:"team.member6.role"}) },
];

export const Team = () => {

    const parseStyle = (styleString?: string) => {
        if (!styleString) return {};
        return Object.fromEntries(
            styleString.split(';')
                .filter(prop => prop.trim())
                .map(prop => {
                    const [key, value] = prop.split(':').map(s => s.trim());
                    const camelKey = key.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
                    return [camelKey, value];
                })
        );
    };

    return (
        <div className="avatars-container">
            <div className="avatars-row">
                {people.map((p, i) => (
                    <div key={i} className="avatar-item">
                        {p.profilePicture == undefined && <div className="avatar-circle"><User size={38} /></div>}
                        {p.profilePicture != undefined && <div className="avatar-photo" >
                            <img style={parseStyle(p.extraStyle)} src={p.profilePicture} alt={p.name}/></div>}
                        <div className="avatar-name">{p.name}</div>
                        <div className="avatar-job">{p.job}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}