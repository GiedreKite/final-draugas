import { useState } from 'react';
import draugas from './img/draugas.png';
import { Link } from 'react-router-dom';
import '../../components/bootstrap.min.css';
import style from './Header.module.css';


    export function Header() {
        const [login, setLogin] = useState('');
        function handleFormSubmit(e) {
            e.preventDefault();
    
            if (task.trim() === "") {
                return;
            }
        }
        
    return <>
<div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="col-md-3 mb-2 mb-md-0">
                    <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                        <img className={style.img}src={draugas} alt="Logo" />
                    </a>
                </div>
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li>
                        <a href="/draugas/home" className="nav-link px-2 link-secondary">Home</a>
                    </li>
                    <li>
                        <a href="/draugas/main" className="nav-link px-2">Pagrindinis</a>
                    </li>
                    <li>
                        <a href="/draugas/first" className="nav-link px-2">First</a>
                    </li>
                    <li>
                        <a href="/draugas/second" className="nav-link px-2">Second</a>
                    </li>
                    <li>
                        <a href="/draugas/third" className="nav-link px-2">Third</a>
                    </li>
                    <li>
                        <a href="/draugas/forth" className="nav-link px-2">Forth</a>
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