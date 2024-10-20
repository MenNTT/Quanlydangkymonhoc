import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './App.css';
import RouteComponent from "./Routes/RouteComponent.tsx";
import {UserProvider} from "./components/contents/UserContext.tsx";
import {BrowserRouter as Router} from "react-router-dom";

const App: React.FC = () => {

    return (
        <div className='father-container'>
            <UserProvider>
                <Router>
                    <RouteComponent />
                </Router>
            </UserProvider>
        </div>
    );

};

export default App
