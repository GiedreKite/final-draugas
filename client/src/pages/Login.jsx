
import { Footer } from "../components/footer/Footer";
import '../components/bootstrap.min.css';
import { Header } from "../components/header/Header";
import { LoginOn } from "../components/login/LoginOn";




export function Login() {
    return (
        <>
            <Header />
            <LoginOn />
            <Footer />
        </>
    );
}