export function Registracion(props) {

        const [name, setName] = useState('');
        const [surname, setSurname] = useState('');
        const [birthYear, setBirthYear] = useState('');
        const [birthMonth, setBirthMonth] = useState('');
        const [birthDay, setBirthDay] = useState('');
        const [mail, setMail] = useState('');
        const [phone, setPhone] = useState('');
        const [pass, setPass] = useState('');
        const [password, setPassword] = useState('');

        function handleFormSubmit(e) {
            e.preventDefault();
    
            if (task.trim() === "") {
                return;
            }
        }
        
        const [show00, setShow00] = useState(false);
        function hide00() {
            if(show00===false) {
                setShow00(true)
            }
            if(show00===true) {
                setShow00(false)
            }}


    
    return <>
    <h2>Norintiems užsiregistruoti: 
        <button onClick={() => hide00()} >Registracijos forma</button>
    </h2>
    <form style={show00===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.form} onSubmit={handleFormSubmit}>
        <h3> Prašome įvesti savo duomenis: </h3>
        <label className={style.formText}>  Vardą:<input className={style.formInput} onChange={e=>setName(e.target.value)} value={name} type="Jūsų vardas"/></label> 
        <label className={style.formText}>  Pavardę:<input className={style.formInput} onChange={e=>setSurname(e.target.value)} value={surname} type="Jūsų pavardė"/></label> 
        <label className={style.formText}>  Gimimo metus:<input className={style.formInput} onChange={e=>setBirthYear(e.target.value)} value={birthYear} type="Jūsų gimimo metai"/></label> 
        <label className={style.formText}>  Gimimo mėnesį:<input className={style.formInput} onChange={e=>setBirthMonth(e.target.value)} value={birthMonth} type="Jūsų gimimo mėnuo"/></label> 
        <label className={style.formText}>  Gimimo dieną:<input className={style.formInput} onChange={e=>setBirthDay(e.target.value)} value={birthDay} type="Jūsų gimimo diena"/></label> 
        <label className={style.formText}>  Elektroninį paštą:<input className={style.formInput} onChange={e=>setMail(e.target.value)} value={mail} type="Jūsų elektroninis paštas"/></label> 
        <label className={style.formText}>  Telefono numerį:<input className={style.formInput} onChange={e=>setPhone(e.target.value)} value={phone} type="Jūsų  telefono numeris"/></label> 
        <label className={style.formText}>  Slaptažodį:<input className={style.formInput} onChange={e=>setPass(e.target.value)} value={pass} type="Jūsų  slaptažodis"/></label>
        <label className={style.formText}>  Pakartokite slaptažodį:<input className={style.formInput} onChange={e=>setPassword(e.target.value)} value={password} type="Pakartokite slaptažodį"/></label>  
        <button onClick={() => hide00()} className={style.formBtn} type="submit">Patvirtinti</button>
    </form>
   
    </>
}