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
                        <img src={draugas} alt="Logo" />
                    </a>
                </div>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li>
                        <a href="/" className="nav-link px-2 link-secondary">Home</a>
                    </li>
                    <li>
                        <a href="/" className="nav-link px-2">Features</a>
                    </li>
                    <li>
                        <a href="/" className="nav-link px-2">Pricing</a>
                    </li>
                    <li>
                        <a href="/" className="nav-link px-2">FAQs</a>
                    </li>
                    <li>
                        <a href="/" className="nav-link px-2">About</a>
                    </li>
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    <button type="button" className="btn btn-primary">Register</button>
                </div>
            </header>

</div>
        <header className="">
        <form onSubmit={handleFormSubmit}>
            <input onChange={e=>setLogin(e.target.value)} value={login} type="Prisijungimo vardas"/>
            <button type="submit">Prisijungti</button>
        </form>
        <button> Atsijungti </button>


        <img className={style.img}src={draugas} alt="Logo" />
            <nav>
                <Link to="/draugas/main">
                    <button>Pagrindinis</button>
                </Link>
                <Link to="/draugas/first">
                    <button>First</button>
                </Link>
                <Link to="/draugas/second">
                    <button>Second</button>
                </Link>
                <Link to="/draugas/third">
                    <button>Third</button>
                </Link>
                <Link to="/draugas/forth">
                    <button>Forth</button>
                </Link>

            </nav>
        </header>`;

</>
}