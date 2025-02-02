import { useEffect, useState } from "react";
import "./body.css";
import {useTranslation} from "react-i18next";



export default function Body() {
    const {t} = useTranslation();

    const sections = [t("sections.presentation"), t("sections.related_projects"), t("sections.team")];
    const [activeSection, setActiveSection] = useState<string>(t("sections.presentation"));
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [isMenuFixed, setIsMenuFixed] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = activeSection;
            const scrollPosition = window.scrollY;
            const menuElement = document.querySelector('.menu') as HTMLElement;
            const menuOffsetTop = menuElement?.offsetTop ?? 0;

            // Verifica se o menu deve ficar fixo
            setIsMenuFixed(scrollPosition > menuOffsetTop);

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= window.innerHeight * 0.4) {
                        currentSection = section;
                        break;
                    }
                }
            }

            if (currentSection !== activeSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Define o estado inicial

        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeSection]);

    return (
        <div className="container">
            {/* Menu */}
            <nav className={`menu ${menuOpen ? "open" : ""} ${isMenuFixed ? "fixed" : ""}`}>
                <ul>
                    {sections.map((section) => (
                        <li key={section}>
                            <a
                                href={`#${section}`}
                                className={activeSection === section ? "active" : ""}
                                onClick={() => setMenuOpen(false)}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Conteúdo principal */}
            <div className="content">
                {sections.map((section) => (
                    <section key={section} id={section} className="section">
                        <h2>{section.toUpperCase()}</h2>
                        {/* Adicione o conteúdo de cada seção aqui */}
                    </section>
                ))}
            </div>
        </div>
    );
}