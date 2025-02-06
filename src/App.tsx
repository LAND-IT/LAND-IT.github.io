import './App.css'
import {Header} from "./components/Header.tsx";
import {Footer} from "./components/Footer.tsx";
import Body from "./components/Body.tsx";
import {I18nextProvider} from "react-i18next";
import i18n from "./i18n";
import {PrimeReactProvider} from "primereact/api";
import {ScrollTop} from "primereact/scrolltop";
import {Icon} from "@iconify/react";

function App() {
    return (
        <>
            <I18nextProvider i18n={i18n}>
                <PrimeReactProvider>
                    <div>
                        <Header/>
                        <Body/>
                        <Footer/>
                        <ScrollTop threshold={2500} style={{backgroundColor: "green"}}
                                   icon={<Icon width={"30px"} color={"white"} icon="mingcute:arrow-up-fill" ></Icon>}
                    />
                    </div>
                </PrimeReactProvider>
            </I18nextProvider>
        </>
    )
}

export default App
