import React from 'react'
import NavbarComponent from '../containers/navbar/NavbarComponent.tsx'
import CarouselHomePage from "./CarouselHomePage.tsx";
import PostList from "./PostList.tsx";
import CourseList from "./CourseList.tsx";
import Footer from "../containers/footer/Footer.tsx";
import Header from "../containers/header/Header.tsx";

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <NavbarComponent />
            <CarouselHomePage />
            <PostList />
            <CourseList />
            <Footer />
        </div>
    )
}

export default HomePage