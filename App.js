import React from 'react';
import './App.css';

// import Carousel from 'react-bootstrap/Carousel'
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router } from 'react-router-dom';

// var imageName = require('./Rov_cut_Design_Final/navbar/logo_rov.png');
// console.log(imageName);

function App() {
    return (
        <div className="App">
            {/* <Router>
            <Navbar />
            </Router> */}
            <head></head>
            <body>
            <nav class="navbar navbar-default " id="navigation">
            <div class="container-fluid" >
            <div class="navbar-header" >
                <ul class="topnav" id="myTopnav">
                    <li href="/">
                        <div class="logo-image">
                            <img src="images/navbar/logo_rov.png" class="img-fluid"/>
                        </div>
                    </li>
                    <li><a href="home" class ='bigFont'>หน้าหลัก<p><a class='smallFont'>HOME</a></p></a></li>

                    <li><a href="https://esports.rov.in.th/" class ='bigFont'>ทัวร์นาเมนต์<p><a class='smallFont'>TOURNAMENT</a></p></a></li>

                    <li><a href="https://rpl2021.rov.in.th/" class ='bigFont'>กิจกรรม<p><a class='smallFont'>ACTIVITY</a></p></a></li>

                    <li><div class="dropdown">
                        <div class="dropbtn" class ='bigFont'>หอเกียรติยศ<p><a class='smallFont'>HALL OF FLAME</a></p></div>
                        <div class="dropdown-content">
                            <a href="https://rov.in.th/esports/rpls1">RoV Pro League S1</a>
                            <a href="https://rov.in.th/esports/rpls2">RoV Pro League S2</a>
                            <a href="https://rov.in.th/esports/rpls3">RoV Pro League S3</a>
                            <a href="https://rov.in.th/esports/rpls4">RoV Pro League S4</a>
                            <a href="https://rov.in.th/esports/rpls5">RoV Pro League 2020 Summer</a>
                            <a href="https://rov.in.th/esports/rpls6">RoV Pro League 2020 Winter</a>
                        </div>
                        </div>
                    </li>

                    <li><a href="https://support.garena.in.th/new/games/faqs/1/garena-rov" class ='bigFont'>บริการลูกค้า<p><a class='smallFont'>SUPPORT</a></p></a></li>
                    <li><a href="news" class ='bigFont'>ข่าวสาร<p><a class='smallFont'>NEWS</a></p></a></li>

                    <li class="right"><a href="#about" >เข้าสู่ระบบ</a></li>
                </ul>
            </div> 
        </div>
    </nav> 

        <div class='content'>
                
<p>Change image every 2 seconds:</p>

<div class="slideshow-container" data-cycle="2000">

    <div class="mySlides fade">
        <div class="numbertext">1 / 3</div>
        <img src="https://placeimg.com/320/240/animals"/>
        <div class="text">Caption Text</div>
    </div>

    <div class="mySlides fade">
        <div class="numbertext">2 / 3</div>
        <img src="https://placeimg.com/320/240/nature"/>
        <div class="text">Caption Two</div>
    </div>

    <div class="mySlides fade">
        <div class="numbertext">3 / 3</div>
        <img src="https://placeimg.com/320/240/people"/>
        <div class="text">Caption Three</div>
    </div>

</div>

<p>Change image every 3 seconds:</p>

<div class="slideshow-container" data-cycle="3000">

    <div class="mySlides fade">
        <div class="numbertext">1 / 2</div>
        <img src="https://placeimg.com/320/240/animals"/>
        <div class="text">Caption 1</div>
    </div>

    <div class="mySlides fade">
        <div class="numbertext">2 / 2</div>
        <img src="https://placeimg.com/320/240/nature"/>
        <div class="text">Caption 2</div>
    </div>

</div>

        </div>
    <footer>
      {/* <!-- Footer main --> */}
      <section class="ft-main">
        <div class="ft-main-item">
          <ul>
            <li><a href="#">HOME</a></li>
          </ul>
        </div>
        <div class="ft-main-item">
          <ul>
            <li><a href="#">RPL</a></li>
            <li><a href="#">TOURNAMENT</a></li>
          </ul>
        </div>
        <div class="ft-main-item">
          <ul>
            <li><a href="#">REWARDS</a></li>
            <li><a href="#">HALL OF FAME</a></li>
            <li><a href="#">SUPPORT</a></li>
          </ul>
        </div>
        {/* <!-- Footer social --> */}
        <ul class="ft-social-list">
          <li><a href="#"><img src="images/footer\footer_socials_icon/icon_twitter.png"/></a></li>
          <li><a href="#" ><img src="images/footer\footer_socials_icon/icon_youtube.png"/></a></li>
          <li><a href="#"><img src="images/footer\footer_socials_icon/icon_instagram.png"/></a></li>
          <li><a href="#"><img src="images/footer\footer_socials_icon/icon_facebook.png"/></a></li>
        </ul>
      </section>
     
      
     
      {/* <!-- Footer legal --> */}
      <section class="ft-legal">
        <ul class="ft-legal-list">
        <li><img src="images/footer/2015_tencent_games_lnc_all_rights reserved.jpg"/></li>
        <li><img src="images/footer/term_of_service_privacy_statement.jpg"/></li>
        {/* <li><a href="#"><img src="images/footer/term_of_service_privacy_statement.jpg"/></a></li> */}
          
        </ul>
      </section>
    </footer>

        {/* <footer>
            <div class="footer">
                <div>
                    <h1>test</h1>
                </div>
            </div>
        </footer> */}

        {/*  */}
        
    </body>
    </div>



    );
}

var slideshowContainers = document.getElementsByClassName("slideshow-container");
for(let s = 0; s < slideshowContainers.length; s++) {
	var cycle = slideshowContainers[s].dataset.cycle;
	var slides = slideshowContainers[s].querySelectorAll('.mySlides');
	var slideIndex = 0;
	showSlides(slides, slideIndex, cycle);
};


function showSlides(slides, slideIndex, cycle) {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    };
    slides[slideIndex - 1].style.display = "block";
    setTimeout(function() {
		showSlides(slides, slideIndex, cycle)
	}, cycle);
};

export default App;



