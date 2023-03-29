/* eslint-disable jsx-a11y/aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
//import logo from './logo.svg;
import './App.css';

function App() {
  return (
    <div>

	

	<div className="wrapper">
		<header className="page-header">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				
				<a className="navbar-brand" href="home.html">
					<img className="logo"
						src="https://www.nicepng.com/png/full/944-9446351_the-symbol-for-the-nss-has-been-based.png"
						alt="nss logo" style="float: left;" width="50" height="50"/>
					<p className="nss">
						NATIONAL SERVICE SCHEME
					</p>
					<p className="bits">
						BITS Pilani, Hyderabad Campus
					</p>
				</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse"
					data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<div id="nav-items" className="navbar-nav ml-auto">
						<a href="home.html" className="nav-item nav-link navbar-right"> Home </a>
						<a href="Events.html" className="nav-item nav-link"> Events </a>
						<a href="index.html" className="nav-item nav-link"> About Us </a>
						<a href="Office_bearers.html" className="nav-item nav-link"> Office Bearers </a>
						<a href="contact-us.html" className="nav-item nav-link"
							style="border: 1px #F1633B solid; color:#F1633B"> Contact Us </a>

					</div>
				</div>

			</nav>
		</header>
	</div>

	
		<header>
			<nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
				<a className="navbar-brand" href="#">
					<img className="logo" src = "https://www.nicepng.com/png/full/944-9446351_the-symbol-for-the-nss-has-been-based.png" 							alt="nss logo" style="float: left;" />
					<p className="nss">
						NATIONAL SERVICE SCHEME	
					</p>
					<p className="bits">
						BITS Pilani, Hyderabad Campus
					</p>
			    </a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-									controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
			  	</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<div className="navbar-nav ml-auto">
					<a href="home.html" className="nav-item nav-link navbar-right"> Home </a>
					<a href="Events.html" className="nav-item nav-link"> Events </a>
					<a href="index.html" className="nav-item nav-link" > About Us </a>
					<a href="Office_bearers.html" className="nav-item nav-link"> Office Bearers </a>
					<a href="contact-us.html" className="nav-item nav-link" style="border: 1px #F1633B solid; color:#F1633B"> Contact Us </a>
					
				</div>
				</div>
				
			</nav>
	
	</header>
	 <div className="navy">

				
			<div className="logop">
				<img className="logo" src = "https://www.nicepng.com/png/full/944-9446351_the-symbol-for-the-nss-has-been-based.png" alt="nss logo" 						style="float: left;" />
				<div className="name" style="float: left;">
					<p className="nss">
						NATIONAL SERVICE SCHEME	
					</p>
					<p className="bits">
						BITS Pilani, Hyderabad Campus
					</p>
				</div>
			</div> 
	<nav className="nav_bar" id="navBar">
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 										controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="nav_links">
						<li><a href="#">Home</a></li>
						<li><a href="#">Events</a></li>
						<li className="active"><a href="#">About us</a></li>
						<li><a href="#">Office Bearers</a></li>
						<li><a href="#">Contact us</a></li>

					</ul>
				</div>
			</nav>
			</div>


	<div className="about-us-text">
		<div id="form-in-au">
			<div className="cform" style="margin-top: 100px;">

				<form id="form-1" action="https://formsubmit.co/f20212972@hyderabad.bits-pilani.ac.in" method="post"/>
					<input type="email" id="email" name="email" placeholder="Email" style="float: left;"/>
					<input type="text" id="name" name="name" placeholder="Name" style=" "/>

					<br></br>
					<input type="text" id="subject" name="subject" placeholder="Subject" size="44"/>
					<br></br>
					<textarea id="Message" name="message" placeholder="Message" cols="45" rows="7"></textarea>
					<br></br>
					<input id="submit" type="submit" value="Submit" style="border: 1px #343a40 solid; color:#FFFFFF"/>
				</div>
			</div>
		</div>
    
		<div id="form-in-au">

			<div className="cform-msg">
				<h1 style="color:black">
					Get In Touch With Us
				</h1>
				<br></br>
				<p style="color:black size:10px " >
					We are a community spread over a wide range of other platforms too. You can find more about us,
					support us by following our pages if you like our work.<br></br>
					Here's where we try to spread what we do, and where you can track us right from where we
					started.</p><br></br><br>
					<span style="font-size:30px;">We'd like to hear from you.</span>

				

		</br>


		</div>


	</div>

	

	<footer>
		<div className="footer-contacts" style="font-size:15px;">
			<div className="wrapper">
				<div className="footer-title">Contacts Us</div>
				<p style="margin-bottom: 15px">
					Shamirpet-Keesara Road,<br />Jawahar Nagar, Shameerpet,<br />Hyderabad,
					Telangana 500078
				</p>
				<div className="footer-iconContent">
					<i className="fa fa-envelope" aria-hidden="true" style="height: 1px"></i>
					nss@hyderabad.bits-pilani.ac.in
				</div>
				<div className="footer-iconContent" style="margin-top: 12px">
					<i className="fa fa-phone" aria-hidden="true"></i> +91 7032199226
				</div>
			</div>
		</div>
		<div className="footer-list">
			<div className="wrapper">
				<div className="footer-title">List A</div>
				<div className="list-item">1</div>
				<div className="list-item">2</div>
				<div className="list-item">3</div>
				<div className="list-item">4</div>
			</div>
		</div>
		<div className="footer-list">
			<div className="wrapper">
				<div className="footer-title">List B</div>
				<div className="list-item">1</div>
				<div className="list-item">2</div>
				<div className="list-item">3</div>
				<div className="list-item">4</div>
			</div>
		</div>
		<div className="footer-followUs">
			<div className="wrapper">
				<div className="footer-title">Follow Us</div>
				<div className="list-item">
					<a href="https://www.facebook.com/nss.bphc" target="_blank" rel="noreferrer">
						<i className="fa fa-facebook-square"></i>
						Facebook
					</a>
				</div>
				<div className="list-item">
					<a href="https://www.linkedin.com/company/nss-birla-institute-of-technology-and-science-hyderabad/mycompany/"
						target="_blank" rel="noreferrer">
						<i className="fa fa-linkedin"></i>
						LinkedIn
					</a>
				</div>
				<div className="list-item">
					<a href="https://www.instagram.com/nss_bphc/" target="_blank" rel="noreferrer">
						<i className="fa fa-instagram"></i>
						Instagram
					</a>
				</div>
			</div>
		</div>
	</footer>
</div>
  );
}

export default App;