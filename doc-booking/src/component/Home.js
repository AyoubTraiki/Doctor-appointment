import React from 'react';


function Home({handleLogout}){

    return(
        <section className="Home">
            <nav>
                <h2>Welcome</h2>
                <button class="inline" >Booking</button>
                <button class="inline" >Manual</button>
                <button class="inline" onClick={handleLogout}>Logout</button>
                
            </nav>

        </section>
    )

}



export default Home;