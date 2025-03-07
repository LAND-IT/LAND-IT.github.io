"use client"
import "./header.css"
import {Dropdown} from "primereact/dropdown";
import {useState, useEffect} from "react";
import {Icon} from "@iconify/react";
import {Fade} from "react-awesome-reveal";
import { useRouter } from 'next/navigation';
import { Locale } from "@/i18n";
        
interface Language {
    label: string,
    code: string,
    icon: string
}

export const Header = ({ lang }: { lang: Locale }) => {
    const router = useRouter();
    

    const items: Language[] = [
        {label: "Português", code: 'pt', icon: "emojione-v1:flag-for-portugal"},
        {label: "English", code: 'en', icon: "emojione-v1:flag-for-united-kingdom"},
    ]

    const [selectedLanguage, setSelectedLanguage] = useState(
        items.find(item => item.code === lang) || items[1]
    );
    const [windowWidth, setWindowWidth] = useState(0);
    

    
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        // Set initial width
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const selectedCountryTemplate = (option: Language) => {
        return (
            <div className="selectedLanguage">
                <Icon icon={option.icon}/>
                {windowWidth > 768 ? <div>{option.label}</div> : ""}
            </div>
        );
    };

    const countryOptionTemplate = (option: Language) => {
        return (
            <div className="optionSelected">
                <Icon icon={option.icon}/>
                <div>{option.label}</div>
            </div>
        );
    };

    const handleLanguageChange = (e: Language) => {
        const newLang = e.code;
        setSelectedLanguage(e);
        
        // Change the URL to reflect the new language
        router.push(`/${newLang}`);
    };

    return (<>
            <Fade duration={500}>
                <h1 className={"header-image"}>LAND IT</h1>
            </Fade>
            <div className={"languages"}>
                <Dropdown value={selectedLanguage}
                          options={items}
                          optionLabel={"label"}
                          className={"dropdownLanguages"}
                          valueTemplate={selectedCountryTemplate} 
                          itemTemplate={countryOptionTemplate}
                          onChange={handleLanguageChange}/>
            </div>
        </>
    )
}