
import { Footer } from "../../components/footer/Footer";
import '../../components/bootstrap.min.css';
import { Header } from "../../components/header/Header";
import { ServicesUser } from "../../components/servicesUser/ServicesUser";





export default function ServicesList() {
    return (
        <>
            <Header />
            <ServicesUser/>
            <Footer />
        </>
    );
}