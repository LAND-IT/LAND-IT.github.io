import styles from "./header.module.css"
import {useState, useEffect} from "react";
import {Fade, Zoom} from "react-awesome-reveal";

export const Header = () => {
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

    return (<>
            <Fade duration={500}>
                <div className={styles.headerImage}>
                    <Zoom className={styles.headerZoomLogo} duration={2500}>
                        <img className={styles.headerLogo} src={"/images/logo_branco.png"} alt={"landit-logo"} />
                    </Zoom>
                </div>
            </Fade>
        </>
    )
}