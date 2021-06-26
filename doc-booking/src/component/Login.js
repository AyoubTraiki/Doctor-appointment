import React from 'react';



function Login(props){
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
        nom,
        setNom,
        prenom,
        setPrenom,
        adresse,
        setAdresse,
        numTel,
        setNumTel
    }=props;
    

    return(
        <section className="login">
            {hasAccount ?(
                    <div className="loginContainer">
                    <label>E-mail</label>
                    <input
                            type="text"
                            autoFocus 
                            required 
                            value={email} 
                            onChange={(e)=>setEmail(e.target.value)} 
                    />
                    <p className="errorMsg">{emailError}</p>

                    <label>Password</label>
                    <input
                            type="password"
                            autoFocus 
                            required 
                            value={password} 
                            onChange={(e)=>setPassword(e.target.value)} 
                    />
                    <p className="errorMsg">{passwordError}</p>
                    <button onClick={handleLogin}>Sign in</button>
                    <br/>
                    <p>
                        Don't have an account? 
                        <span onClick={()=>setHasAccount(!hasAccount)}> Sign up </span>
                    </p>
                    </div>
                        
            ) :(
                    
                    <div className="loginContainer">
                        <label>Last Name :</label>
                        <input
                            type="text"
                            autoFocus 
                            required 
                            value={nom} 
                            onChange={(e)=>setNom(e.target.value)} 
                        />
                        <label>First Name :</label>
                        <input
                            type="text"
                            autoFocus 
                            required 
                            value={prenom} 
                            onChange={(e)=>setPrenom(e.target.value)} 
                        />
                        <label>Address :</label>
                        <input
                            type="text"
                            autoFocus 
                            required 
                            value={adresse} 
                            onChange={(e)=>setAdresse(e.target.value)} 
                        />
                        <label>E-mail :</label>
                        <input
                            type="text"
                            autoFocus 
                            required 
                            value={email} 
                            onChange={(e)=>setEmail(e.target.value)} 
                        />
                        <p className="errorMsg">{emailError}</p>
                        <label>Password :</label>
                        <input
                            type="password"
                            autoFocus 
                            required 
                            value={password} 
                            onChange={(e)=>setPassword(e.target.value)} 
                        />
                        <p className="errorMsg">{passwordError}</p>
                        <label>Phone :</label>
                        <input
                            type="number"
                            autoFocus 
                            required 
                            value={numTel} 
                            onChange={(e)=>setNumTel(e.target.value)} 
                        />
                        <button onClick={handleSignup}>Sign up</button>
                        <br/>
                        <p>
                            Have an account ? 
                            <span onClick={()=> setHasAccount(!hasAccount)}> Sign in </span>
                        </p>
                    </div>
                    )
            }
        </section>
    )
}

export default Login;