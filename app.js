import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

export default function App() {

  return (
  
    <Router>
      <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">https://www.humanitarianoperations.org/</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      
      <li class="nav-item">
        <a class="nav-link" href="/home"><i>Our app</i></a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="/about"><i>Contact Hope</i></a>
      </li>
      
    </ul>   
  </div>
</nav>


        <Routes>
          <Route path="/about" element={<About />} /> 
          <Route path="/home" element={<Home />} />
        </Routes>
        
      </div>
    </Router>
    
  );
}

function test() {
<iframe width="560" height="315" src="https://www.youtube.com/embed/NSyvvpI1LjQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
}

function Home() {
<iframe width="560" height="315" src="https://www.youtube.com/embed/NSyvvpI1LjQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
}

function About() {
  return (
  <div class="container">
  
  <div class="row">
  <div class="col-xl-6">
  
  <iframe width="560" height="315" src="https://www.youtube.com/embed/NSyvvpI1LjQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  
   <div class="col-xl-6 d-flex align-items-center">
   
  <form>
  <input type="text" name="name" placeholder="Name" required/><br/>
    <input type="email" name="name" placeholder="Email" required/><br/>
  <textarea rows="4" cols="40" required></textarea><br />
  <input type="submit"/>
  </form>
  
  </div>
  </div>
  
  <div class="col-12" id="hello">
  <h3 align="center">Welcome to hope</h3>
  Hope<br/>
  <hr />
  <p id="name">
  We aim to provide care to areas of disaster with care and empathy. <br />
  When disastear strikes example in Malysia we aim to respond quickly <br />
  When children and thoses that are vunerable have no place to turn to <br />
  we provide care and support <br />
  Understanding what is real care, is at the heart of our orginasation.
  </p>
  <hr />
  </div>
  <div class="col-12" id="hello">
  </div>
  
  </div>
  )
}
