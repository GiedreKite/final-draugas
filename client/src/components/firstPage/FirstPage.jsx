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
                <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-body-secondary">It’ll blow your mind.</span></h2>
                <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
              </div>
              <div className="col-md-5">
                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
              </div>
            </div>
            
            <hr className="featurette-divider"/>
            
            <div className="row featurette">
              <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span className="text-body-secondary">See for yourself.</span></h2>
                <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
              </div>
              <div className="col-md-5 order-md-1">
                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
              </div>
            </div>
            
            <hr className="featurette-divider"/>
            
            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1">And lastly, this one. <span className="text-body-secondary">Checkmate.</span></h2>
                <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
              </div>
              <div className="col-md-5">
                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
              </div>
            </div>
            
            <hr className="featurette-divider"/>
            
            
            
                   
                    <h2>Užduodami klausimai</h2>
                
                   <section className={style.container}>
                    <div  className={style.questionContainer}>
                        <button onClick={() => hide0()} className={style.question}>Kas tai?
                            <img style={show0===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
                            <img style={show0===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
                        </button>
                        <p style={show0===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Tai pagalba kai griūna planai, kai norisi gyventi, dalintis įspūdžiais, norisi draugijos, palaikymo.</p>
                    </div>
                
                    <div className={style.questionContainer}>
                        <button onClick={() => hide1()} className={style.question}>Kada?
                            <img style={show1===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
                            <img style={show1===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
                        </button>
                        <p style={show1===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Kai lyja, sninga, pučia, ar saulė šviečia...</p>
                    </div>
                
                    <div className={style.questionContainer}>
                        <button onClick={() => hide2()} className={style.question}>Kur?
                            <img style={show2===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
                            <img style={show2===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
                        </button>
                        <p style={show2===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Klaipėda, tačiau galima pakeisti ir vietą.</p>
                    </div>
                
                    <div className={style.questionContainer}>
                        <button onClick={() => hide3()} className={style.question}>Kada priimami užsakymai?
                            <img style={show3===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
                            <img style={show3===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
                        </button>
                        <p style={show3===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Užsakymus priimu pagal užimtumą. Nesidrovėkite, jei iki įvykio liko trys valandos Klaipėdoje.</p>
                    </div>
                   </section>

     
    
    
        
        </>)
        }