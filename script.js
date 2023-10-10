// function Nav() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                     <li className="nav-item active">
//                         <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="#">Link</a>
//                     </li>
//                     <li className="nav-item dropdown">
//                         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                             Dropdown
//                         </a>
//                         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                             <a className="dropdown-item" href="#">Action</a>
//                             <a className="dropdown-item" href="#">Another action</a>
//                             <div className="dropdown-divider"></div>
//                             <a className="dropdown-item" href="#">Something else here</a>
//                         </div>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link disabled" href="#">Disabled</a>
//                     </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//         </nav>
//     )
// }

// function Home() {
//     return(
//         <h1>WELCOME TO REACT</h1>
//     )
// }

// const Footer = () => <h2>Second one</h2>

// const page = (
//     <div>
//         <Nav />
//         <Home />
//         <Footer />
//         <nav>
//             <h1>Website</h1>
//             <ul>
//                 <li>Pricing</li>
//                 <li>About</li>
//                 <li>Contact</li>
//             </ul>
//         </nav>
//     </div>
// )
import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./src/Footer";

// ... your main application logic ...
ReactDOM.render(
    <div>
        <Header />
        <Main />
        <Footer />
    </div>,
    document.getElementById("root")
);





// const NavBar = () => {
//     return(
//         <header>
//             <nav className="nav">
//                 <img className="nav-logo" src='./logo.png' placeholder="LOGO" />
//                 <ol className="nav-item">
//                     <li>Pricing</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                 </ol>
//             </nav>
//         </header>
//     )
// }

// const Main = () => {
//     return (
//         <div className="main-content">
//             <h1>Reason I'm excited to learn React</h1>
//             <ul>
//                 <li>FUFU</li>
//                 <li>AMALA</li>
//                 <li>EBA</li>
//                 <li>EWA</li>
//             </ul>
//         </div>
//     )     
// }

// const Footer = () => {
//     return(
//         <div className="footer">
//             <small>2023 BELLO development. ALl rights reserved.</small>
//         </div>
//     )
// }

// const Page = () => {
//     return (
//         <div>
//             <NavBar />
//             <Main />
//             <Footer />
//         </div>
//     )
// } 

// ReactDOM.render(
//     <Page />,
//     document.getElementById('root')
// )