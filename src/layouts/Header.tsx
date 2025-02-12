import "./header.css"
import {Dropdown} from "primereact/dropdown";
import {useState} from "react";
import i18n from "i18next";
import {Icon} from "@iconify/react";
import {Fade} from "react-awesome-reveal";

interface Language {
    label: string,
    code: string,
    icon: string
}

export const Header = () => {

    const items: Language[] = [
        {label: "Português", code: 'pt', icon: "emojione-v1:flag-for-portugal"},
        {label: "English", code: 'en', icon: "emojione-v1:flag-for-united-kingdom"}
    ]

    const [selectedLanguage, setSelectedLanguage] = useState(items[1]);

    const selectedCountryTemplate = (option: Language) => {
        return (
            <div className="selectedLanguage">
                <Icon icon={option.icon}/>
                {window.innerWidth > 768 ? <div>{option.label}</div> : ""}
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


    return (<>
            <Fade duration={500}>
                <h1 className={"header-image"}>LAND IT</h1>
            </Fade>
            <div className={"languages"}>
                <Dropdown value={selectedLanguage}
                          options={items}
                          optionLabel={"label"}
                          className={"dropdownLanguages"}
                          valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate}
                          onChange={(e) => {
                              setSelectedLanguage(e.value);
                              i18n.changeLanguage(e.value.code);
                          }}/>
                {/*<img className={"header-image"} src={"/public/forest2.jpg"}></img>*/}
            </div>
        </>
    )
}