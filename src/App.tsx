import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Header from "./components/containers/header/Header.tsx";
import Footer from "./components/containers/footer/Footer.tsx";
import RouteComponent from "./Routes/RouteComponent.tsx";
import NavbarComponent from "./components/containers/navbar/NavbarComponent.tsx";

const App: React.FC = () => {

    return (
        <>
            <Header />
            <NavbarComponent />
            <RouteComponent />
            <Footer />
        </>
    );

};

export default App
