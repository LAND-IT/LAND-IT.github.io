import './App.css'
import {Header} from "./components/Header.tsx";
import {Footer} from "./components/Footer.tsx";
import Body from "./components/Body.tsx";
import {I18nextProvider} from "react-i18next";
import i18n from "./i18n";
import {PrimeReactProvider} from "primereact/api";

function App() {
console.log(i18n)
    return (
        <>
            <I18nextProvider i18n={i18n}>
                <PrimeReactProvider>
                <Header/>
                <Body/>
                <Footer/>
                </PrimeReactProvider>
            </I18nextProvider>
        </>
    )
}

export default App
