import React, { Fragment }  from 'react';
import Layout from '../components/layout';
import Navbar from '../components/components/Navbar';
import Footer from '../components/components/Footer';
import Doctor from '../components/components/Doctor';

const data = {
    src: "https://pbs.twimg.com/profile_images/1027107018904150016/_LSCoA74.jpg"
}

let { src } = data;
const QuienesSomos = () => {
    return (
       <Fragment>
           <Navbar/>
            <Doctor 
                src = { src }
            />
           <Footer/>
           <Layout/>
       </Fragment>    
    )
}


export default QuienesSomos;