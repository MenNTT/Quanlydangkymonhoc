import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from "./components/homepage/Homepage.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import CourseDetail from "./components/coursedetail/CourseDetail.tsx";

const App: React.FC = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/course-detail" element={<CourseDetail />} />
            </Routes>
        </Router>
    );

};

export default App
