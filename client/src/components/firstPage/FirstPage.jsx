import { useState } from "react";
import style from './FirstPage.module.css';
import plus from './img/plus.png';
import x from './img/x.png';



    export function FirstPage(props) {



        
        const [show0, setShow0] = useState(false);
        const [show1, setShow1] = useState(false);
        const [show2, setShow2] = useState(false);
        const [show3, setShow3] = useState(false);
       
    
    
        function hide0() {
            if(show0===false) {
                setShow0(true)
            }
            if(show0===true) {
                setShow0(false)
            }}
            function hide1() {
            if(show1===false) {
                setShow1(true)
            }
            if(show1===true) {
                setShow1(false)
            }}
            function hide2() {
            if(show2===false) {
                setShow2(true)
            }
            if(show2===true) {
                setShow2(false)
            }}
            function hide3() {
            if(show3===false) {
                setShow3(true)
            }
            if(show3===true) {
                setShow3(false)
            }}
            
    
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


        
        return ( <>
        <div className="container marketing"/>

            
            <hr className="featurette-divider"/>
            
            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1"> „Draugas Draugui Draugas“ - <span className="text-body-secondary">Asmeninis Laikas ir Palaikymas.</span></h2>
                <div  className={style.questionContainer}>
                        <button onClick={() => hide0()} className={style.question}>„Draugas Draugui“ – tai asmeninė paslauga, skirta tiems, kurie ieško kokybiško laiko. Kaip jūsų asmeninė draugė, aš siūlau Jums unikalią patirtį, apimančią pramogas, bendravimą ir emocinį palaikymą. 
                            <img style={show0===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
                            <img style={show0===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
                        </button>
                        <p style={show0===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Tai pagalba, kurios reikia, kai mūsų planai nesusiklosto ir kai aplinkiniai paveda, priversdami vienus keliauti į renginius, koncertus, kino teatrus it t.t., nors taip norėtųsi draugijos... Tai palaikymas, kai siekiame gyventi pilnavertiškai, turėti galimybę dalintis savo patirtimi ir įspūdžiais su kitais, bei išbandyti naujas veiklas. Kai norime vėl švytėti, bet galbūt nedrąsu vieniems atrasti naujų įspūdžių, šis palaikymas yra ypač svarbus. Tai ir draugijos bei palaikymo ieškojimas, kai norime jaustis suprasti ir palaikomi net ir sunkiais momentais.</p>
                    </div>
              </div>
              <div className="col-md-5">
                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
              </div>
            </div>
            
            <hr className="featurette-divider"/>
            
            <div className="row featurette">
              <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading fw-normal lh-1"> Paslaugos privalumai: <span className="text-body-secondary"> Bendrai leidžiamas laikas, Pramogos ir Veiklos, Emocinis palaikymas.</span></h2>
                <div className={style.questionContainer}>
                        <button onClick={() => hide1()} className={style.question}>Ši paslauga skirta tiems, kurie nori praleisti laiką su asmeniu, kuris rūpinasi jų gerove, veiklomis ir teikia emocinį palaikymą. Jei ieškote draugo, su kuriuo galėtumėte pasidalinti laisvalaikiu, užsiimti naujomis pramogomis ar tiesiog gauti palaikymą sunkiais momentais, „Draugas Draugui Draugas“ yra Jums.
                            <img style={show1===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
                            <img style={show1===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
                        </button>
                        <p style={show1===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Kai lyja, sninga, pučia ar saulė šviečia – jūsų laikas ir emocinė gerovė yra svarbiausi. Aš siūlau unikalią paslaugą, kuri apima ne tik bendrą laiką kartu, bet ir pramogas bei emocinį palaikymą, atsižvelgiant į jūsų poreikius ir nuotaiką. Kartu galime mėgautis įvairiomis veiklomis – nuo ramiai leidžiamo laiko gamtoje su kavos puodeliu iki įdomių kūrybinių dirbtuvių ar kultūrinių renginių, kurie praturtins jūsų kasdienybę ir suteiks džiaugsmo. Taip pat aš visada čia, kad išklausyčiau, suteikčiau palaikymą ir patarimus, kad ir kokie būtų iššūkiai ar džiaugsmo akimirkos. Kiekvieną kartą, kai praleidžiame laiką kartu, aš siekiu ne tik sukurti malonias akimirkas, bet ir būti šalia, kai Jums reikia emocinio palaikymo ir tikro draugiškumo.</p>
                    </div>
              </div>
              <div className="col-md-5 order-md-1">
                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
              </div>
            </div>
            
            <hr className="featurette-divider"/>
            
            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1">And lastly, this one. <span className="text-body-secondary">Checkmate.</span></h2>
                <div className={style.questionContainer}>
                        <button onClick={() => hide2()} className={style.question}>Kur?
                            <img style={show2===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
                            <img style={show2===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
                        </button>
                        <p style={show2===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Klaipėda, tačiau galima pakeisti ir vietą.</p>
                    </div>
              </div>
              <div className="col-md-5">
                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
              </div>
            </div>
            
            <hr className="featurette-divider"/>
            
            
            
                   
                    {/* <h2>Užduodami klausimai</h2>
                
                   <section className={style.container}>

                

                

                
                    <div className={style.questionContainer}>
                        <button onClick={() => hide3()} className={style.question}>Kada priimami užsakymai?
                            <img style={show3===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
                            <img style={show3===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
                        </button>
                        <p style={show3===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Užsakymus priimu pagal užimtumą. Nesidrovėkite, jei iki įvykio liko trys valandos Klaipėdoje.</p>
                    </div>
                   </section> */}

     
    
    
        
        </>)
        }