import React from "react";
import ReactDOM from "react-dom";
import logo from './logo.png';
import './styles/App.scss';
import './styles/Media.scss';
import Main from "./components/Main.js";
import Policy from "./components/Policy.js";
import Contact from "./components/ContactUs.js";



class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = <Main />;

        this.pageMain = this.pageMain.bind(this);
        this.pagePolicy = this.pagePolicy.bind(this);
        this.pageContact = this.pageContact.bind(this);
    }

    pageMain() {
        this.setState(<Main />)
    }
    pagePolicy() {
        this.setState(<Policy />)
    }
    pageContact() {
        this.setState(<Contact />)
    }
    close() {
        document.querySelector(".mobnav").classList.remove("slideInRight");
        document.querySelector(".overlay").style.display = "none";
    }
    open() {
        document.querySelector(".mobnav").classList.add("slideInRight");
        document.querySelector(".overlay").style.display = "block";
    }
    render() {
        return (
            <div className="page-wrap">
            	<header className="header-wrap">
				<div className="logo-wrap" onClick={this.pageMain}>
					<img src={logo} className="logo" alt="logo" />
					<h1>Glossy Blocks</h1>
				</div>
				<nav>
					<ul className="nav-wrap">
						<li onClick={this.pageMain}>Main</li>
						<li onClick={this.pagePolicy}>Privacy policy</li>
						<li onClick={this.pageContact}>Contact Us</li>
					</ul>
					<div className="icon-bar" onClick={this.open}>&#9776;</div>
				</nav>
				<div className="overlay" onClick={this.close}></div>
				<nav className="mobnav">					
					<span className="icon-close" onClick={this.close}>&#9932;</span>
					<ul className="mobnav-wrap">
						<li onClick={this.pageMain}>Main</li>
						<li onClick={this.pagePolicy}>Privacy policy</li>
						<li onClick={this.pageContact}>Contact Us</li>
					</ul>
				</nav>
				</header>
				<main className="">
					{ this.state }
				</main>
			</div>
        )
    }
}

ReactDOM.render(<Page />, document.getElementById("root"));