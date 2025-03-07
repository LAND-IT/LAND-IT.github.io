"use client"
import "./body.css"
import '@/lib/i18n/i18n-client'; // Importar a configuração do i18next
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';
import { useEffect, useState, useMemo } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Presentation } from '@/components/layouts/Presentation';
import Multimedia from '@/components/presentational/Multimedia';
import RelatedProjects from '@/components/presentational/RelatedProjects';
import {Team } from '@/components/presentational/Team';


export default function Page() {
  const params = useParams();
  const locale = params.locale as string;
  const { t, i18n } = useTranslation();
  
  // Mudar o idioma quando o locale mudar
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);
  
 
  const sections = useMemo(() => [
    { id: "presentation", label: t('sections.presentation', 'sections'), body: <Presentation locale={locale} /> },
    { id: "multimedia", label: t('sections.multimedia', 'sections'), body: <Multimedia /> },
    { id: "related_projects", label: t('sections.related_projects', 'sections'), body: <RelatedProjects /> },
    { id: "team", label: t('sections.team', 'sections'), body: <Team /> },
  ], [t]);

  const [activeSection, setActiveSection] = useState<string>("presentation")
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [isMenuFixed, setIsMenuFixed] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = activeSection

      // Verifica se o componente irmão saiu da tela
      const headerElement = document.querySelector(".ghost") as HTMLElement
      if (headerElement) {
        const headerBottom = headerElement.getBoundingClientRect().bottom
        setIsMenuFixed(headerBottom <= 0)
      }

      // Identificar a seção ativa
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top >= 0 && rect.top <= window.innerHeight * 0.4) {
            currentSection = section.id
            break
          }
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection, sections])
  
  const [showGhost, setShowGhost] = useState(false);

  useEffect(() => {
    setShowGhost(window.innerWidth > 768);
  }, []);

  
  return (
    <div className="container">
      {/* Componente Fantasma */}
      {showGhost && <div className="ghost"></div>}

      {/* Botão do menu no mobile */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "X" : "☰"}
      </button>

      {/* Menu de navegação */}
      <nav className={`menu ${menuOpen ? "open" : ""} ${isMenuFixed ? "fixed" : ""}`}>
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={activeSection === section.id ? "active" : ""}
                onClick={() => setMenuOpen(false)} // Fecha o menu ao clicar
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Conteúdo principal */}
      <div className="content">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="section">
            <Fade duration={2500}>
              <h2>{section.label.toUpperCase()}</h2>
              {section.body}
            </Fade>
          </section>
        ))}
      </div>
    </div>
  )
}