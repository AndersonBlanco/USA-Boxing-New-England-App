import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue} from "firebase/database";
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGn2lA6qifxQFlXTAH2SCXIJBz_r1PLPs",
  authDomain: "usa-boxing-new-england.firebaseapp.com",
  projectId: "usa-boxing-new-england",
  storageBucket: "usa-boxing-new-england.appspot.com",
  messagingSenderId: "1049430244510",
  appId: "1:1049430244510:web:33a0a497c2291839b84f8f",
  measurementId: "G-PCMKEZMGFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const database = getDatabase(app);

function getFromDatabase(dir){
  const r = ref(database); 

  get(child(r, "gyms/"))
  .then(async snapshot =>{
      let jsonData = snapshot.val(); 
      if(snapshot.exists()){
          //console.log(d);
         // setData(JSON.stringify(jsonData));
          //console.log(JSON.parse(data))
      return jsonData; 
      }else{
          //console.log("No Val")
          return "Error"; 
      }
  })
}
export {app, database, getFromDatabase}; 