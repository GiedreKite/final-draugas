import { FirstPage } from "../components/firstpage/FirstPage";
import { Footer } from "../components/footer/Footer";
import '../components/bootstrap.min.css';
import { Header } from "../components/header/Header";
import { MainPage } from "../components/mainPage/MainPage";



export function About() {
    return (
        <>
            <Header />
            <MainPage />
            <Footer />
        </>
    );
}