import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Leftsidebar from "./Components/Leftsidebar"
import Main from "./Components/Main"
import Rightsidebar from "./Components/Rightsidebar"
import Footer from "./Components/Footer"
import './index.css';

import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <div className='Main'>
   <>
    <Header />
    <section>
    <Leftsidebar />
    <Main />
    </section>    
    {/* <Rightsidebar /> */}
    <Footer />
    </>
  // </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
