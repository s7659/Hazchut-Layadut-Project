import { useParams } from "react-router-dom";
import AdvancedDemo from './CardLesson';


function Torah() {
  const chumash=useParams()

console.log(chumash);
    const Bereshit=['בראשית','נח','לך לך','וירא','חיי שרה','תולדות','ויצא','וישלח','וישב','מקץ','ויגש','ויחי']
    const Shmot=['שמות','וארא','בא ','בשלח','יתרו','משפטים','תרומה','תצווה','כי תישא','ויקהל','פקודי']
    const vaykra=['ויקרא','צו','שמיני ','תזריע','מצורע','אחרי מות','קדושים','אמור','בהר ','בחוקותי']
    const bamidbar=['במדבר','נשא','בהעלותך ','שלח','קורח','חוקת ','בלק','פנחס','מטות ','מסעי']
    const dvarim=['דברים','ואתחנן','עקב ','ראה','שופטים','כי תצא ','כי תבוא','נצבים','וילך ','האזינו','וזאת הברכה']
    const program=['מוכן לפרשה','רעיון לפרשה','תחשבו על זה','נושאים בפרשה','מאמר לפרשה' ]
    return (
    <>
    <div>
       Tora,
       {chumash}
    </div>
    {<AdvancedDemo/>}

    </>
    );
  }
  
  export default Torah;