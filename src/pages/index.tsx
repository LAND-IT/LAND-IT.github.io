import {useEffect, useState, type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { Fade } from 'react-awesome-reveal';

import styles from './index.module.css';
import { Presentation } from '../components/layouts/Presentation';
import Multimedia from '../components/presentational/Multimedia';
import RelatedProjects from '../components/presentational/RelatedProjects';
import { Team } from '../components/presentational/Team';
import { translate } from '@docusaurus/Translate';
import { Header } from '../components/layouts/Header';

const sections = [
    { id: "presentation", label: translate({id: "sections.presentation"}), body: <Presentation /> },
    { id: "multimedia", label: translate({id: "sections.multimedia"}), body: <Multimedia /> },
    { id: "related_projects", label: translate({id: "sections.related_projects"}), body: <RelatedProjects /> },
    { id: "team", label: translate({id: "sections.team"}), body: <Team /> }
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  const [activeSection, setActiveSection] = useState<string>("presentation")
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [isMenuFixed, setIsMenuFixed] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = activeSection

      // Verifica se o componente irmão saiu da tela
      const headerElement = document.querySelector(`.${styles.ghost}`) as HTMLElement
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
    <Layout
      title={`${siteConfig.title}`}
      description="Página de informação do LAND IT.">
      <main>
        <Header />

        <div className={styles.container}>
          {/* Componente Fantasma */}
          {showGhost && <div className={styles.ghost}></div>}

          {/* Botão do menu no mobile */
          <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "X" : ">" /*"☰"*/}
          </button>
          }

          {/* Menu de navegação */}
          <nav className={`${styles.menu} ${menuOpen ? styles.open : ""} ${isMenuFixed ? styles.fixed : ""}`}>
            <ul className={styles.menuList}>
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={`${styles.menuLink} ${activeSection === section.id ? styles.active : ''}`}
                    onClick={() => setMenuOpen(false)} // Fecha o menu ao clicar
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="content">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className={styles.section}>
                <Fade duration={2500}>
                  <h2>{section.label.toUpperCase()}</h2>
                  {section.body}
                </Fade>
              </section>
            ))}
          </div>
        </div>
        
      </main>
    </Layout>
  );
}
