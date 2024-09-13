import { useState } from 'react';
import draugas from './img/draugas.png';
import style from './AdminHeader.module.css';


// import juda from'https://framer.com/m/Juda-svuW.js@zNg8x80zLQ14nKzrkR4P'



    export function AdminHeader() {
    
        const [login, setLogin] = useState('');
        function handleFormSubmit(e) {
            e.preventDefault();
    
            if (task.trim() === "") {
                return;
            }
        }
        
    return <>
   

<div className="containerAdminHeder">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="col-md-3 mb-2 mb-md-0">
                    <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                        <img className={style.img}src={draugas} alt="Logo" />
                        
                    </a>
                </div>
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li>
                        <a href="/draugas/home" className="nav-link px-2 link-secondary">Pagringinis</a>
                    </li>
                    <li>
                        <a href="/draugas/about" className="nav-link px-2 link-secondary">Apie projektą</a>
                    </li>


                    <li>
                        <a href="/draugas/registion" className="nav-link px-2">Registracija</a>
                    </li>
                    <li>
                        <a href="/draugas/login" className="nav-link px-2">Prisijungimas</a>
                    </li>
                    <li>
                        <a href="/draugas/userInfo" className="nav-link px-2">Vartotojo duomenys</a>
                    </li>
                    <li>
                        <a href="/draugas/shoppingChart" className="nav-link px-2">Vartotojo krepšelis</a>
                    </li>
                    <li>
                        <a href="/draugas/servisesList" className="nav-link px-2">Paslaugų sąrašas</a>
                    </li>
                    <li>
                        <a href="/draugas/users" className="nav-link px-2">Vartotojų sąrašas ADMIN</a>
                    </li>
                    <li>
                        <a href="/draugas/list" className="nav-link px-2">Paslaugų sąrašas ADMIN</a>
                    </li>
                    <li>
                        <a href="/draugas/createList" className="nav-link px-2">Sukurti paslaugą ADMIN</a>
                    </li>
                </ul>

                <div className="col-md-3 text-end">
                <form onSubmit={handleFormSubmit}>
                    <input onChange={e=>setLogin(e.target.value)} value={login} type="Prisijungimo vardas"/>
                    <button type="submit" className="btn btn-primary">Prisijungti/Atsijungti</button>
                </form>
             
                 
                </div>
            </header>

</div>
    

      
    
       

</>
}