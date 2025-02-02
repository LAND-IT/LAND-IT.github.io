import './App.css'
import {Header} from "./components/Header.tsx";
import {Footer} from "./components/Footer.tsx";
import Body from "./components/Body.tsx";
import {I18nextProvider} from "react-i18next";
import i18n from "./i18n";

function App() {
console.log(i18n)
    return (
        <>
            <I18nextProvider i18n={i18n}>
                <Header/>
                <Body/>
                <Footer/>
            </I18nextProvider>
        </>
    )
}

export default App
