import { useState } from 'react';
import draugas from './img/draugas.png';
import { Link } from 'react-router-dom';
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