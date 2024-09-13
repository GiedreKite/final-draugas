import { FirstPage } from "../components/firstpage/FirstPage";
import { Footer } from "../components/footer/Footer";
import '../components/bootstrap.min.css';
import { Header } from "../components/header/Header";



export function Home() {
    return (
        <>
            <Header />
            <FirstPage />
            <Footer />
        </>
    );
}