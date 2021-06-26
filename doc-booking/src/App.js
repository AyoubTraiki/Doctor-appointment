import React,{useState,useEffect} from "react";
import Fire from "./component/Fire";
import Login from "./component/Login";
import Home from "./component/Home";
import "./style/App.css";


function App(){

  // Sign in && Sign up
  const[user,setUser]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[emailError,setEmailError]=useState('');
  const[passwordError,setPasswordError]=useState('');
  const[hasAccount,setHasAccount]=useState(true);
  const[nom, setNom]=useState("");
  const[prenom, setPrenom]=useState("");
  const[adresse, setAdresse]=useState("");
  const[numTel, setNumTel]=useState("");
  

  const clearInputs=()=>{
    setEmail('');
    setPassword('');
  }

  const clearErrors=()=>{
    setEmailError('');
    setPasswordError('');
  }



  const handleLogin=()=>{
    clearErrors();
    Fire
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch((err)=>{
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default :
            break;
        }

      })

  }
  

  const handleSignup=()=>{
    clearErrors();

    Fire.auth().createUserWithEmailAndPassword(email,password);
    Fire.auth().createUserWithEmailAndPassword(email,password).catch((err)=>{
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
          default :
            break;
        }
      })

      if(emailError == "" && passwordError == ""){
        Fire
        .firestore()
        .collection("User")
        .add({
          nom : {nom},
          prenom :{prenom},
          adresse :{adresse},
          email : {email},
          numTel : {numTel}
        })
      }
      
  }
  const handleLogout=()=>{
    Fire.auth().signOut();

  }

  const authListener=()=>{
    Fire.auth().onAuthStateChanged((user)=>{
      if(user){
        clearInputs();
        setUser(user);
    
      }
      else{
        setUser("");
      }
    })
  }
  useEffect(()=>{
    authListener();
  },[]);





  return(
    <div className="App">
      {user ?(
        <Home handleLogout={handleLogout}/>

      ):(
        <Login 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
        nom={nom}
        setNom={setNom}
        prenom={prenom}
        setPrenom={setPrenom}
        adresse={adresse}
        setAdresse={setAdresse}
        numTel={numTel}
        setNumTel={setNumTel}
       />

      )}
     
    </div>
  )
}



export default App;
