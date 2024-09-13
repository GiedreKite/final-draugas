
import { Footer } from "../../components/footer/Footer";
import '../../components/bootstrap.min.css';

import { ThirdPage } from "../../components/thirdPage/ThirdPage";
import { AdminHeader } from "../../components/header/AdminHeader";




export function List() {
    return (
        <>
            <AdminHeader />
            <ThirdPage />
            <Footer />
        </>
    );
}