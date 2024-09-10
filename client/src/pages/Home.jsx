import { FirstPage } from "../components/firstpage/FirstPage";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import '../components/bootstrap.min.css';



export function Home() {
    return (
        <>
            <Header />
            <FirstPage />
            <Footer />
        </>
    );
}