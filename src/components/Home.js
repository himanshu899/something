import React from 'react';
import image from "../p4.jpg";


function Home() {
    console.log("something");
    return (
       <main>
            <img class="one"src={image} alt="pppp" 
            className="absolute object-cover w-full h-full" />
            
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1  
                    className="text-6xl text-center text-green-100 
                    font-bolde curvise leading-none 
                    lg:leading-snug home-name ">HAPPY BIRTHDAY DAY GUDIYA</h1>
            </section>

            

        </main> 
    )
}

export default Home
