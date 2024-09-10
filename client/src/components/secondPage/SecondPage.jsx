import { useState } from "react";
import style from './SecondPage.module.css';
import plus from './img/plus.png';
import x from './img/x.png';


export function SecondPage (props) {




        const [show0, setShow0] = useState(false);
        
        const [show00, setShow00] = useState(false);
        const [show01, setShow01] = useState(false);

        const [show1, setShow1] = useState(false);

        const [show10, setShow10] = useState(false);
        const [show11, setShow11] = useState(false);

        
        const [show2, setShow2] = useState(false);

        const [show3, setShow3] = useState(false);

        const [show4, setShow4] = useState(false);

        const [show40, setShow40] = useState(false);
        const [show41, setShow41] = useState(false);
       
        
        const [show5, setShow5] = useState(false);

        const [show50, setShow50] = useState(false);
        const [show51, setShow51] = useState(false);

        const [show6, setShow6] = useState(false);

        const [show60, setShow60] = useState(false);
        const [show61, setShow61] = useState(false);

        const [show7, setShow7] = useState(false);

        const [show70, setShow70] = useState(false);
        const [show71, setShow71] = useState(false);

        const [show8, setShow8] = useState(false);

        const [show80, setShow80] = useState(false);
        const [show81, setShow81] = useState(false);   
        
        const [show9, setShow9] = useState(false);

        const [show90, setShow90] = useState(false);
        const [show91, setShow91] = useState(false);
        const [show92, setShow92] = useState(false);
        const [show93, setShow93] = useState(false); 

        const [show100, setShow100] = useState(false);

        const [show1000, setShow1000] = useState(false);
        const [show1001, setShow1001] = useState(false);  
    
    
        function hide0() {
            if(show0===false) {
                setShow0(true)
            }
            if(show0===true) {
                setShow0(false);
                setShow00(false);
                setShow01(false);
        }}
        function hide00() {
            if(show00===false) {
                setShow00(true)
            }
            if(show00===true) {
                setShow00(false)
            }}
            function hide01() {
            if(show01===false) {
                setShow01(true)
            }
            if(show01===true) {
                setShow01(false)
        }}
        function hide1() {
            if(show1===false) {
                setShow1(true);
            }
        if(show1===true) {
            setShow1(false);
            setShow10(false);
            setShow11(false);
        }}
        function hide10() {
            if(show10===false) {
                setShow10(true)
            }
            if(show10===true) {
                setShow10(false)
            }}
        function hide11() {
            if(show11===false) {
                setShow11(true)
            }
            if(show11===true) {
                setShow11(false)
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
        function hide4() {
            if(show4===false) {
                setShow4(true);
            }
            if(show4===true) {
                setShow4(false);
                setShow40(false);
                setShow41(false);
            }}
        function hide40() {
            if(show40===false) {
                setShow40(true)
            }
            if(show40===true) {
                setShow40(false)
        }}
        function hide41() {
            if(show41===false) {
                setShow41(true)
            }
            if(show41===true) {
                setShow41(false)
        }}
        function hide5() {
            if(show5===false) {
                setShow5(true);
            }
            if(show5===true) {
                setShow5(false);
                setShow50(false);
                setShow51(false);
        }}
    
        function hide50() {
            if(show50===false) {
                setShow50(true)
            }
            if(show50===true) {
                setShow50(false)
        }}
        function hide51() {
            if(show51===false) {
                setShow51(true)
            }
            if(show51===true) {
                setShow51(false)
        }}
        function hide6() {
            if(show6===false) {
                setShow6(true);
            }
            if(show6===true) {
                setShow6(false);
                setShow60(false);
                setShow61(false);
        }}
            
        function hide60() {
            if(show60===false) {
                setShow60(true)
            }
            if(show60===true) {
                setShow60(false)
        }}
        function hide61() {
            if(show61===false) {
                setShow61(true)
            }
            if(show61===true) {
                setShow61(false)
        }}
                
        function hide7() {
            if(show7===false) {
                setShow7(true);
            }
            if(show7===true) {
                setShow7(false);
                setShow70(false);
                setShow71(false);
        }}

        function hide70() {
           if(show70===false) {
               setShow70(true)
           }
           if(show70===true) {
               setShow70(false)
        }}
        function hide71() {
           if(show71===false) {
               setShow71(true)
           }
           if(show71===true) {
               setShow71(false)
        }}
        function hide8() {
            if(show8===false) {
                setShow8(true);
            }
            if(show8===true) {
                setShow8(false);
                setShow80(false);
                setShow81(false);
        }}

        function hide80() {
           if(show80===false) {
               setShow80(true)
           }
           if(show80===true) {
               setShow80(false)
        }}
        function hide81() {
           if(show81===false) {
               setShow81(true)
           }
           if(show81===true) {
               setShow81(false)
        }} 
        function hide9() {
            if(show9===false) {
                setShow9(true);
            }
            if(show9===true) {
                setShow9(false);
                setShow90(false);
                setShow91(false);
        }}

        function hide90() {
           if(show90===false) {
               setShow90(true)
           }
           if(show90===true) {
               setShow90(false)
        }}
        function hide91() {
           if(show91===false) {
               setShow91(true)
           }
           if(show91===true) {
               setShow91(false)
        }}    
        function hide92() {
            if(show92===false) {
                setShow92(true)
            }
            if(show92===true) {
                setShow92(false)
         }}
         function hide93() {
            if(show93===false) {
                setShow93(true)
            }
            if(show93===true) {
                setShow93(false)
         }} 
         function hide100() {
            if(show1000===false) {
                setShow1000(true)
            }
            if(show1000===true) {
                setShow1000(false)
        }}  
        function hide1000() {
            if(show1000===false) {
                setShow1000(true)
            }
            if(show1000===true) {
                setShow1000(false)
        }}                                                                                                
        
        return <>
        <h2>Kalendorius</h2>
        
        <h2>Paslaugos</h2>
    
       <section className={style.container}>
        <div  className={style.questionContainer}>
            <h3 onClick={() => hide0()} className={style.question}>Kino teatras
                <img style={show0===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
                <img style={show0===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
            </h3>
            <h3 onClick={() => hide00()} style={show0===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Nuėjimas į kino teatrą, filmo žiūrėjimas drauge.
                <img style={show00===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.answerImg} src={plus} alt="plus" />
                <img style={show00===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.answerImg} src={x} alt="x" />
            </h3>
            <p style={show00===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Filmo metu dalinamasi mintimis. 
                <button className={style.btn}>Pasirinkti</button>
            </p>
            <p style={show00===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Filmo metu tylima.
            <button className={style.btn}>Pasirinkti</button>
            </p>
    
            <h3 onClick={() => hide01()} style={show0===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Filmo žiūrėjimas drauge ir įpsūdžių pasidalinimas po filmo valanda laiko prie puodelio arbatos.
                <img style={show01===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.answerImg} src={plus} alt="plus" />
                <img style={show01===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.answerImg} src={x} alt="x" />
            </h3>
            <p style={show01===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Filmo metu pasidalinama mintimis, o dalinamasi įspūdžiais po filmo, prie kavos ar arbatos puodelio.
                <button className={style.btn}>Pasirinkti</button></p>
            <p style={show01===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Filmo metu tylima,  o dalinamasi įspūdžiais po filmo, prie kavos ar arbatos puodelio.
            <button className={style.btn}>Pasirinkti</button>
            </p>
        </div>
    
        <div  className={style.questionContainer}>
            <h3 onClick={() => hide1()} className={style.question}>Teatras
                <img style={show1===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
                <img style={show1===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
            </h3>
            <h3 onClick={() => hide10()} style={show1===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Nuėjimas drauge į teatrą.
                <img style={show10===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.answerImg} src={plus} alt="plus" />
                <img style={show10===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.answerImg} src={x} alt="x" />
            </h3>            
            <p style={show10===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Teatro metu pasidalinama mintimis.
            <button className={style.btn}>Pasirinkti</button>
            </p>
            <p style={show10===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Teatro metu tylima.
            <button className={style.btn}>Pasirinkti</button>
            </p>
    
            <h3 onClick={() => hide11()} style={show1===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Nuėjimas drauge ir įpsūdžių pasidalinimas po teatro valanda laiko prie puodelio arbatos.
                <img style={show11===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.answerImg} src={plus} alt="plus" />
                <img style={show11===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.answerImg} src={x} alt="x" />
            </h3>      
                <p style={show11===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Teatro metu pasikeičiama keliais žodžiais, o po jo prie puodelio arbatos dalinamasi įspūdžiais.
            <button className={style.btn}>Pasirinkti</button>
            </p>
            <p style={show11===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Teatro metu tylima, o po jo prie puodelio arbatos dalinamasi įspūdžiais.
            <button className={style.btn}>Pasirinkti</button>
            </p>
        </div>
        <div  className={style.questionContainer}>
            <h3 onClick={() => hide2()} className={style.question}>Pokalbiai
                <img style={show2===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
                <img style={show2===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
            </h3>
            <h3  style={show2===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Pokalbiai telefonu, internetu.
            <button className={style.btn}>Pasirinkti</button>
            </h3>
            <h3  style={show2===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Poklabiai susitinkus gyvai.
            <button className={style.btn}>Pasirinkti</button>
            </h3>
            <h3  style={show2===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Pokalbiai, kurių gali ir nebūti, tyloje praleistas laikas drauge.
            <button className={style.btn}>Pasirinkti</button>
            </h3>
        </div>
        <div  className={style.questionContainer}>
            <h3 onClick={() => hide3()} className={style.question}>Repeticija
                <img style={show3===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
                <img style={show3===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
            </h3>
            <h3  style={show3===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Repetuoji? Nori palaikymo, pastebėjimų ar draugiško patarimo? Prašau, padėsiu stebėdama nuotoliu ar klausantis telefonu.
            <button className={style.btn}>Pasirinkti</button>
            </h3>
            <h3  style={show3===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Repeticijos gyvas žiūrovas, kuris palaikys, padės ir pagirs, ar pasakys savo pastebėjimus.
            <button className={style.btn}>Pasirinkti</button>
            </h3>
        </div>
       
        <div  className={style.questionContainer}>
            <h3 onClick={() => hide4()} className={style.question}>Pasivaikščiojimas
                <img style={show4===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
                <img style={show4===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
            </h3>
            <h3 onClick={() => hide40()} style={show4===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Pasivaikčiojimas gamtoje, pajūryje, parkuose ar kur širdis kviečia.
                <img style={show40===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.answerImg} src={plus} alt="plus" />
                <img style={show40===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.answerImg} src={x} alt="x" />
            </h3> 
            <p style={show40===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Pasivaikščiojimams gamtoje nebūtina kalbėti, galima drauge ir patylėti.
            <button className={style.btn}>Pasirinkti</button>
            </p>
            <p style={show40===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Pasivaikščiojimas su lengvomis temomis ar diskusijomis.
            <button className={style.btn}>Pasirinkti</button>
            </p>
            <h3 onClick={() => hide41()} style={show4===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Pasivaikščiojimas mieste.
                <img style={show41===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.answerImg} src={plus} alt="plus" />
                <img style={show41===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.answerImg} src={x} alt="x" />
            </h3> 
          
            <p style={show41===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Pasivaikčiojimas mieste tylint.
            <button className={style.btn}>Pasirinkti</button>
            </p>
            <p style={show41===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Pasivaikčiojimas mieste bendraujant.
            <button className={style.btn}>Pasirinkti</button>
            </p>
        </div>
        <div  className={style.questionContainer}>
            <h3 onClick={() => hide5()} className={style.question}>Vakarienė
                <img style={show5===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
                <img style={show5===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
            </h3>
            <h3 onClick={() => hide50()} style={show5===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Gamtoje
                <img style={show50===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.answerImg} src={plus} alt="plus" />
                <img style={show50===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.answerImg} src={x} alt="x" />
            </h3> 
          
            <p style={show50===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Vakarienė gamtoje tyloje, stebint saulėlydį ar gėrintis gamta.
            <button className={style.btn}>Pasirinkti</button>
            </p>
            <p style={show50===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Vakarienė gamtoje bendraujant
            <button className={style.btn}>Pasirinkti</button>.</p>
            <h3  onClick={() => hide51()} style={show5===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Mieste.
                <img style={show51===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.answerImg} src={plus} alt="plus" />
                <img style={show51===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.answerImg} src={x} alt="x" />
            </h3> 
          
            <p style={show51===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Vakarienė mieste tylint.
            <button className={style.btn}>Pasirinkti</button>
            </p>
            <p style={show51===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Vakarienė mieste bendraujant.
            <button className={style.btn}>Pasirinkti</button>
            </p>
        </div>
        <div  className={style.questionContainer}>
            <h3 onClick={() => hide6()} className={style.question}>Koncertas
                <img style={show6===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
                <img style={show6===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
            </h3>
            <h3  onClick={() => hide60()} style={show6===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Nuėjimas drauge.
                <img style={show60===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.answerImg} src={plus} alt="plus" />
                <img style={show60===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.answerImg} src={x} alt="x" />
            </h3> 

            <p style={show60===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Koncerto metu pasidalinama mintimis.
            <button className={style.btn}>Pasirinkti</button>
            </p>
            <p style={show60===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Koncerto metu tylima.
            <button className={style.btn}>Pasirinkti</button>
            </p>
            <h3  onClick={() => hide61()} style={show6===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Nuėjimas drauge ir įpsūdžių pasidalinimas po koncerto valanda laiko prie puodelio arbatos.
                <img style={show61===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.answerImg} src={plus} alt="plus" />
                <img style={show61===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.answerImg} src={x} alt="x" />
            </h3> 
            
            <p style={show61===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Koncerto metu pasidalinama mintimis, o po jo prie puodelio arbatos dalinamasi įspūdžiais.
            <button className={style.btn}>Pasirinkti</button>
            </p>
            <p style={show61===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Koncerto metu tylima, o po jo prie puodelio arbatos dalinamasi įspūdžiais.
            <button className={style.btn}>Pasirinkti</button>
            </p>
        </div>
        <div  className={style.questionContainer}>
            <h3 onClick={() => hide7()} className={style.question}>Renginys
                <img style={show7===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
                <img style={show7===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
            </h3>
            <h3  onClick={() => hide70()} style={show6===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Nuėjimas drauge.
                <img style={show70===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.answerImg} src={plus} alt="plus" />
                <img style={show70===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.answerImg} src={x} alt="x" />
            </h3> 
            
            <p style={show70===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Renginio metu pasidalinama mintimis.
            <button className={style.btn}>Pasirinkti</button>
            </p>
            <p style={show70===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Renginio metu tylima.
            <button className={style.btn}>Pasirinkti</button>
            </p>
    
            <h3  onClick={() => hide71()} style={show7===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Nuėjimas drauge ir įpsūdžių pasidalinimas po renginio valanda laiko prie puodelio arbatos.
                <img style={show71===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.answerImg} src={plus} alt="plus" />
                <img style={show71===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.answerImg} src={x} alt="x" />
            </h3> 
            <p style={show71===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Renginio metu pasidalinama mintimis, o po jo prie puodelio arbatos dalinamasi įspūdžiais.
            <button className={style.btn}>Pasirinkti</button>
            </p>
            <p style={show71===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Renginio metu tylima, o po jo prie puodelio arbatos dalinamasi įspūdžiais.
            <button className={style.btn}>Pasirinkti</button>
            </p>
        </div>
        <div  className={style.questionContainer}>
            <h3 onClick={() => hide8()} className={style.question}>Sportas
                <img style={show8===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
                <img style={show8===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
            </h3>
            <h3 onClick={() => hide80()} style={show8===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Ėjimas drauge į sporto salę.
                <img style={show80===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.answerImg} src={plus} alt="plus" />
                <img style={show80===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.answerImg} src={x} alt="x" />
            </h3> 
            <p style={show80===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Sportuojant bendraujama.
            <button className={style.btn}>Pasirinkti</button>
            </p>
            <p style={show80===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Sportuojant tylima.
            <button className={style.btn}>Pasirinkti</button>
            </p>
            <h3 onClick={() => hide81()} style={show8===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Sportas nuotoliniu būdu.
                <img style={show81===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.answerImg} src={plus} alt="plus" />
                <img style={show81===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.answerImg} src={x} alt="x" />
            </h3> 
            <p style={show81===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Sportuojant dalinamasi įspūdžiais.
            <button className={style.btn}>Pasirinkti</button>
            </p>
            <p style={show81===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Sportuojant tylima.
            <button className={style.btn}>Pasirinkti</button>
            </p>
        </div>
        <div  className={style.questionContainer}>
            <h3 onClick={() => hide9()} className={style.question}>Mokintis.
                <img style={show9===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
                <img style={show9===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
            </h3>
            <h3 onClick={() => hide90()} style={show9===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Mokintis drauge programavimo.
            <button className={style.btn}>Pasirinkti</button>
            </h3>
            <h3 onClick={() => hide91()} style={show9===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Mokintis drauge šokti.
            <button className={style.btn}>Pasirinkti</button>
            </h3>
            <h3 onClick={() => hide92()} style={show9===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Mokintis drauge sporto veiklos.
            <button className={style.btn}>Pasirinkti</button>
            </h3>
            <h3 onClick={() => hide93()} style={show9===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Mokintis gaminti.
            <button className={style.btn}>Pasirinkti</button>
            </h3>
        </div>
        <div  className={style.questionContainer}>
            <h3 onClick={() => hide100()} className={style.question}>Mityba
                <img style={show1000===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
                <img style={show1000===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
            </h3>
            <h3 style={show1000===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Laikytis dietos.
            <button className={style.btn}>Pasirinkti</button>
            </h3>
            <h3 style={show1000===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Sveikai maitintis.
            <button className={style.btn}>Pasirinkti</button>
            </h3>
        </div>
       </section>
    
    
        
        </>
    }
   
   
  
    
    

