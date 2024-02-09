import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header"
import {Detail} from "./Detail"
import {Contact} from "./components/Contact"


ReactDOM.render(
<>
{/* <Header name = {Detail[0].name}
        age = {Detail[0].age}
 />
<Header name = {Detail[1].name}
        age = {Detail[1].age}
 /> */}


 <Header name = {Contact[0].name} 
         age = {Contact[0].age} 
         image = {Contact[0].image}
  />

 <Header name = {Contact[1].name} 
         age = {Contact[1].age} 
         image = {Contact[1].image}
  />

</>



,document.getElementById("root"));