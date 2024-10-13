import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "../components/homepage/Homepage.tsx";
import CourseDetail from "../components/coursedetail/CourseDetail.tsx";
import Login from "../components/authenpage/Login.tsx";
import Register from "../components/authenpage/Register.tsx";
import Profile from "../components/profile/Profile.tsx";

const RouteComponent: React.FC = () => {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/course-detail" element={<CourseDetail />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/profile' element={<Profile />} />
                </Routes>
            </Router>
        </>
    );

};

export default RouteComponent
