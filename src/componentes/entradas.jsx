import React from "react";

import futbol from "../img/futbol-masculino.jpg";
import museo from "../img/museo.jpg";
import business from "../img/business.jpg";
import tours from "../img/tours.jpg";
import baloncesto from "../img/baloncesto.jpg";
import femenino from "../img/futbol-femenino.jpg";
import futsal from "../img/futsal.jpg";
import balonmano from "../img/balonmano.jpg"
import hockey from "../img/hockey.jpg"
import atletic from "../img/atletic.jpg"

function EntradasBarca() {

function scrollCards(direction){
const container = document.getElementById("cards");
const scrollAmount = 1000;

container.scrollBy({
left: direction * scrollAmount,
behavior: "smooth"
});
}

return (

<div className="barca-section">

<h2>ENTRADAS BARÇA</h2>

<button className="arrow left" onClick={() => scrollCards(-1)}>‹</button>
<button className="arrow right" onClick={() => scrollCards(1)}>›</button>

<div className="carousel">

<div className="cards" id="cards">

<div className="card">
<img src={futbol} alt="futbol masculino"/>
<span className="card-text">
FÚTBOL 
MASCULINO 
<span className="arrow-text">»</span>
</span>
</div>

<div className="card">
<img src={museo} alt="museo barca"/>
<span className="card-text">
MUSEO BARÇA
<span className="arrow-text">»</span>
</span>
</div>

<div className="card">
<img src={business} alt="barca business"/>
<span className="card-text">
BARÇA BUSINESS
<span className="arrow-text">»</span>
</span>
</div>

<div className="card">
<img src={tours} alt="barca tours"/>
<span className="card-text">
BARÇA TOURS
<span className="arrow-text">»</span>
</span>
</div>

<div className="card">
<img src={baloncesto} alt="baloncesto"/>
<span className="card-text">
BALONCESTO
<span className="arrow-text">»</span>
</span>
</div>

<div className="card">
<img src={femenino} alt="futbol femenino"/>
<span className="card-text">
FÚTBOL 
FEMENINO
<span className="arrow-text">»</span>
</span>
</div>

<div className="card">
<img src={futsal} alt="futsal"/>
<span className="card-text">
FUTSAL
<span className="arrow-text">»</span>
</span>
</div>

<div className="card">
<img src={balonmano} alt="futsal"/>
<span className="card-text">
BALONMANO
<span className="arrow-text">»</span>
</span>
</div>

<div className="card">
<img src={hockey} alt="futsal"/>
<span className="card-text">
HOCKEY PATINES
<span className="arrow-text">»</span>
</span>
</div>

<div className="card">
<img src={atletic} alt="futsal"/>
<span className="card-text">
BARÇA ATLETIC
<span className="arrow-text">»</span>
</span>
</div>

</div>
</div>

<style>{`

.barca-section{
width:100%;
padding:100px 10px;
background:#f3f3f3;
font-family:Arial, Helvetica, sans-serif;
position:relative;
}

h2{
color:black;
font-family:'Bebas Neue', sans-serif;
transform:scaleY(2);
}

.barca-section h2{
text-align:center;
margin-bottom:20px;
letter-spacing:2px;
font-weight:700;
}

.carousel{
position:relative;
overflow:hidden;
}

.cards{
display:flex;
gap:0px;
overflow-x:auto;
overflow-y:hidden;
scroll-behavior:smooth;
scrollbar-width:none;
}

.cards::-webkit-scrollbar{
display:none;
}

.card{
position:relative;
width:220px;
height:340px;
border-radius:14px;
overflow:hidden;
cursor:pointer;
flex-shrink:0;
transition:transform .35s ease;
}

/* LA CARD SE HACE GRANDE */

.card:hover{
transform:scale(1.12);
z-index:5;
}

/* Imagen */

.card img{
width:100%;
height:100%;
object-fit:cover;
border-radius:14px;
}

/* Gradiente inferior */

.card::after{
content:"";
position:absolute;
bottom:0;
left:0;
width:100%;
height:50%;
pointer-events:none;
}

/* Texto */

.card-text{
position:absolute;
bottom:32px;
left:50px;
right:220px;
color:white;
font-weight:700;
font-size:18px;
display:flex;
align-items:center;
justify-content:space-between;
z-index:2;
}

.arrow-text{

position:absolute;
right:-130px;  
bottom:5px; 
font-size:30px;
color:white;
transition:transform .3s ease;
}

/* Flechas del carrusel */

.arrow{
position:absolute;
top:120px;
width:28px;
height:28px;
border:none;
background:transparent;
font-size:40px;
cursor:pointer;
color:black;
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
transition:background .25s ease, transform .2s ease, color .2s ease;
z-index:20;
}

.left{
right:55px;
}

.right{
right:15px;
}

.arrow:hover{
background:rgba(3,45,107,0.94);
color:white;
transform:scale(1.05);
}

.card:hover .arrow-text{
transform:translateX(12px);
}

`}</style>

</div>

);
}

export default EntradasBarca;