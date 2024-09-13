
import { Footer } from "../components/footer/Footer";
import '../components/bootstrap.min.css';
import { Header } from "../components/header/Header";
import { Registracion } from "../components/registration/Registration";



export function Registion() {
    return (
        <>
            <Header />
            <Registracion />
            <Footer />
        </>
    );
}